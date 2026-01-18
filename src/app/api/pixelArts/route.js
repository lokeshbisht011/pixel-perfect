import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const dateStr = searchParams.get("date"); // YYYY-MM-DD (UTC)
  const limit = Math.min(parseInt(searchParams.get("limit") || "12", 10), 50);

  const session = await getServerSession(authOptions);

  let profile;

  if (session) {
    profile = await prisma.profile.findUnique({
      where: { email: session.user.email },
    });
  }

  try {
    const currentProfileId = profile?.id || null;

    const whereClause = {
      addToTodaysPixelArts: true,
      deletedAt: null,
    };

    if (dateStr) {
      const startOfDayUTC = new Date(`${dateStr}T00:00:00.000Z`);
      const endOfDayUTC = new Date(`${dateStr}T23:59:59.999Z`);

      whereClause.createdAt = {
        gte: startOfDayUTC,
        lte: endOfDayUTC,
      };
    }

    const pixelArts = await prisma.pixelArt.findMany({
      where: whereClause,

      orderBy: [
        { likesCount: "desc" },
        { commentsCount: "desc" },
        { createdAt: "desc" },
      ],

      select: {
        id: true,
        imageUrl: true,
        createdAt: true,
        likesCount: true,
        commentsCount: true,

        profile: {
          select: {
            id: true,
            username: true,
            avatarConfig: true,
          },
        },

        // ✅ existence check only (0 or 1 row)
        likes: currentProfileId
          ? {
              where: {
                profileId: currentProfileId,
              },
              select: { id: true },
              take: 1,
            }
          : false,
      },

      take: limit,
    });

    // ✅ transform response
    const result = pixelArts.map((art) => ({
      id: art.id,
      imageUrl: art.imageUrl,
      createdAt: art.createdAt,
      likesCount: art.likesCount,
      commentsCount: art.commentsCount,
      profile: art.profile,
      likedByMe: currentProfileId ? art.likes.length > 0 : false,
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching pixel arts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
