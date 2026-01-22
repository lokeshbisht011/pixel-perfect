'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const getTimeLeftToNextUTC = () => {
  const now = new Date();

  // Current UTC time
  const nowUTC = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );

  // Next UTC midnight
  const nextUTC = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + 1,
    0,
    0,
    0
  );

  const diff = Math.max(nextUTC - nowUTC, 0);
  const totalSeconds = Math.floor(diff / 1000);

  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeftToNextUTC());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeftToNextUTC());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /** YOUR COLOR LOGIC */
  const isLastHour = timeLeft.hours === 0;
  const countdownColor = !isLastHour
    ? "text-red-500"
    : "text-pixel-neon-green";

  const digitVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.1, 1] },
  };

  return (
    <div
      className={`flex items-center justify-center gap-2 md:gap-4 font-mono ${countdownColor}`}
    >
      {/* HOURS */}
      <div className="text-center">
        <motion.div
          className="text-2xl md:text-4xl lg:text-6xl font-bold"
          variants={digitVariants}
          animate="animate"
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        >
          {timeLeft.hours.toString().padStart(2, "0")}
        </motion.div>
        <div className="text-xs md:text-sm text-muted-foreground">
          Hours
        </div>
      </div>

      <BlinkingColon />

      {/* MINUTES */}
      <div className="text-center">
        <motion.div
          className="text-2xl md:text-4xl lg:text-6xl font-bold"
          variants={digitVariants}
          animate="animate"
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.2 }}
        >
          {timeLeft.minutes.toString().padStart(2, "0")}
        </motion.div>
        <div className="text-xs md:text-sm text-muted-foreground">
          Minutes
        </div>
      </div>

      <BlinkingColon delay={0.4} />

      {/* SECONDS */}
      <div className="text-center">
        <motion.div
          className="text-2xl md:text-4xl lg:text-6xl font-bold"
          variants={digitVariants}
          animate="animate"
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.4 }}
        >
          {timeLeft.seconds.toString().padStart(2, "0")}
        </motion.div>
        <div className="text-xs md:text-sm text-muted-foreground">
          Seconds
        </div>
      </div>
    </div>
  );
};

const BlinkingColon = ({ delay = 0 }) => (
  <motion.div
    className="text-2xl md:text-4xl lg:text-6xl font-bold"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1, repeat: Infinity, delay }}
  >
    :
  </motion.div>
);

export default CountdownTimer;
