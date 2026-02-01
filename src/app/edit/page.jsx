"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Layout from "@/components/layout/Layout";
import PixelArtCanvas from "@/components/pixelArt/PixelArtCanvas";
import { useToast } from "@/hooks/use-toast";
import LoginModal from "@/components/LoginModal";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import quotes from "@/lib/quotes.json";

const PixelArtEditor = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [pixelArt, setPixelArt] = useState(null);
  const [pixelArtId, setPixelArtId] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [quote, setQuote] = useState(null);
  const [prompt, setPrompt] = useState(null);

  // Use a single useEffect for all data fetching and state initialization
  useEffect(() => {
    // Select a random quote on component mount
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);

    const pixelArtIdParam = searchParams.get("id");
    if (pixelArtIdParam) {
      setPixelArtId(pixelArtIdParam);
      const fetchPixelArt = async () => {
        try {
          const response = await fetch(`/api/pixelArts/${pixelArtIdParam}`);
          if (!response.ok) throw new Error("Failed to fetch pixelArt");
          const data = await response.json();
          setPixelArt(data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchPixelArt();
    }
  }, [searchParams]);

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
          return;
        }
        const data = await res.json();
        setPrompt(data);
      } catch (err) {
        console.error("Error fetching prompt:", err);
      } finally {
      }
    };

    fetchPrompt();
  }, []);

  const handleUpdatePixelArt = async ({
    title,
    data, // Matches the 'data' field in schema (the JSON string)
    gridSize, // New field from schema
    imageUrl,
    canRemix,
    visibilityStatus,
    dailyPromptId,
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
      const response = await fetch(`/api/updatePixelArt/${pixelArtId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          data, // The JSON.stringify(fullGrid)
          gridSize, // e.g., 32, 64, or 128
          imageUrl, // The PNG base64 or storage URL
          canRemix,
          visibilityStatus,
          dailyPromptId,
        }),
      });

      if (response.ok) {
        toast({
          title: "Pixel Art updated",
          description: "Your Pixel Art has been updated!",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to update Pixel Art",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error updating pixelArt:", error);
    }
  };

  return (
    <>
      {pixelArt ? (
        <PixelArtCanvas
          onSave={handleUpdatePixelArt}
          pixelArt={pixelArt}
          prompt={prompt}
        />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-muted-foreground">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-center max-w-sm px-4">
            {quote ? (
              <>
                <span className="font-semibold italic">"{quote.quote}"</span>
                <span className="block mt-2 text-sm font-medium">
                  {" "}
                  - {quote.author}
                </span>
              </>
            ) : (
              "Loading pixelArt..."
            )}
          </p>
        </div>
      )}

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        reason="edit-pixelArt"
      />
    </>
  );
};

const EditPixelArt = () => {
  return (
    
      <div className="md:container py-2 md:py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <PixelArtEditor />
        </Suspense>
      </div>
    
  );
};

export default EditPixelArt;
