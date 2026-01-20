import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const dayParam = searchParams.get("day"); // "today" or "yesterday"
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
    // ✅ Determine UTC date based on `day` param
    // Determine the target date string in UTC
    const now = new Date();
    let targetDateStr = now.toISOString().slice(0, 10); // YYYY-MM-DD

    if (dayParam === "yesterday") {
      const yesterday = new Date(now);
      yesterday.setUTCDate(yesterday.getUTCDate() - 1);
      targetDateStr = yesterday.toISOString().slice(0, 10);
    }

    // Fetch daily prompt for that date
    const dailyPrompt = await prisma.dailyPrompt.findUnique({
      where: {
        promptDate: targetDateStr, // string match
      },
      select: {
        id: true,
      },
    });

    if (!dailyPrompt) {
      return NextResponse.json([], { status: 200 }); // no prompt, return empty array
    }

    // Fetch pixel arts for this daily prompt
    const pixelArts = await prisma.pixelArt.findMany({
      where: {
        dailyPromptId: dailyPrompt.id,
        deletedAt: null,
      },
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
        dailyPromptId:true,
        deletedAt:true,

        profile: {
          select: {
            id: true,
            username: true,
            avatarConfig: true,
          },
        },
        // Check if current user liked it
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
    console.error("Error fetching daily pixel arts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
