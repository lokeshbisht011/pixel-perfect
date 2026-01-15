"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {

  const [prompt, setPrompt] = useState({"prompt": "Guitar"});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const today = new Date();
        const localDate = today.toISOString().split("T")[0];
        const res = await fetch(`/api/daily-prompts/today`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date: localDate }),
        });
        if (!res.ok) {
          setLoading(false);
          return;
        }
        const data = await res.json();
        setPrompt(data);
        setPrompt({"prompt": "Guitar"});
      } catch (err) {
        console.error("Error fetching prompt:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompt();
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section
      id="prompt"
      className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pixel-card mb-6 md:mb-8 relative p-4 md:p-6"
        >
          <motion.div
            className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-6 md:w-8 h-6 md:h-8 bg-pixel-neon-pink rounded-sm"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-4 md:w-6 h-4 md:h-6 bg-pixel-neon-cyan rounded-sm"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-4 md:w-6 h-4 md:h-6 bg-pixel-neon-green rounded-sm"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-6 md:w-8 h-6 md:h-8 bg-pixel-neon-yellow rounded-sm"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-4 text-muted-foreground"
          >
            <Calendar className="w-5 h-5" />
            <span className="font-mono">{today}</span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-6 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-pixel-neon-cyan">Today's</span>{" "}
            <span className="text-pixel-neon-pink">Prompt</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <motion.h2
              className="text-6xl md:text-8xl font-bold font-mono mb-4"
              // animate={{
              //   textShadow: [
              //     "0 0 20px hsl(var(--pixel-neon-cyan))",
              //     "0 0 30px hsl(var(--pixel-neon-pink))",
              //     "0 0 20px hsl(var(--pixel-neon-green))",
              //     "0 0 30px hsl(var(--pixel-neon-yellow))",
              //     "0 0 20px hsl(var(--pixel-neon-cyan))",
              //   ],
              // }}
              // transition={{ duration: 3, repeat: Infinity }}
            >
              {prompt.prompt}
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-8"
          >
            <p className="text-pixel-neon-green mb-4 font-mono text-lg font-bold">
              Time left to submit today's pixel art:
            </p>
            <CountdownTimer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Link href="/create">
              <Button
                variant="pixel"
                size="lg"
                className="text-lg md:text-xl px-6 md:px-8 py-3 md:py-4"
              >
                <Sparkles className="mr-2" />
                Start Creating
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
