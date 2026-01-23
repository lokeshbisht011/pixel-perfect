import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  try {
    const profile = await prisma.profile.findUnique({
      where: { username: params.username },
      select: {
        id: true,
        username: true,
        bio: true,
        avatarConfig: true,
        createdAt: true,
        pixelArtsCount: true,
        commentsCount: true,
        currentStreak: true,
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

    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error("GET /api/profile/[username]/header failed:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
