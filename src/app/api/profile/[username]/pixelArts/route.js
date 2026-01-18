import { getCurrentProfile } from "@/lib/getCurrentProfile";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const currentProfile = await getCurrentProfile(req);

  const arts = await prisma.pixelArt.findMany({
    where: {
      profile: { username: params.username },
      //deletedAt: null,//TODO Uncomment this
    },
    orderBy: { createdAt: "desc" },
    take: 12,
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
  });

  return NextResponse.json(
    arts.map(a => ({
      ...a,
      likedByMe: currentProfile ? a.likes.length > 0 : false,
      likes: undefined,
    }))
  );
}
