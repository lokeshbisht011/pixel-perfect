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
  const [quote, setQuote] = useState(null); // New state for the random quote

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

  const handleUpdatePixelArt = async ({
    title,
    data, // Matches the 'data' field in schema (the JSON string)
    gridSize, // New field from schema
    imageUrl,
    addToTodaysPixelArts, // This maps to 'isPublic' in the schema
    editable,
    dailyPromptId,
  }) => {
    if (!title) {
      toast({ title: "Missing title", description: "Please add a title." });
      return;
    }

    if (!session) {
      toast({
        title: "Sign in required",
        description: "You must be signed in to edit a pixelArt.",
        variant: "destructive",
      });
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
          addToTodaysPixelArts,
          editable,
          dailyPromptId,
        }),
      });

      if (response.ok) {
        toast({
          title: "PixelArt updated",
          description: "Your pixelArt has been updated!",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to update pixelArt",
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
          userId={session?.user?.id ?? ""}
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
    <Layout>
      <div className="container py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <PixelArtEditor />
        </Suspense>
      </div>
    </Layout>
  );
};

export default EditPixelArt;
