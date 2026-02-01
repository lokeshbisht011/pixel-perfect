import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { startOfDay, differenceInCalendarDays } from "date-fns";
import { calculateStreak } from "@/lib/streaks";

export async function GET(_, { params }) {
  try {
    const profile = await prisma.profile.findUnique({
      where: { username: params.username },
      select: {
        id: true,
        name: true,
        username: true,
        bio: true,
        avatarConfig: true,
        createdAt: true,
        pixelArtsCount: true,
        commentsCount: true,
        currentStreak: true,
        maxStreakCount: true,
        lastActivity: true,
        followers: {
          select: {
            follower: {
              select: {
                id: true,
                username: true,
                avatarConfig: true,
              },
            },
          },
        },
        following: {
          select: {
            following: {
              select: {
                id: true,
                username: true,
                avatarConfig: true,
              },
            },
          },
        },
      },
    });

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    // 1️⃣ Update streak on profile load (passive check, not active)
    const updatedStreak = calculateStreak({
      lastActivity: profile.lastActivity,
      currentStreak: profile.currentStreak,
      maxStreakCount: profile.maxStreakCount || 0,
    });

    // 2️⃣ Persist streak update only if something changed
    if (
      updatedStreak.currentStreak !== profile.currentStreak ||
      updatedStreak.maxStreakCount !== profile.maxStreakCount
    ) {
      await prisma.profile.update({
        where: { id: profile.id },
        data: {
          currentStreak: updatedStreak.currentStreak,
          maxStreakCount: updatedStreak.maxStreakCount,
        },
      });

      profile.currentStreak = updatedStreak.currentStreak;
      profile.maxStreakCount = updatedStreak.maxStreakCount;
    }

    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error("GET /api/profile/[username]/header failed:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
