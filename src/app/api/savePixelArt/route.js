import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";
import { startOfDay, differenceInCalendarDays } from "date-fns";
import { calculateStreak } from "@/lib/streaks";

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
    });

    const [pixelArt] = await prisma.$transaction([
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
        },
      }),
    ]);

    return NextResponse.json({ success: true, pixelArt });
  } catch (error) {
    console.error("Error saving Pixel Art:", error);
    return NextResponse.json(
      { error: "Failed to save Pixel Art" },
      { status: 500 }
    );
  }
}
