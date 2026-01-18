import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "Not authenticated" },
      { status: 401 }
    );
  }

  const { pixelArtId } = await request.json();

  if (!pixelArtId) {
    return NextResponse.json(
      { error: "PixelArt ID is required" },
      { status: 400 }
    );
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: { email: session.user.email },
      select: { id: true },
    });

    if (!profile) {
      return NextResponse.json(
        { error: "Profile not found" },
        { status: 404 }
      );
    }

    const original = await prisma.pixelArt.findFirst({
      where: {
        id: pixelArtId,
        // deletedAt: null, // ✅ prevent copying deleted art//TODO uncomment this
      },
    });

    if (!original) {
      return NextResponse.json(
        { error: "Pixel Art not found" },
        { status: 404 }
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      const copied = await tx.pixelArt.create({
        data: {
          title: original.title
            ? `Copy of ${original.title}`
            : "Untitled Copy",
          data: original.data,
          gridSize: original.gridSize,
          imageUrl: original.imageUrl,
          editable: true,
          profileId: profile.id,
          addToTodaysPixelArts: false,
        },
      });

      await tx.profile.update({
        where: { id: profile.id },
        data: {
          pixelArtCount: { increment: 1 },
        },
      });

      return copied;
    });

    return NextResponse.json({
      success: true,
      pixelArt: result,
    });
  } catch (error) {
    console.error("Error copying pixel art:", error);
    return NextResponse.json(
      { error: "Failed to copy pixel art" },
      { status: 500 }
    );
  }
}
