'use client'

import React, { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import PixelArtsByDateSection from '@/components/pixelArt/DoodleSection'; // you might want to rename the file too
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';

const fetchPixelArtsByDate = async (date) => {
  try {
    const res = await fetch(`/api/pixelArts?date=${date}`);
    if (!res.ok) throw new Error("Failed to fetch pixel arts");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const formatDate = (daysAgo = 0) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split("T")[0];
};

const PixelArtGallery = () => {
  const { data: session } = useSession();
  const [pixelArtsByDate, setPixelArtsByDate] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);
  const daysLoaded = useRef(0);

  const loadMorePixelArts = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const dateToFetch = formatDate(daysLoaded.current);
    const data = await fetchPixelArtsByDate(dateToFetch);

    if (data && data.pixelArts?.length > 0) {
      setPixelArtsByDate(prev => [
        ...prev,
        { date: dateToFetch, pixelArts: data.pixelArts, prompt: data.prompt }
      ]);
      daysLoaded.current += 1;
      setLoading(false);
    } else {
      setHasMore(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMorePixelArts();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [loading, hasMore]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement server-side or client-side search here
  };

  const handleSortChange = (value) => setSortBy(value);

  const tags = ["All Prompts", "Fantasy Creature", "Underwater City", "Space Explorer", "Dream Landscape"];

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Pixel Art Gallery</h1>
            <p className="text-muted-foreground mt-1">
              Explore daily pixel art created by our community
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full md:w-auto">
            <form onSubmit={handleSearch} className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by prompt, creator, or tag..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search pixel arts"
              />
            </form>

            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tags / Filters */}
        <div className="mb-6 flex gap-2 overflow-x-auto py-1">
          {tags.map((tag) => (
            <Button key={tag} variant="outline" size="sm" className="rounded-full flex-shrink-0">
              {tag}
            </Button>
          ))}
        </div>

        {/* Pixel Arts */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {pixelArtsByDate.length === 0 && !loading && (
            <p className="text-center text-muted-foreground">No pixel arts yet.</p>
          )}

          {pixelArtsByDate.map((section) => (
            <PixelArtsByDateSection
              key={section.date}
              date={section.date}
              prompt={section.prompt}
              pixelArts={section.pixelArts}
              currentUserProfile={session?.user || null}
            />
          ))}
        </motion.div>

        {/* Loading / End */}
        <div ref={observerTarget} className="py-8 text-center">
          {loading && <p className="text-muted-foreground">Loading more pixel arts...</p>}
          {!hasMore && pixelArtsByDate.length > 0 && (
            <p className="text-muted-foreground">You've reached the end of the gallery.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PixelArtGallery;
