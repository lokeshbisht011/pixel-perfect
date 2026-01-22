"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState({ prompt: "Guitar" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        const res = await fetch(`/api/dailyPrompts/today`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: today }),
        });
        if (!res.ok) return;
        const data = await res.json();
        console.log(data);
        setPrompt(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrompt();
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="relative py-14 md:py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Pixel Grid Background */}
        <motion.div
          className="absolute inset-0 bg-pixel-grid opacity-[0.5]"
          style={{
            backgroundSize: "24px 24px",
          }}
          animate={{
            backgroundPositionX: ["0px", "24px"],
            backgroundPositionY: ["0px", "24px"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* <div className="absolute inset-0 bg-gradient-radial-soft" /> */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-4 border-border p-6 shadow-lg relative p-5 md:p-8"
        >
          {/* Floating pixels (kept, slowed slightly) */}
          <motion.div
            className="absolute -top-3 -left-3 w-6 h-6 bg-pixel-neon-pink"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -top-3 -right-3 w-5 h-5 bg-pixel-neon-cyan"
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-3 -left-3 w-5 h-5 bg-pixel-neon-green"
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-3 -right-3 w-6 h-6 bg-pixel-neon-yellow"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Date */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
            <Calendar className="w-4 h-4" />
            <span className="font-mono text-sm">{today}</span>
          </div>

          {/* Heading */}
          <h1 className="font-mono font-bold text-2xl md:text-3xl mb-6">
            <span className="text-pixel-neon-cyan">Today’s</span>{" "}
            <span className="text-pixel-neon-pink">Pixel Art Prompt</span>
          </h1>

          {/* Prompt */}
          <div className="inline-block px-6 py-4 mb-8 border-4 border-border bg-background shadow-[4px_4px_0px_rgba(0,0,0,0.4)]">
            <motion.h2
              className="font-mono font-bold text-4xl leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {loading ? "…" : prompt.prompt}
            </motion.h2>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-pixel-neon-green font-mono font-bold mb-2 text-sm uppercase tracking-wider">
              Submission closes in
            </p>
            <CountdownTimer />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center"
          >
            <Link href="/create" className="inline-block">
              <Button
                variant="pixel"
                size="lg"
                className="text-lg md:text-xl px-6 md:px-8 py-3 md:py-4"
              >
                <Sparkles className="mr-2" />
                Create Today’s Pixel Art
              </Button>
            </Link>

            {/* Streak / community reinforcement */}
            {/* <p className="mt-4 text-sm md:text-base text-pixel-neon-green font-mono font-bold">
              Join 132 people today
            </p> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
