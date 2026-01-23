import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BADGE_TIERS } from "@/lib/badges";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const BadgeCard = ({ badge }) => {
  const isEarned = badge.isEarned;
  const progress = badge.progress || 0;
  const tier = badge.tier || 1;

  const tierStyle = BADGE_TIERS[tier];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: isEarned
          ? "0 20px 40px rgba(0,0,0,0.25)"
          : "0 12px 28px rgba(0,0,0,0.15)",
      }}
      className={`relative p-5 rounded-3xl h-full flex flex-col items-center text-center transition-all ${
        isEarned
          ? `${tierStyle.bg}`
          : "bg-white/60 dark:bg-slate-900/60 backdrop-blur"
      }`}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: isEarned ? 6 : 0, scale: 1.05 }}
        className={`relative flex items-center justify-center w-20 h-20 mb-4 rounded-full ${
          isEarned
            ? `${tierStyle.ring} ${tierStyle.glow}`
            : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        <span
          className={`text-5xl ${
            isEarned ? tierStyle.icon : "text-gray-400 dark:text-gray-300"
          } ${isEarned && tierStyle.animate ? "animate-pulse" : ""}`}
        >
          {badge.icon}
        </span>
      </motion.div>

      {/* Name */}
      <h4
        className={`text-lg font-semibold ${
          isEarned ? tierStyle.text : "text-gray-800 dark:text-gray-200"
        }`}
      >
        {badge.name}
      </h4>

      {/* Description */}
      <p
        className={`text-xs mt-1 line-clamp-2 ${
          isEarned ? tierStyle.description : "text-gray-500 dark:text-gray-400"
        }`}
      >
        {badge.description}
      </p>

      {/* Footer */}
      {isEarned ? (
        <Badge className="mt-4 px-5 py-1.5 tracking-wide rounded-full">
          ✓ Earned
        </Badge>
      ) : (
        <div className="w-full mt-4 space-y-1">
          <div className="flex justify-between text-[11px] text-gray-500 dark:text-gray-400">
            <span>{progress}% complete</span>
            {badge.nextRequirement && badge.currentValue !== undefined && (
              <span>{badge.nextRequirement - badge.currentValue} left</span>
            )}
          </div>

          <Progress value={progress} className="h-2.5 rounded-full" />
        </div>
      )}
    </motion.div>
  );
};

export default BadgeCard;
