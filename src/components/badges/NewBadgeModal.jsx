"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Share2, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Confetti from "../ui/confetti";
import ShareModal from "../ShareModal";
import clsx from "clsx";
import { BADGE_TIERS } from "@/lib/badges";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.9 },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -20 },
  visible: {
    scale: 1,
    rotate: [0, 8, -8, 0],
    transition: { delay: 0.15, duration: 0.6 },
  },
};

const NewBadgeModal = ({ isOpen, onClose, badge }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  if (!badge) return null;

  const tier = BADGE_TIERS[badge.tier] ?? BADGE_TIERS[1];

  const shareData = {
    title: "🎨 Badge Unlocked on PixelArt Daily!",
    text: `I just earned the "${badge.name}" badge on PixelArt Daily!`,
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-0 max-w-sm overflow-hidden border-none">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={clsx(
                  "relative p-6 text-center rounded-xl",
                  tier.bg
                )}
              >
                <Confetti active={isOpen} />

                {/* Tier label */}
                {/* <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold">
                  <Sparkles className="h-3 w-3" />
                  {tier.label} Badge
                </div> */}

                {/* Badge Icon */}
                <motion.div
                  variants={iconVariants}
                  className={clsx(
                    "mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-background ring-4",
                    tier.ring,
                    tier.glow,
                    "shadow-xl"
                  )}
                >
                  <span className="text-5xl">{badge.icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold tracking-tight">
                  Badge Unlocked!
                </h3>

                {/* Badge info */}
                <div className="mt-4 rounded-xl bg-background/50 p-4">
                  <p className="text-lg font-semibold">{badge.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-3 justify-center">
                  <Button variant="neon" onClick={onClose}>
                    Continue
                  </Button>
                  <Button
                    className="gap-2"
                    onClick={() => setIsShareModalOpen(true)}
                    variant={"pixel"}
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        shareData={shareData}
      />
    </>
  );
};

export default NewBadgeModal;
