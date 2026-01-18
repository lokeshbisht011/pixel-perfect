import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { commentId } = params;

  const profile = await prisma.profile.findUnique({
    where: { email: session.user.email },
  });

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  const comment = await prisma.comment.findUnique({
    where: { id: commentId },
    select: {
      id: true,
      profileId: true,
      pixelArtId: true,
      deletedAt: true,
    },
  });

  if (!comment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  if (comment.profileId !== profile.id) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  if (comment.deletedAt) {
    return NextResponse.json(
      { error: "Comment already deleted" },
      { status: 400 }
    );
  }

  await prisma.$transaction(async (tx) => {
    // 1️⃣ Soft delete comment
    await tx.comment.update({
      where: { id: commentId },
      data: {
        deletedAt: new Date(),
        deletedBy: "User",
      },
    });

    // 2️⃣ Decrement profile comment count (guarded)
    await tx.profile.update({
      where: { id: profile.id },
      data: {
        commentsCount: {
          decrement: 1,
        },
      },
    });

    // 3️⃣ Decrement pixel art comment count (guarded)
    await tx.pixelArt.update({
      where: { id: comment.pixelArtId },
      data: {
        commentsCount: {
          decrement: 1,
        },
      },
    });
  });

  return NextResponse.json({ success: true });
}
