import ShareModal from "@/components/ShareModal";
import { Button } from "@/components/ui/button";
import { useBadges } from "@/hooks/useBadges";
import {
  Copy,
  Edit,
  Heart,
  MessageCircle,
  MessageSquare,
  Share2,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PixelArtActions({
  pixelArt,
  currentUserProfile,
  onDelete,
}) {
  const [liked, setLiked] = useState(
    pixelArt.likes.some((l) => l.profileId === currentUserProfile?.id)
  );
  const [likes, setLikes] = useState(pixelArt.likesCount);
  const [comments, setComments] = useState([]);

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  const shareData = {
    title: `Check out this pixel art by ${pixelArt.profile.username}!`,
    text: `"${pixelArt.title || "Untitled"}" by ${pixelArt.profile.username}`,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/pixelArt?id=${pixelArt.id}`,
  };

  const { syncBadges } = useBadges();

  useEffect(() => {
    setComments(pixelArt.comments);
  }, [pixelArt]);

  const handleCopyPixelArt = async (e) => {
    e.stopPropagation();
    if (isCopying) return;

    setIsCopying(true);

    try {
      const res = await fetch("/api/copyPixelArt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pixelArtId: pixelArt.id }),
      });

      if (!res.ok) {
        throw new Error("Failed to copy pixel art");
      }

      const result = await res.json();

      toast({
        title: "Copied!",
        description: "You can now edit your copied pixel art",
      });

      router.push(`/edit?id=${result.pixelArt.id}`);
    } catch (error) {
      console.error("Copy pixel art error:", error);
      toast({
        title: "Error",
        description: "Failed to copy pixel art",
        variant: "destructive",
      });
    } finally {
      setIsCopying(false);
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

          {/* Copy */}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4"
            disabled={isCopying}
            onClick={handleCopyPixelArt}
          >
            <Copy className={`h-4 w-4 ${isCopying ? "animate-pulse" : ""}`} />
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
