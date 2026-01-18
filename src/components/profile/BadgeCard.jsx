// components/user/BadgeCard.jsx

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const BadgeCard = ({ badge }) => {
  const isEarned = badge.isEarned;
  const progress = badge.progress || 0;

  return (
    <motion.div
      className={`p-5 rounded-2xl shadow-md h-full flex flex-col items-center justify-between text-center transition-transform duration-300 transform hover:scale-105 ${
        isEarned
          ? "bg-gradient-to-tr from-yellow-200 to-yellow-300 shadow-lg"
          : "bg-slate-50/70 hover:bg-slate-50/90 dark:bg-slate-800/50 dark:hover:bg-slate-800/70"
      }`}
      variants={cardVariants}
    >
      {/* Circular Icon */}
      <div
        className={`flex items-center justify-center w-20 h-20 mb-4 rounded-full transition-all duration-300 ${
          isEarned ? "bg-yellow-100 shadow-inner" : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        <span
          className={`text-5xl ${
            isEarned ? "text-yellow-600 animate-bounce" : "text-gray-400 dark:text-gray-300"
          }`}
        >
          {badge.icon}
        </span>
      </div>

      {/* Badge Name & Description */}
      <div className="flex-1">
        <h4
          className={`text-lg font-semibold ${
            isEarned ? "text-yellow-800" : "text-gray-700 dark:text-gray-200"
          }`}
        >
          {badge.name}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
          {badge.description}
        </p>
      </div>

      {/* Badge Progress or Earned */}
      {isEarned ? (
        <Badge variant="secondary" className="mt-4 px-4 py-1 tracking-wide">
          Earned!
        </Badge>
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
