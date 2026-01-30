import { getCurrentProfile } from "@/lib/getCurrentProfile";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { followingProfileId } = await req.json();
    const actor = await getCurrentProfile();
  
    if (!actor || actor.id === followingProfileId) {
      return NextResponse.json({ ok: true });
    }
  
    await prisma.notification.create({
      data: {
        profileId: followingProfileId,
        type: "FOLLOW",
        entityId: actor.id,
        entityType: "PROFILE",
        actorProfileIds: [actor.id],
      },
    });
  
    return NextResponse.json({ ok: true });
  }
  