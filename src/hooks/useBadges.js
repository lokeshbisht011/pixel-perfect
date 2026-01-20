"use client";

import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";

const calculateBadgeProgress = (badge, stats) => {
  if (!stats) return 0;

  const valueMap = {
    pixel_art_count: stats.pixelArtsCount,
    comment_count: stats.commentsCount,
    streak: stats.currentStreak,
    pixel_arts_liked: stats.pixelArtsLikedCount,
    likes_received: stats.likesReceivedCount,
  };

  const current = valueMap[badge.type] ?? 0;
  return Math.min(Math.floor((current / badge.requirement) * 100), 100);
};

export const useBadges = () => {
  const [badges, setBadges] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const [badgeQueue, setBadgeQueue] = useState([]);
  const [activeBadge, setActiveBadge] = useState(null);

  useEffect(() => {
    if (!activeBadge && badgeQueue.length > 0) {
      setActiveBadge(badgeQueue[0]);
    }
  }, [badgeQueue, activeBadge]);

  const processBadges = useCallback((allBadges, earnedBadges, stats) => {
    const earnedIds = new Set(earnedBadges.map((b) => b.id));

    setBadges(
      allBadges.map((badge) => ({
        ...badge,
        isEarned: earnedIds.has(badge.id),
        progress: earnedIds.has(badge.id)
          ? 100
          : calculateBadgeProgress(badge, stats),
      }))
    );
  }, []);

  const fetchBadges = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/badges");
      if (!res.ok) throw new Error();

      const data = await res.json();
      setStats(data.stats);
      processBadges(data.allBadges, data.earnedBadges, data.stats);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load badges");
    } finally {
      setLoading(false);
    }
  }, [processBadges]);

  const syncBadges = useCallback(async () => {
    try {
      const res = await fetch("/api/badges/sync", { method: "POST" });
      if (!res.ok) return;

      const { newBadges } = await res.json();
      if (!newBadges || newBadges.length === 0) return;

      setBadgeQueue((prev) => [...prev, ...newBadges]);
      fetchBadges();
    } catch (err) {
      console.error("Badge sync failed", err);
    }
  }, [fetchBadges]);

  useEffect(() => {
    fetchBadges();
  }, [fetchBadges]);

  const closeBadgeModal = () => {
    setBadgeQueue(q => q.slice(1));
    setActiveBadge(null);
  };

  return {
    badges,
    stats,
    loading,
    fetchBadges,
    syncBadges,
    activeBadge,
    showNewBadgeModal: badgeQueue.length > 0,
    closeBadgeModal,
  };
};
