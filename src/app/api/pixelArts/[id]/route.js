import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(request, { params }) {
  const pixelArtId = params.id;

  try {
    const pixelArt = await prisma.pixelArt.findUnique({
      where: { id: pixelArtId,
        deletedAt: null
       },
      include: {
        profile: {
          select: {
            id: true,
            username: true,
            avatarConfig: true,
          },
        },
        likes: {
          select: {
            profileId: true,
          },
        },
        comments: {
          orderBy: { createdAt: "desc" },
          include: {
            profile: {
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

    if (!pixelArt) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...pixelArt,
      likesCount: pixelArt.likes.length,
      commentsCount: pixelArt.comments.length,
    });
  } catch (error) {
    console.error("Fetch pixel art error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const pixelArtId = params.id;

  try {
    const profile = await prisma.profile.findUnique({
      where: { email: session.user.email },
      select: { id: true, pixelArtsCount: true },
    });

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const pixelArt = await prisma.pixelArt.findUnique({
      where: { id: pixelArtId },
      select: {
        id: true,
        profileId: true,
        deletedAt: true,
      },
    });

    if (!pixelArt) {
      return NextResponse.json(
        { error: "Pixel Art not found" },
        { status: 404 }
      );
    }

    if (pixelArt.profileId !== profile.id) {
      return NextResponse.json(
        { error: "Unauthorized to delete this Pixel Art" },
        { status: 403 }
      );
    }

    if (pixelArt.deletedAt) {
      return NextResponse.json(
        { error: "Pixel Art already deleted" },
        { status: 400 }
      );
    }

    // 🔒 TRANSACTION: soft delete + decrement count
    await prisma.$transaction([
      prisma.pixelArt.update({
        where: { id: pixelArtId },
        data: {
          deletedAt: new Date(),
          deletedBy: "User",
        },
      }),

      prisma.profile.update({
        where: { id: profile.id },
        data: {
          pixelArtsCount: {
            decrement: 1,
          },
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Pixel Art deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting Pixel Art:", error);
    return NextResponse.json(
      { error: "Failed to delete Pixel Art" },
      { status: 500 }
    );
  }
}