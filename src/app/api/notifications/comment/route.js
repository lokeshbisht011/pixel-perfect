import { getCurrentProfile } from "@/lib/getCurrentProfile";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { pixelArtId, ownerProfileId } = await req.json();
    const actor = await getCurrentProfile();
  
    if (!actor || actor.id === ownerProfileId) {
      return NextResponse.json({ ok: true });
    }
  
    await prisma.notification.create({
      data: {
        profileId: ownerProfileId,
        type: "COMMENT",
        entityId: pixelArtId,
        entityType: "PIXEL_ART",
        actorProfileIds: [actor.id],
      },
    });
  
    return NextResponse.json({ ok: true });
  }
  