import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json();
  const {
    title,
    data, // The JSON stringified grid array
    gridSize, // The integer size (e.g., 32)
    imageUrl, // The PNG preview
    addToTodaysPixelArts, // Maps to 'Add to Today's Pixel Arts'
    editable, // Maps to 'Allow others to edit'
    dailyPromptId,
  } = body;

  try {
    const profile = await prisma.profile.findUnique({
      where: { email: session.user.email },
    });

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const pixelArt = await prisma.pixelArt.create({
      data: {
        title,
        data, // Stores the grid array
        gridSize: parseInt(gridSize),
        imageUrl,
        addToTodaysPixelArts: !!addToTodaysPixelArts,
        editable: !!editable,
        profileId: profile.id,
        dailyPromptId,
      },
    });

    return NextResponse.json({ success: true, pixelArt });
  } catch (error) {
    console.error("Error saving pixel art:", error);
    return NextResponse.json(
      { error: "Failed to save doodle" },
      { status: 500 }
    );
  }
}
