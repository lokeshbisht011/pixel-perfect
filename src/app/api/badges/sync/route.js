import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";
import { BADGES } from "@/lib/badges";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const profile = await prisma.profile.findUnique({
    where: { email: session.user.email },
    include: {
      badges: true,
    },
  });

  if (!profile)
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });

  const existingBadgeIds = new Set(profile.badges.map(b => b.badgeId));
  const newlyEarned = [];

  const statMap = {
    pixel_art_count: profile.pixelArtsCount,
    comment_count: profile.commentsCount,
    streak: profile.currentStreak,
    pixel_arts_liked: profile.pixelArtsLikedCount,
    likes_received: profile.likesReceivedCount,
  };

  for (const badge of Object.values(BADGES)) {
    // if (existingBadgeIds.has(badge.id)) continue;

    const currentValue = statMap[badge.type] ?? 0;
    if (currentValue >= badge.requirement) {
      newlyEarned.push(badge);
    }
  }

  if (newlyEarned.length === 0) {
    return NextResponse.json({ newBadges: [] });
  }

  // 🔒 Atomic write
  await prisma.$transaction(
    newlyEarned.map(badge =>
      prisma.badgeOnProfile.create({
        data: {
          profileId: profile.id,
          badgeId: badge.id,
        },
      })
    )
  );

  return NextResponse.json({
    newBadges: newlyEarned,
  });
}
