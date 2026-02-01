import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { calculateStreak } from "@/lib/streaks";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

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

    const streakUpdate = calculateStreak({
      lastActivity: profile.lastActivity,
      currentStreak: profile.currentStreak,
      maxStreakCount: profile.maxStreakCount,
      isActive: true
    });

    const transactionOps = [
      prisma.pixelArt.create({
        data: {
          title,
          data,
          gridSize: parseInt(gridSize),
          imageUrl,
          canRemix: !!canRemix,
          visibilityStatus,
          profileId: profile.id,
          dailyPromptId,
          deletedAt: null,
        },
      }),

      prisma.profile.update({
        where: { id: profile.id },
        data: {
          pixelArtsCount: { increment: 1 },
          ...streakUpdate,
          ...(dailyPromptId
            ? { dailypromptParticipation: { increment: 1 } }
            : {}),
        },
      }),
    ];

    if (dailyPromptId) {
      transactionOps.push(
        prisma.dailyPrompt.update({
          where: { id: dailyPromptId },
          data: {
            pixelArtsCount: { increment: 1 },
          },
        })
      );
    }

    const [pixelArt] = await prisma.$transaction(transactionOps);

    return NextResponse.json({ success: true, pixelArt });
  } catch (error) {
    console.error("Error saving Pixel Art:", error);
    return NextResponse.json(
      { error: "Failed to save Pixel Art" },
      { status: 500 }
    );
  }
}
