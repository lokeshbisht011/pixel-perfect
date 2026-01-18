"use client";

import { motion } from "framer-motion";
import BadgeCard from "@/components/profile/BadgeCard";
import { useBadges } from "@/hooks/useBadges";

export default function ProfileBadgesSection() {
  const { badges, loading } = useBadges();

  if (loading)
    return <p className="text-muted-foreground">Loading badges...</p>;

  const earned = badges.filter((b) => b.isEarned);
  const inProgress = badges.filter((b) => !b.isEarned);

  return (
    <div className="space-y-10">
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
