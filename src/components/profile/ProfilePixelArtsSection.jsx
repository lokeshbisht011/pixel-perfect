"use client";

import { useEffect, useState } from "react";
import PixelArtCard from "@/components/pixelArt/PixelArtCard";
import EmptyState from "./EmptyState";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ProfilePixelArtsSection({
  username,
  currentUserProfile,
}) {
  const [pixelArts, setPixelArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const res = await fetch(`/api/profile/${username}/pixelArts`);
      setPixelArts(await res.json());
      setLoading(false);
    };

    load();
  }, [username]);

  if (loading) return <SectionSkeleton />;

  if (!pixelArts.length)
    return (
      <EmptyState
        text="You haven't created any pixel art yet"
        action={
          <Link href="/create">
            <Button>Create your first one</Button>
          </Link>
        }
      />
    );

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {pixelArts.map((art) => (
        <PixelArtCard
          key={art.id}
          pixelArt={art}
          currentUserProfile={currentUserProfile}
          onPixelArtDeleted={(id) =>
            setPixelArts((p) => p.filter((x) => x.id !== id))
          }
        />
      ))}
    </div>
  );
}

function SectionSkeleton() {
  return <div className="h-40 animate-pulse rounded-md bg-muted" />;
}
