import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentProfile } from "@/lib/getCurrentProfile";

export async function GET() {
  const profile = await getCurrentProfile();
  if (!profile) return NextResponse.json([], { status: 401 });

  const notifications = await prisma.notification.findMany({
    where: { profileId: profile.id },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return NextResponse.json(notifications);
}
