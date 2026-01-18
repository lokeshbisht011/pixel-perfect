import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";

export async function POST(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const pixelArtId = params.id;
  const { content } = await req.json();

  if (!content || !content.trim()) {
    return NextResponse.json(
      { error: "Comment content is required" },
      { status: 400 }
    );
  }

  const profile = await prisma.profile.findUnique({
    where: { email: session.user.email },
  });

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  let comment;

  await prisma.$transaction(async (tx) => {
    comment = await tx.comment.create({
      data: {
        content: content.trim(),
        pixelArtId,
        profileId: profile.id,
      },
      include: {
        profile: {
          select: {
            username: true,
            avatarConfig: true,
          },
        },
      },
    });

    await tx.pixelArt.update({
      where: { id: pixelArtId },
      data: {
        commentsCount: { increment: 1 },
      },
    });

    await tx.profile.update({
      where: { id: profile.id },
      data: {
        commentsCount: { increment: 1 },
      },
    });
  });

  return NextResponse.json(comment);
}
