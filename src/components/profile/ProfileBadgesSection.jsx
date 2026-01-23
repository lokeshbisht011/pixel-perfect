"use client";

import { motion } from "framer-motion";
import BadgeCard from "@/components/profile/BadgeCard";
import { useBadges } from "@/hooks/useBadges";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileBadgesSection() {
  const { badges, loading } = useBadges();

  if (loading) {
    return (
      <div className="space-y-10">
        <SkeletonSection title="🏆 Earned Badges" />
        <SkeletonSection title="🚀 In Progress" />
      </div>
    );
  }

  const earned = badges.filter((b) => b.isEarned);
  const inProgress = badges.filter((b) => !b.isEarned);

  return (
    <div className="space-y-10 mt-4">
      <Section title="🏆 Earned Badges" badges={earned} empty="No badges yet" />
      <Section
        title="🚀 In Progress"
        badges={inProgress}
        empty="All badges unlocked 🎉"
      />
    </div>
  );
}

function Section({ title, badges, empty }) {
  if (!badges.length) return <p>{empty}</p>;

  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <motion.div className="grid md:grid-cols-4 gap-6">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </motion.div>
    </section>
  );
}

function SkeletonSection({ title }) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <BadgeCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

function BadgeCardSkeleton() {
  return (
    <div className="p-5 rounded-2xl h-full flex flex-col items-center justify-between bg-slate-50/70 dark:bg-slate-800/50">
      {/* Icon */}
      <Skeleton className="w-20 h-20 rounded-full mb-4" />

      {/* Name + description */}
      <div className="flex-1 w-full text-center space-y-2">
        <Skeleton className="h-5 w-32 mx-auto" />
        <Skeleton className="h-3 w-40 mx-auto" />
        <Skeleton className="h-3 w-28 mx-auto" />
      </div>

      {/* Progress / badge */}
      <div className="w-full mt-4 space-y-2">
        <div className="flex justify-between">
          <Skeleton className="h-3 w-10" />
          <Skeleton className="h-3 w-16" />
        </div>
        <Skeleton className="h-3 w-full rounded-full" />
      </div>
    </div>
  );
}
