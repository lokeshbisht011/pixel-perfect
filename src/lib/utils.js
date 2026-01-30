import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns"

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

export function formatTimeAgo(date) {
  const diffInSeconds = (Date.now() - new Date(date).getTime()) / 1000;

  if (diffInSeconds < 60) {
    return "just now";
  }

  return formatDistanceToNow(new Date(date), { addSuffix: true });
}


export const VISIBILITY_STATUS = Object.freeze({
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
  UNLISTED: "UNLISTED",
});

export const STORAGE_KEY = "pixel-art-draft";

export function renderNotificationText(n) {
  const countText =
    n.count > 1 ? `and ${n.count - 1} others ` : "";

  switch (n.type) {
    case "LIKE":
      return `❤️ Someone ${countText}liked your pixel art`;
    case "COMMENT":
      return `💬 Someone ${countText}commented on your pixel art`;
    case "REMIX":
      return `🎮 Someone ${countText}remixed your pixel art`;
    case "FOLLOW":
      return `➕ Someone ${countText}followed you`;
    default:
      return "New notification";
  }
}

export function getNotificationLink(n) {
  if (n.entityId) return `/art/${n.entityId}`;
  return "/notifications";
}
