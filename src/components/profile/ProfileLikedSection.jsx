"use client";

import { useEffect, useState } from "react";
import PixelArtCard from "@/components/pixelArt/PixelArtCard";
import EmptyState from "./EmptyState";

export default function ProfileLikedSection({
  username,
  currentUserProfile,
}) {
  const [liked, setLiked] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const res = await fetch(`/api/profile/${username}/liked`);
      setLiked(await res.json());
      setLoading(false);
    };

    load();
  }, [username]);

  if (loading) return <SectionSkeleton />;

  if (!liked.length)
    return <EmptyState text="No liked Pixel Art yet" />;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {liked.map((art) => (
        <PixelArtCard
          key={art.id}
          pixelArt={art}
          currentUserProfile={currentUserProfile}
        />
      ))}
    </div>
  );
}

function SectionSkeleton() {
  return <div className="h-40 animate-pulse rounded-md bg-muted" />;
}
