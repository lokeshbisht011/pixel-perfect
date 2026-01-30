import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { profileId, badgeId } = await req.json();
  
    await prisma.notification.create({
      data: {
        profileId,
        type: "BADGE",
        entityId: badgeId,
        entityType: "BADGE",
        actorProfileIds: [],
      },
    });
  
    return NextResponse.json({ ok: true });
  }
  