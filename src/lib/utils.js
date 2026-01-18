import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function startOfUTCDay(date) {
  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

export function getUTCDayDiff(lastDate, currentDate) {
  const lastDay = startOfUTCDay(lastDate);
  const todayDay = startOfUTCDay(currentDate);

  return Math.floor((todayDay - lastDay) / (1000 * 60 * 60 * 24));
}

export const BADGES = {
  FIRST_PIXEL_ART: {
    id: "first_pixel_art",
    name: "First Creation",
    description: "Created your first Pixel Art",
    icon: "🎨",
    requirement: 1,
    type: "pixel_art_count",
  },
  PIXEL_ART_COLLECTOR_10: {
    id: "pixel_art_collector_10",
    name: "Pixel Art Collector",
    description: "Created 10 Pixel Arts",
    icon: "🖼️",
    requirement: 10,
    type: "pixel_art_count",
  },
  PIXEL_ART_MASTER_100: {
    id: "pixel_art_master_100",
    name: "Pixel Master",
    description: "Created 100 Pixel Arts",
    icon: "🏆",
    requirement: 100,
    type: "pixel_art_count",
  },
  FIRST_COMMENT: {
    id: "first_comment",
    name: "Commentator",
    description: "Left your first comment",
    icon: "💬",
    requirement: 1,
    type: "comment_count",
  },
  FIRST_STREAK: {
    id: "first_streak",
    name: "Consistency",
    description: "Maintained a 3-day streak",
    icon: "🔥",
    requirement: 3,
    type: "streak",
  },
  STREAK_MASTER: {
    id: "streak_master",
    name: "Streak Master",
    description: "Maintained a 7-day streak",
    icon: "🔥🔥",
    requirement: 7,
    type: "streak",
  },
  LIKER_1: {
    id: "liker_1",
    name: "First Liker",
    description: "Liked your first Pixel Art",
    icon: "👍",
    requirement: 1,
    type: "pixel_arts_liked",
  },
  LIKER_10: {
    id: "liker_10",
    name: "Thumbs Up",
    description: "Liked 10 Pixel Arts",
    icon: "👍👍",
    requirement: 10,
    type: "pixel_arts_liked",
  },
  LIKER_100: {
    id: "liker_100",
    name: "Big Fan",
    description: "Liked 100 Pixel Arts",
    icon: "💖",
    requirement: 100,
    type: "pixel_arts_liked",
  },
  LIKED_1: {
    id: "liked_1",
    name: "First Like",
    description: "Got your first like",
    icon: "⭐",
    requirement: 1,
    type: "likes_received",
  },
  LIKED_10: {
    id: "liked_10",
    name: "Popular",
    description: "Received 10 likes",
    icon: "🌟",
    requirement: 10,
    type: "likes_received",
  },
  LIKED_100: {
    id: "liked_100",
    name: "Superstar",
    description: "Received 100 likes",
    icon: "✨",
    requirement: 100,
    type: "likes_received",
  },
};
