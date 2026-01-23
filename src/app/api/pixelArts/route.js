import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get("date"); // YYYY-MM-DD
  const query = searchParams.get("query")?.trim() || "";
  const limit = Math.min(parseInt(searchParams.get("limit") || "12", 10), 50);

  const session = await getServerSession(authOptions);
  let profile;
  if (session) {
    profile = await prisma.profile.findUnique({
      where: { email: session.user.email },
    });
  }
  const currentProfileId = profile?.id || null;

  try {
    // Build where condition for pixel arts
    const whereCondition = {
      deletedAt: null,
      visibilityStatus: "PUBLIC",
      contentRating: "NOT_RATED",
    };

    if (dateParam) {
      // Fetch daily prompt for that date
      const dailyPrompt = await prisma.dailyPrompt.findUnique({
        where: { promptDate: dateParam },
        select: { id: true },
      });

      whereCondition.AND = {
        dailyPromptId: dailyPrompt.id
      }
    }

    // Apply search query if provided
    if (query) {
      whereCondition.OR = [
        { profile: { username: { contains: query, mode: "insensitive" } } },
        { title: { contains: query, mode: "insensitive" } },
      ];
    }

    // Fetch pixel arts
    const pixelArts = await prisma.pixelArt.findMany({
      where: whereCondition,
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
        title: true,
        canCopy: true,
        profile: {
          select: {
            id: true,
            username: true,
            avatarConfig: true,
          },
        },
        likes: currentProfileId
          ? {
              where: { profileId: currentProfileId },
              select: { id: true },
              take: 1,
            }
          : false,
      },
      take: limit,
    });

    console.log(pixelArts);

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
