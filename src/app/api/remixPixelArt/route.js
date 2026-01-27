import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";
import { VISIBILITY_STATUS } from "@/lib/utils";

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
        deletedAt: null,
      },
    });

    if (!original) {
      return NextResponse.json(
        { error: "Pixel Art not found" },
        { status: 404 }
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      const remixed = await tx.pixelArt.create({
        data: {
          title: original.title
            ? `Remix of ${original.title}`
            : "Untitled Remix",
          data: original.data,
          gridSize: original.gridSize,
          imageUrl: original.imageUrl,

          canRemix: true,
          visibilityStatus: VISIBILITY_STATUS.PUBLIC,

          originalArtId: original.id,

          profileId: profile.id,
          deletedAt: null
        },
      });

      await tx.pixelArt.update({
        where: { id: original.id },
        data: {
          remixCount: { increment: 1 },
        },
      });
    
      await tx.profile.update({
        where: { id: profile.id },
        data: {
          pixelArtsCount: { increment: 1 },
          remixesMadeCount: { increment: 1 },
        },
      });
    
      if (original.profileId !== profile.id) {
        await tx.profile.update({
          where: { id: original.profileId },
          data: {
            remixesReceivedCount: { increment: 1 },
          },
        });
      }
    
      return remixed;
    });

    return NextResponse.json({
      success: true,
      pixelArt: result,
    });
  } catch (error) {
    console.error("Error Remixing Pixel Art:", error);
    return NextResponse.json(
      { error: "Failed to Remix Pixel Art" },
      { status: 500 }
    );
  }
}
