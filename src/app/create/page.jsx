"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { useBadges } from "@/hooks/useBadges";
import LoginModal from "@/components/LoginModal";
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
  const [pixelArtId, setPixelArtId] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { syncBadges } = useBadges();

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const today = new Date();
        const localDate = today.toISOString().split("T")[0];
        const res = await fetch(`/api/dailyPrompts/today`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
    gridSize, // New field from schema
    imageUrl,
    canCopy,
    visibilityStatus,
    dailyPromptId, // Pass this if you're editing the daily challenge
  }) => {
    if (!title) {
      toast({
        title: "Missing title",
        description: "Please name your masterpiece before saving!",
        variant: "destructive",
      });
      return;
    }

    if (!session) {
      setIsLoginModalOpen(true);
      return;
    }

    try {
      const payload = {
        title,
        data,
        gridSize,
        imageUrl,
        canCopy,
        visibilityStatus,
        dailyPromptId,
      };

      const response = await fetch(
        pixelArtId ? `/api/updatePixelArt/${pixelArtId}` : "/api/savePixelArt",
        {
          method: pixelArtId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok) {

        if (!pixelArtId) {
          setPixelArtId(result.pixelArt.id);
        } 
        
        toast({
          title: pixelArtId ? "Pixel Art Updated" : "Pixel Art Saved 🎨",
          description: dailyPromptId
            ? "Your art is live in today's gallery."
            : "Saved to your profile.",
        });        

        if (!pixelArtId || visibilityStatus === "PUBLIC") {
          await syncBadges();
        }

      } else {
        throw new Error(result.error || "Failed to save");
      }
    } catch (error) {
      console.error("Error saving pixel art:", error);
      toast({
        title: "Error saving Pixel Art",
        description: "Something went wrong while saving.",
        variant: "destructive",
      });
    } finally {
    }
  };

  const isLastHour = timeLeft.hours === 0;
  const countdownColor = isLastHour ? "text-red-600" : "text-green-600";

  return (
    <Layout>
      <motion.div
        className="px-2 md:container py-2 md:py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pixel Art Canvas Section */}
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
          callbackUrl="/create"
        />
      </motion.div>
    </Layout>
  );
};

export default CreateDoodle;
