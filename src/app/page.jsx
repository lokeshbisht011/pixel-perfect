"use client";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import PixelArtGallery from "@/components/PixelArtGallery";
import NewBadgeModal from "@/components/badges/NewBadgeModal";
import { useBadges } from "@/hooks/useBadges";

const Index = () => {
  const { data: session } = useSession();
  const [profile, setProfile] = useState(null);

  const { activeBadge, showNewBadgeModal, closeBadgeModal, syncBadges } =
    useBadges();
  const { status } = useSession();
  const hasSyncedRef = useRef(false);

  useEffect(() => {
    if (status === "authenticated" && !hasSyncedRef.current) {
      hasSyncedRef.current = true;
      syncBadges();
    }
  }, [status]);

  useEffect(() => {
    async function fetchProfile() {
      if (session?.user) {
        try {
          const response = await fetch("/api/profile/user");
          if (response.ok) {
            const data = await response.json();
            setProfile(data);
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    }
    fetchProfile();
  }, [session]);

  return (
    <>
      <NewBadgeModal
        isOpen={showNewBadgeModal}
        badge={activeBadge}
        onClose={closeBadgeModal}
      />
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* <FloatingPixelIcons /> */}

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
          <PixelArtGallery profile={profile} />
          <HowItWorks />
        </motion.div>
      </div>
    </>
  );
};

export default Index;
