import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { id } = params;
  const body = await req.json();
  const {
    title,
    data,
    gridSize,
    imageUrl,
    canRemix,
    visibilityStatus,
    dailyPromptId,
  } = body;

  try {
    const profile = await prisma.profile.findUnique({
      where: { email: session.user.email },
    });

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const existingPixelArt = await prisma.pixelArt.findUnique({
      where: { id },
      select: {
        profileId: true,
        dailyPromptId: true,
      },
    });

    if (!existingPixelArt || existingPixelArt.profileId !== profile.id) {
      return NextResponse.json(
        { error: "Unauthorized to edit this pixel art" },
        { status: 403 }
      );
    }

    const transactionOps = [];

    // 1️⃣ Update pixel art
    transactionOps.push(
      prisma.pixelArt.update({
        where: { id },
        data: {
          title,
          data,
          gridSize: parseInt(gridSize),
          imageUrl,
          canRemix: !!canRemix,
          visibilityStatus,
          dailyPromptId,
          updatedAt: new Date(),
        },
      })
    );

    // 2️⃣ Handle DailyPrompt count changes
    const oldPromptId = existingPixelArt.dailyPromptId;
    const newPromptId = dailyPromptId ?? null;

    // Removed from a prompt
    if (oldPromptId && oldPromptId !== newPromptId) {
      transactionOps.push(
        prisma.dailyPrompt.update({
          where: { id: oldPromptId },
          data: {
            pixelArtsCount: { decrement: 1 },
          },
        })
      );
    }

    // Added to a prompt
    if (newPromptId && oldPromptId !== newPromptId) {
      transactionOps.push(
        prisma.dailyPrompt.update({
          where: { id: newPromptId },
          data: {
            pixelArtsCount: { increment: 1 },
          },
        })
      );
    }

    const [updatedPixelArt] = await prisma.$transaction(transactionOps);

    return NextResponse.json({
      success: true,
      pixelArt: updatedPixelArt,
    });
  } catch (error) {
    console.error("Error updating Pixel Art:", error);
    return NextResponse.json(
      { error: "Failed to update Pixel Art" },
      { status: 500 }
    );
  }
}
