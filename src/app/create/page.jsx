"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { useBadges } from "@/hooks/useBadges";
import LoginModal from "@/components/LoginModal";
import NewBadgeModal from "@/components/badges/NewBadgeModal";
import PixelArtCanvas from "@/components/pixelArt/PixelArtCanvas";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const CreateDoodle = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const [prompt, setPrompt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const {
    handleUserAction,
    showNewBadgeModal,
    setShowNewBadgeModal,
    earnedBadges,
  } = useBadges();

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
      } catch (err) {
        console.error("Error fetching prompt:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompt();
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);

      const diff = midnight.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSavePixelArt = async ({
    title,
    data, // Matches the 'data' field in schema (the JSON string)
    gridSize,      // New field from schema
    imageUrl,
    addToTodaysPixelArts, // This maps to 'isPublic' in the schema
    editable,
    dailyPromptId, // Pass this if you're editing the daily challenge
  }) => {
    if (!title) {
      toast({ 
        title: "Missing title", 
        description: "Please name your masterpiece before saving!",
        variant: "destructive" 
      });
      return;
    }

    if (!session) {
      toast({
        title: "Sign in required",
        description: "You must be signed in to save your pixel art.",
        variant: "destructive",
      });
      setIsLoginModalOpen(true);
      return;
    }

    try {
      const response = await fetch('/api/savePixelArt', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          data,           // The JSON.stringify(fullGrid)
          gridSize,               // e.g., 32, 64, or 128
          imageUrl,               // The PNG base64 or storage URL
          addToTodaysPixelArts, 
          editable,
          dailyPromptId,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Trigger gamification logic (Streaks, XP, etc.)
        await handleUserAction("doodle_created");
        
        toast({
          title: "Art Saved! 🎨",
          description: addToTodaysDoodles 
            ? "Your art is now live in today's gallery." 
            : "Your art has been saved to your profile.",
        });
        
        // Optional: Redirect to the newly created art page
        // router.push(`/pixel/${result.doodle.id}`);
      } else {
        throw new Error(result.error || "Failed to save");
      }
    } catch (error) {
      console.error("Error saving pixel art:", error);
      toast({
        title: "Save Failed",
        description: error.message || "Something went wrong while saving.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const isLastHour = timeLeft.hours === 0;
  const countdownColor = isLastHour ? "text-red-600" : "text-green-600";

  return (
    <Layout>
      <motion.div
        className="container py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Doodle Canvas Section */}
        <motion.div variants={itemVariants} className="flex-grow">
          <PixelArtCanvas
            onSave={handleSavePixelArt}
            userId={session?.user?.id ?? ""}
            prompt={prompt}
          />
        </motion.div>

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          reason="save-doodle"
        />

        <NewBadgeModal
          isOpen={showNewBadgeModal}
          onClose={() => setShowNewBadgeModal(false)}
          badges={earnedBadges}
        />
      </motion.div>
    </Layout>
  );
};

export default CreateDoodle;
