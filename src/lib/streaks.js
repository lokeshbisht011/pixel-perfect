import { startOfDay, differenceInCalendarDays } from "date-fns";

export function calculateStreak({
  lastActivity,
  currentStreak,
  maxStreakCount,
  now = new Date(),
}) {
  const today = startOfDay(now);

  let newCurrentStreak = 1;

  if (lastActivity) {
    const lastDay = startOfDay(lastActivity);
    const diffDays = differenceInCalendarDays(today, lastDay);

    if (diffDays === 0) {
      // Already active today
      newCurrentStreak = currentStreak;
    } else if (diffDays === 1) {
      // Continue streak
      newCurrentStreak = currentStreak + 1;
    }
    // else → reset to 1
  }

  const newMaxStreakCount = Math.max(maxStreakCount, newCurrentStreak);

  return {
    currentStreak: newCurrentStreak,
    maxStreakCount: newMaxStreakCount,
    lastActivity: now,
  };
}
