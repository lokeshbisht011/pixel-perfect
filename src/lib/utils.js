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

export const VISIBILITY_STATUS = Object.freeze({
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
  UNLISTED: "UNLISTED",
});

export const STORAGE_KEY = "pixel-art-draft";