import { getCurrentProfile } from "@/lib/getCurrentProfile";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  const profile = await getCurrentProfile();
  if (!profile) return NextResponse.json({ ok: false });

  await prisma.notification.updateMany({
    where: {
      profileId: profile.id,
      read: false,
    },
    data: { read: true },
  });

  return NextResponse.json({ ok: true });
}
