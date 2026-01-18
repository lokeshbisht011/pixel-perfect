import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";

export async function getCurrentProfile() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) return null;

  return prisma.profile.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      email: true,
      username: true,
      avatarConfig: true,
      pixelArtCount: true,
      commentsCount: true,
      currentStreak: true,
      pixelArtsLikedCount: true,
      likesReceivedCount: true,
    },
  });
}
