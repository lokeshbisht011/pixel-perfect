import { getCurrentProfile } from "@/lib/getCurrentProfile";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const currentProfile = await getCurrentProfile(req);
  
    const likes = await prisma.like.findMany({
      where: {
        profile: { username: params.username },
      },
      orderBy: { createdAt: "desc" },
      take: 12,
      select: {
        pixelArt: {
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
            likes: currentProfile
              ? {
                  where: { profileId: currentProfile.id },
                  select: { id: true },
                  take: 1,
                }
              : false,
          },
        },
      },
    });
  
    return NextResponse.json(
      likes.map(l => ({
        ...l.pixelArt,
        likedByMe: currentProfile ? l.pixelArt.likes.length > 0 : false,
        likes: undefined,
      }))
    );
  }
  