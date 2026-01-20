"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Heart,
  User,
  Calendar,
  ArrowRight,
  Loader2,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Avatar from "boring-avatars";
import PixelArtCard from "./pixelArt/PixelArtCard";

const HorizontalScrollRow = ({
  title,
  date,
  limit = 12,
  profile = { profile },
}) => {
  const [pixelArts, setPixelArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPixelArts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/pixelArts?day=${"today"}&limit=${limit}`
        );
        const data = await res.json();
        setPixelArts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch pixels:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPixelArts();
  }, [date, limit]);

  const handlePixelArtDeleted = (deletedPixelArtId) => {
    setPixelArts((prevPixelArt) =>
      prevPixelArt.filter((pixelArt) => pixelArt.id !== deletedPixelArtId)
    );
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-2xl font-mono font-bold flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-pixel-neon-cyan" />
          <span className="uppercase tracking-tighter text-md md:text-3xl">
            {title}
          </span>
        </h3>
        <Link href={`/gallery?date=${date.toISOString().split("T")[0]}`}>
          <Button
            variant="ghost"
            className="font-mono text-pixel-neon-pink hover:bg-pixel-neon-pink/10"
          >
            <span className="text-xs">VIEW ALL</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="relative group">
        {loading ? (
          <div className="mt-4 md:mt-6 h-64 flex items-center justify-center border-2 border-dashed border-border">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : pixelArts.length > 0 ? (
          <div className="mt-4 md:mt-6 grid grid-flow-col auto-cols-[minmax(250px,250px)] md:auto-cols-[minmax(350px,350px)] gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x px-2">
            {pixelArts.map((pixelArt) => (
              <PixelArtCard
                key={pixelArt.id}
                pixelArt={pixelArt}
                currentUserProfile={profile}
                onPixelArtDeleted={handlePixelArtDeleted}
              />
            ))}
          </div>
        ) : (
          <div className="h-48 flex flex-col items-center justify-center border-2 border-border bg-card/50 px-4 text-center gap-2">
            {title.toLowerCase().includes("today") ? (
              <>
                <p className="font-mono text-muted-foreground">
                  No submissions today
                </p>
                <p className="font-mono text-pixel-neon-cyan mb-2">
                  Be the first to submit your pixel art!
                </p>
                <Link href="/create">
                  <Button variant="pixel" size="sm">
                    Create Pixel Art
                  </Button>
                </Link>
              </>
            ) : (
              <p className="font-mono text-muted-foreground">
                No pixel art found for this day
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const PixelArtGallery = ({ profile }) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  return (
    <section id="gallery" className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 font-mono tracking-tighter"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="neon-glow text-pixel-neon-cyan">THE</span>{" "}
            <span className="neon-glow text-pixel-neon-pink">GALLERY</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-mono">
            Witness the evolution of our community, one pixel at a time.
          </p>
        </div>

        {/* Today's Section */}
        <HorizontalScrollRow
          title="Today's Pixels"
          date={today}
          profile={profile}
        />

        {/* Yesterday's Section */}
        <HorizontalScrollRow
          title="Yesterday's Masterpieces"
          date={yesterday}
          profile={profile}
        />

        {/* Global Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Link href="/gallery">
            <Button
              variant="retro"
              size="xl"
              className="font-mono text-xl px-12"
            >
              ENTER FULL GALLERY
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PixelArtGallery;
