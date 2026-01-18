import { NextResponse } from "next/server";

export async function GET(_, { params }) {
    const profile = await prisma.profile.findUnique({
      where: { username: params.username },
      select: {
        id: true,
        username: true,
        bio: true,
        avatarConfig: true,
        createdAt: true,
        _count: {
          select: {
            followers: true,
            following: true,
            pixelArts: true,
          },
        },
      },
    });
  
    if (!profile)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
  
    return NextResponse.json(profile);
  }
  