"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share2, Edit, Trash2, Copy } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import Avatar from "boring-avatars";
import { motion } from "framer-motion";
import { useToast } from "../ui/use-toast";
import ShareModal from "../ShareModal";
import { useRouter } from "next/navigation";
import ConfirmDialog from "../ui/ConfirmDialog";
import PixelArtModal from "./modal/PixelArtModal";

const PixelArtCard = ({ pixelArt, currentUserProfile, onPixelArtDeleted }) => {
  const { toast } = useToast();
  const [likes, setLikes] = useState(pixelArt.likesCount || 0);
  const [liked, setLiked] = useState(pixelArt.likedByMe);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsCurrentUser(currentUserProfile?.id === pixelArt.profile.id);
  }, [currentUserProfile, pixelArt]);

  const handleLike = async (e) => {
    e.stopPropagation();

    const prevLiked = liked;
    setLiked(!prevLiked);
    setLikes((prev) => (prevLiked ? prev - 1 : prev + 1));

    try {
      const res = await fetch(`/api/pixelArts/${pixelArt.id}/like`, {
        method: "POST",
      });
      if (!res.ok) throw new Error();
    } catch {
      setLiked(prevLiked);
      setLikes((prev) => (prevLiked ? prev + 1 : prev - 1));
      toast({
        title: "Error",
        description: "Failed to update like.",
        variant: "destructive",
      });
    }
  };

  const shareData = {
    title: `Check out this pixel art by ${pixelArt.profile.username}!`,
    text: `"${pixelArt.title || "Untitled"}" by ${pixelArt.profile.username}`,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/pixelArt?id=${pixelArt.id}`,
  };

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

  const handleDeletePixelArt = async () => {
    setDeleting(true);

    try {
      const res = await fetch(`/api/pixelArts/${pixelArt.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast({
          title: "",
          description: "Pixel Art deleted successfully!",
          variant: "default",
        });
        onPixelArtDeleted(pixelArt.id)
        setShowDeleteConfirm(false);
        onClose();
      } else {
        toast({
          title: "",
          description: "Failed to delete Pixel Art. Please try again.",
          variant: "default",
        });
      }
    } catch (err) {
      toast({
        title: "",
        description: "Failed to delete Pixel Art. Please try again.",
        variant: "default",
      });
      console.error("Error deleting Pixel Art:", err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <motion.div
      className="pixel-card-single group w-full snap-start cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={() => setIsModalOpen(true)}
    >
      {/* Image Container - Matches your design exactly */}
      <div className="aspect-square mb-4 relative overflow-hidden bg-white border-2 border-border">
        <img
          src={pixelArt.imageUrl}
          alt={pixelArt.title}
          className="w-full h-full object-contain image-pixelated p-2"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>

      {/* Title */}
      <h4 className="font-bold text-lg mb-2 font-mono truncate">
        {pixelArt.title || "UNTITLED"}
      </h4>

      {/* Profile Section */}
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <Link
          href={`/${pixelArt.profile.username}`}
          className="flex items-center gap-2 hover:text-primary transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Avatar
            size={20}
            name={pixelArt.profile.username}
            variant={pixelArt.profile.avatarConfig?.variant || "beam"}
            colors={pixelArt.profile.avatarConfig?.colors}
          />
          <span className="font-mono">{pixelArt.profile.username}</span>
        </Link>
        <span className="text-[10px] font-mono uppercase">
          {formatDistanceToNow(new Date(pixelArt.createdAt), {
            addSuffix: true,
          })}
        </span>
      </div>

      {/* Bottom Bar: Stats + Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm font-mono">
          <div
            onClick={handleLike}
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
          {pixelArt.canCopy && (
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4"
              disabled={isCopying}
              onClick={handleCopyPixelArt}
            >
              <Copy className={`h-4 w-4 ${isCopying ? "animate-pulse" : ""}`} />
            </Button>
          )}
        </div>

        {/* Action Buttons (Edit/Delete) - Only shown if it's the current user */}
        {isCurrentUser && (
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
                setShowDeleteConfirm(true);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Components that don't render visually in the flow */}
      <PixelArtModal
        pixelArt={pixelArt}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentUserProfile={currentUserProfile}
      />
      <ConfirmDialog
        open={showDeleteConfirm}
        title="Delete pixel art?"
        description="This will permanently remove your pixel art. This action cannot be undone."
        confirmText="Delete"
        loading={deleting}
        onCancel={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeletePixelArt}
      />
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        shareData={shareData}
      />
    </motion.div>
  );
};

export default PixelArtCard;
