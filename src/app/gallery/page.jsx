"use client";

import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import PixelArtCard from "@/components/pixelArt/PixelArtCard";

const fetchPixelArts = async ({ date, query }) => {
  try {
    const params = new URLSearchParams();
    if (date) params.append("date", date);
    if (query) params.append("query", query);

    const res = await fetch(`/api/pixelArts?${params.toString()}`);
    if (!res.ok) throw new Error("Failed to fetch pixel arts");
    return await res.json(); // API now returns a flat array of pixel arts
  } catch (error) {
    console.error(error);
    return [];
  }
};

const formatDate = (daysAgo = 0) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split("T")[0];
};

const PixelArtGallery = () => {
  const { data: session } = useSession();

  const [pixelArts, setPixelArts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [profile, setProfile] = useState(null);

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

  const handlePixelArtDeleted = (deletedPixelArtId) => {
    setPixelArts((prevPixelArt) =>
      prevPixelArt.filter((pixelArt) => pixelArt.id !== deletedPixelArtId)
    );
  };

  const observerTarget = useRef(null);
  const daysLoaded = useRef(0);

  // Load pixel arts for infinite scroll
  const loadMorePixelArts = async () => {
    if (loading || !hasMore || selectedDate) return;
    setLoading(true);
    const dateToFetch = formatDate(daysLoaded.current);
    const data = await fetchPixelArts({ date: dateToFetch, query: "" });

    if (data.length > 0) {
      setPixelArts((prev) => [...prev, ...data]);
      daysLoaded.current += 1;
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };

  // Initial load on mount
  useEffect(() => {
    const initLoad = async () => {
      setLoading(true);
      const data = await fetchPixelArts({}); // no date, no query → fetch all
      if (data.length > 0) {
        setPixelArts(data);
        daysLoaded.current += 1;
      } else {
        setHasMore(false);
      }
      setLoading(false);
    };

    initLoad();
  }, []);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading && !selectedDate) {
          loadMorePixelArts();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [loading, hasMore, selectedDate]);

  // Fetch pixel arts by date or search
  const fetchByFilter = async (date, query) => {
    setLoading(true);
    const data = await fetchPixelArts({ date, query });
    setPixelArts(data || []);
    setLoading(false);
  };

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    fetchByFilter(
      selectedDate ? format(selectedDate, "yyyy-MM-dd") : null,
      searchQuery
    );
  };

  return (
    <Layout>
      <div className="container pt-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Pixel Art Gallery</h1>
            <p className="text-muted-foreground mt-1">
              Explore daily pixel art created by our community
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full md:w-auto items-start sm:items-center">
            <form
              onSubmit={handleSearch}
              className="relative flex-1 w-full sm:w-auto"
            >
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by prompt, creator, or tag..."
                className="pl-8 w-full sm:w-auto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search pixel arts"
              />
            </form>

            {/* Calendar Picker */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  {selectedDate
                    ? format(selectedDate, "MMM dd, yyyy")
                    : "Select Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => setSelectedDate(date)}
                  max={new Date()}
                />
              </PopoverContent>
            </Popover>

            {selectedDate && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setSelectedDate(null);
                  setPixelArts([]);
                  setHasMore(true);
                  daysLoaded.current = 0;
                }}
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Pixel Arts */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
        >
          {!loading && pixelArts.length === 0 && (
            <p className="text-center col-span-full text-muted-foreground">
              No pixel arts found.
            </p>
          )}

          {pixelArts.map((p) => (
            <PixelArtCard
              key={p.id}
              pixelArt={p}
              currentUserProfile={profile}
              onPixelArtDeleted={handlePixelArtDeleted}
            />
          ))}
        </motion.div>

        {/* Loading / End */}
        <div ref={observerTarget} className="py-8 text-center col-span-full">
          {loading && (
            <p className="text-muted-foreground">Loading pixel arts...</p>
          )}
          {!hasMore && !selectedDate && pixelArts.length > 0 && (
            <p className="text-muted-foreground mt-4">
              You've reached the end of the gallery.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PixelArtGallery;

function SectionSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-4">
      <div className="h-80 animate-pulse rounded-md bg-muted" />
      <div className="h-80 animate-pulse rounded-md bg-muted" />
      <div className="h-80 animate-pulse rounded-md bg-muted" />
    </div>
  );
}
