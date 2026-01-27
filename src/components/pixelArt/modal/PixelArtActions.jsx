import ShareModal from "@/components/ShareModal";
import { Button } from "@/components/ui/button";
import { useBadges } from "@/hooks/useBadges";
import {
  Edit,
  Heart,
  MessageCircle,
  MessageSquare,
  Share2,
  Trash2,
  Wand2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PixelArtActions({
  pixelArt,
  currentUserProfile,
  onDelete,
  isOwner
}) {
  const [liked, setLiked] = useState(
    pixelArt.likes.some((l) => l.profileId === currentUserProfile?.id)
  );
  const [likes, setLikes] = useState(pixelArt.likesCount);
  const [comments, setComments] = useState([]);

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isRemixing, setIsRemixing] = useState(false);

  const shareData = {
    title: isOwner
      ? `Check out my pixel art!`
      : `Check out this pixel art by ${pixelArt.profile.username}!`,
    text: isOwner
      ? `"${pixelArt.title || "Untitled"}" — created by me on PixelArtDaily!`
      : `"${pixelArt.title || "Untitled"}" by ${pixelArt.profile.username}`,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/pixelArt?id=${pixelArt.id}`,
  };

  const { syncBadges } = useBadges();

  useEffect(() => {
    setComments(pixelArt.comments);
  }, [pixelArt]);

  const handleRemixPixelArt = async (e) => {
    e.stopPropagation();
    if (isRemixing) return;

    setIsRemixing(true);

    try {
      const res = await fetch("/api/remixPixelArt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pixelArtId: pixelArt.id }),
      });

      if (!res.ok) {
        throw new Error("Failed to Remix Pixel Art");
      }

      const result = await res.json();

      toast({
        title: "Remix created!",
        description: "You can now edit and build on this artwork",
      });
      

      router.push(`/edit?id=${result.pixelArt.id}`);
    } catch (error) {
      console.error("Remix Pixel Art error:", error);
      toast({
        title: "Network Error",
        description: "Failed to Remix Pixel art",
        variant: "destructive",
      });
    } finally {
      setIsRemixing(false);
    }
  };

  const toggleLike = async () => {
    const prev = liked;
    setLiked(!prev);
    setLikes((p) => (prev ? p - 1 : p + 1));

    try {
      const res = await fetch(`/api/pixelArts/${pixelArt.id}/like`, {
        method: "POST",
      });

      if (!res.ok) {
        setLiked(prev);
        setLikes((p) => (prev ? p + 1 : p - 1));
        toast.error("Network error. Please try again.");
      } else {
        syncBadges();
      }
    } catch (err) {
      setLiked(prev);
      setLikes((p) => (prev ? p + 1 : p - 1));
      toast.error("Network error. Please try again.");
      console.error("Error liking Pixel Art:", err);
    }
  };

  return (
    <div className="p-2 border-t mx-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm font-mono">
          <div
            onClick={toggleLike}
            className={`flex items-center gap-1 cursor-pointer transition-colors ${
              liked ? "text-pixel-neon-pink" : "hover:text-pixel-neon-pink"
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1 text-pixel-neon-cyan">
            <MessageSquare className="w-4 h-4" />
            <span>{pixelArt.commentsCount}</span>
          </div>

          {/* Share */}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4"
            onClick={(e) => {
              e.stopPropagation();
              setIsShareModalOpen(true);
            }}
          >
            <Share2 className="h-4 w-4" />
          </Button>

          {/* Remix */}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4"
            disabled={isRemixing}
            onClick={handleRemixPixelArt}
          >
            <Wand2 className={`h-4 w-4 ${isRemixing ? "animate-pulse" : ""}`} />
          </Button>
        </div>

        {/* Action Buttons (Edit/Delete) - Only shown if it's the current user */}
        {currentUserProfile?.id === pixelArt.profile.id && (
          <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
            <Link href={`/edit?id=${pixelArt.id}`}>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 hover:text-pixel-neon-cyan"
                onClick={(e) => e.stopPropagation()}
              >
                <Edit className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                onDelete()
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        shareData={shareData}
      />
    </div>
  );
}
