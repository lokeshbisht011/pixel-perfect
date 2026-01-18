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

  try {
    const profile = await prisma.profile.findUnique({
      where: { email: session.user.email },
    });

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const pixelArt = await prisma.pixelArt.findUnique({
      where: { id: pixelArtId },
      select: {
        id: true,
        profileId: true,
        likesCount: true,
        deletedAt: true,
      },
    });

    if (!pixelArt || pixelArt.deletedAt) {
      return NextResponse.json(
        { error: "Pixel Art not found" },
        { status: 404 }
      );
    }

    // Use composite unique constraint
    const existingLike = await prisma.like.findUnique({
      where: {
        profileId_pixelArtId: {
          profileId: profile.id,
          pixelArtId,
        },
      },
    });

    let liked = false;
    let likesCount = pixelArt.likesCount;

    await prisma.$transaction(async (tx) => {
      if (existingLike) {
        // UNLIKE
        await tx.like.delete({
          where: {
            profileId_pixelArtId: {
              profileId: profile.id,
              pixelArtId,
            },
          },
        });

        if (likesCount > 0) {
          await tx.pixelArt.update({
            where: { id: pixelArtId },
            data: {
              likesCount: { decrement: 1 },
            },
          });

          await tx.profile.update({
            where: { id: pixelArt.profileId },
            data: {
              likesReceivedCount: { decrement: 1 },
            },
          });

          likesCount -= 1;
        }

        liked = false;
      } else {
        // LIKE
        await tx.like.create({
          data: {
            profileId: profile.id,
            pixelArtId,
          },
        });

        await tx.pixelArt.update({
          where: { id: pixelArtId },
          data: {
            likesCount: { increment: 1 },
          },
        });

        await tx.profile.update({
          where: { id: pixelArt.profileId },
          data: {
            likesReceivedCount: { increment: 1 },
          },
        });

        likesCount += 1;
        liked = true;
      }
    });

    return NextResponse.json({
      liked,
      likesCount,
    });
  } catch (error) {
    console.error("Error updating like status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
