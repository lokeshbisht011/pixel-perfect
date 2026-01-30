import { getCurrentProfile } from "@/lib/getCurrentProfile";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { pixelArtId, ownerProfileId } = await req.json();
  const actor = await getCurrentProfile();

  if (!actor || actor.id === ownerProfileId) {
    return NextResponse.json({ ok: true });
  }

  const existing = await prisma.notification.findFirst({
    where: {
      profileId: ownerProfileId,
      type: "LIKE",
      entityId: pixelArtId,
      read: false,
    },
  });

  if (existing) {
    // Avoid duplicate liker
    if (!existing.actorProfileIds.includes(actor.id)) {
      await prisma.notification.update({
        where: { id: existing.id },
        data: {
          actorProfileIds: { push: actor.id },
          count: { increment: 1 },
        },
      });
    }
  } else {
    await prisma.notification.create({
      data: {
        profileId: ownerProfileId,
        type: "LIKE",
        entityId: pixelArtId,
        entityType: "PIXEL_ART",
        actorProfileIds: [actor.id],
        count: 1,
      },
    });
  }

  return NextResponse.json({ ok: true });
}
