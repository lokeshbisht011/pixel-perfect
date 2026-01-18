import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";
import { BADGES } from "@/lib/utils";

export async function GET() {
  try {
    // 1️⃣ Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // 2️⃣ Fetch profile with relevant stats and badges
    const profile = await prisma.profile.findUnique({
      where: { email: session.user.email },
      select: {
        pixelArtCount: true,
        commentsCount: true,
        currentStreak: true,
        pixelArtsLikedCount: true,
        likesReceivedCount: true,
        badges: {
          include: { badge: true },
        },
      },
    });

    if (!profile) {
      return NextResponse.json(
        { error: "Profile not found for the current user" },
        { status: 404 }
      );
    }

    // 3️⃣ Prepare stats object
    const stats = {
      pixelArtCount: profile.pixelArtCount,
      commentsCount: profile.commentsCount,
      currentStreak: profile.currentStreak,
      pixelArtsLikedCount: profile.pixelArtsLikedCount,
      likesReceivedCount: profile.likesReceivedCount,
    };

    // 4️⃣ Prepare earned badges
    const earnedBadges = profile.badges.map((b) => ({
      ...b.badge,
      earnedAt: b.awardedAt,
    }));

    // 5️⃣ Return response
    return NextResponse.json({
      stats,
      earnedBadges,
      allBadges: Object.values(BADGES),
    });
  } catch (error) {
    console.error("[BADGES.GET] Error fetching user badges:", error);

    // 6️⃣ Generic error response
    return NextResponse.json(
      { error: "Failed to fetch badges. Please try again later." },
      { status: 500 }
    );
  }
}
