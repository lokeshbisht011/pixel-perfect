'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 3,
    seconds: 51
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const digitVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.1, 1] },
  };

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 text-pixel-neon-green font-mono">
      <div className="text-center">
        <motion.div 
          className="text-2xl md:text-4xl lg:text-6xl font-bold"
          variants={digitVariants}
          animate="animate"
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        >
          {timeLeft.hours.toString().padStart(2, '0')}
        </motion.div>
        <div className="text-xs md:text-sm text-muted-foreground">Hours</div>
      </div>
      
      <motion.div 
        className="text-2xl md:text-4xl lg:text-6xl font-bold text-pixel-neon-cyan"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        :
      </motion.div>
      
      <div className="text-center">
        <motion.div 
          className="text-2xl md:text-4xl lg:text-6xl font-bold"
          variants={digitVariants}
          animate="animate"
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.2 }}
        >
          {timeLeft.minutes.toString().padStart(2, '0')}
        </motion.div>
        <div className="text-xs md:text-sm text-muted-foreground">Minutes</div>
      </div>
      
      <motion.div 
        className="text-2xl md:text-4xl lg:text-6xl font-bold text-pixel-neon-pink"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        :
      </motion.div>
      
      <div className="text-center">
        <motion.div 
          className="text-2xl md:text-4xl lg:text-6xl font-bold"
          variants={digitVariants}
          animate="animate"
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.4 }}
        >
          {timeLeft.seconds.toString().padStart(2, '0')}
        </motion.div>
        <div className="text-xs md:text-sm text-muted-foreground">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;