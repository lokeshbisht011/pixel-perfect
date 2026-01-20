import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BADGE_TIERS } from "@/lib/badges";

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const BadgeCard = ({ badge }) => {
  const isEarned = badge.isEarned;
  const progress = badge.progress || 0;
  const tier = badge.tier || 1;

  const tierStyle = BADGE_TIERS[tier];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      className={`p-5 rounded-2xl h-full flex flex-col items-center justify-between text-center transition-all ${
        isEarned
          ? `bg-gradient-to-tr ${tierStyle.bg} shadow-lg`
          : "bg-slate-50/70 dark:bg-slate-800/50"
      }`}
    >
      {/* Icon Container */}
      <div
        className={`relative flex items-center justify-center w-20 h-20 mb-4 rounded-full transition-all ${
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

        {/* Tier Indicator */}
        <span className="absolute -bottom-1 right-0 text-xs font-bold bg-black/70 text-white px-2 py-0.5 rounded-full">
          T{tier}
        </span>
      </div>

      {/* Name + Description */}
      <div className="flex-1">
        <h4
          className={`text-lg font-semibold ${
            isEarned ? tierStyle.text : "text-gray-700 dark:text-gray-200"
          }`}
        >
          {badge.name}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
          {badge.description}
        </p>
      </div>

      {/* Earned / Progress */}
      {isEarned ? (
        <Badge className="mt-4 px-4 py-1 tracking-wide">Earned</Badge>
      ) : (
        <div className="w-full mt-4">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>{progress}%</span>
            {badge.nextRequirement && badge.currentValue !== undefined && (
              <span>{badge.nextRequirement - badge.currentValue} to go</span>
            )}
          </div>
          <Progress value={progress} className="h-3 rounded-full" />
        </div>
      )}
    </motion.div>
  );
};

export default BadgeCard;
