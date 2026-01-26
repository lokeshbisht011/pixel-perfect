"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Award, Share2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Confetti from "../ui/confetti";
import ShareModal from "../ShareModal";

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
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    rotate: [0, 10, -10, 0],
    transition: { delay: 0.2, duration: 0.6 },
  },
};

const NewBadgeModal = ({ isOpen, onClose, badge }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  if (!badge) return null;

  const shareData = {
    title: `🎨 Badge Unlocked on PixelArtDaily!`,
    text: badge?.name
      ? `I just earned the "${badge.name}" badge on PixelArtDaily! Check it out!`
      : `I just unlocked a badge on PixelArtDaily!`,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-0 max-w-sm overflow-hidden">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative p-6 text-center bg-background rounded-lg"
              >
                <Confetti active={isOpen} />

                {/* Close */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={onClose}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 mb-4"
                >
                  <span className="text-4xl">{badge.icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold">Badge Unlocked!</h3>

                {/* Badge info */}
                <div className="mt-3 rounded-lg bg-muted p-4">
                  <p className="text-base font-semibold">{badge.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {badge.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-3 justify-center">
                  <Button variant="outline" onClick={onClose}>
                    Continue
                  </Button>
                  <Button onClick={() => setIsShareModalOpen(true)}>
                    <Share2 className="mr-2 h-4 w-4" />
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
