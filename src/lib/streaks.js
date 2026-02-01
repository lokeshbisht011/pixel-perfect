import { startOfDay, differenceInCalendarDays } from "date-fns";

export function calculateStreak({
  lastActivity,
  currentStreak,
  maxStreakCount,
  now = new Date(),
  isActive = false,
}) {
  const today = startOfDay(now);

  let newCurrentStreak = currentStreak;

  if (lastActivity) {
    const lastDay = startOfDay(lastActivity);
    const diffDays = differenceInCalendarDays(today, lastDay);

    if (diffDays === 0) {
      // Already active today
      newCurrentStreak = currentStreak;
    } else if (diffDays === 1 && isActive) {
      // Continue streak only if user was active today
      newCurrentStreak = currentStreak + 1;
    } else if (diffDays > 1) {
      // Streak broken
      newCurrentStreak = 0;
    }
    // else diffDays < 0 → future date, ignore
  } else if (isActive) {
    // first ever activity
    newCurrentStreak = 1;
  }

  const newMaxStreakCount = Math.max(maxStreakCount, newCurrentStreak);

  return {
    currentStreak: newCurrentStreak,
    maxStreakCount: newMaxStreakCount,
    lastActivity: isActive ? now : lastActivity, // only update if active
  };
}
