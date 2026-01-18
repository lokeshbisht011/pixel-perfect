"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Share2, Edit, MessageCircle, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import BoringAvatar from "boring-avatars";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useBadges } from "@/hooks/useBadges";
import ConfirmDialog from "../ui/ConfirmDialog";

const PixelArtModal = ({ pixelArt, isOpen, onClose, currentUserProfile }) => {
  const [fullPixelArt, setFullPixelArt] = useState(null);
  const [loading, setLoading] = useState(false);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const { syncBadges } = useBadges();

  useEffect(() => {
    if (!isOpen || !pixelArt?.id) return;

    const fetchFullPixelArt = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/pixelArts/${pixelArt.id}`);
        if (!res.ok) throw new Error();

        const data = await res.json();

        setFullPixelArt(data);
        setLikes(data.likesCount);
        setComments(data.comments);
      } catch (err) {
        toast.error("Failed to load pixel art");
      } finally {
        setLoading(false);
      }
    };

    fetchFullPixelArt();
  }, [isOpen, pixelArt?.id]);

  useEffect(() => {
    if (currentUserProfile && fullPixelArt) {
      setLiked(
        fullPixelArt.likes.some(
          (like) => like.profileId === currentUserProfile.id
        )
      );
    }
  }, [currentUserProfile, fullPixelArt]);

  if (!isOpen) return null;
  if (loading || !fullPixelArt) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl flex items-center justify-center">
          Loading…
        </DialogContent>
      </Dialog>
    );
  }

  const handleLike = async () => {
    const prev = liked;
    setLiked(!prev);
    setLikes((p) => (prev ? p - 1 : p + 1));

    try {
      const res = await fetch(`/api/doodles/${pixelArt.id}/like`, {
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

  const handleAddComment = async () => {
    if (!commentText.trim()) return;
    try {
      const res = await fetch(`/api/pixelArts/${pixelArt.id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: commentText }),
      });
      if (res.ok) {
        const newComment = await res.json();
        setComments((prev) => [newComment, ...prev]);
        setCommentText("");
        syncBadges();
      }
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const res = await fetch(
        `/api/pixelArts/${pixelArt.id}/comments/${commentId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setComments((prev) => prev.filter((c) => c.id !== commentId));
      }
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  const handleDeletePixelArt = async () => {
    setDeleting(true);

    try {
      const res = await fetch(`/api/pixelArts/${pixelArt.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Pixel Art deleted successfully!");
        setShowDeleteConfirm(false);
        onClose();
      } else {
        toast.error("Failed to delete Pixel Art. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Failed to delete Pixel Art.");
      console.error("Error deleting Pixel Art:", err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-lg">
        {pixelArt && (
          <div className="flex w-full h-[600px] border">
            <div className="flex-1 relative flex items-center justify-center">
              <Image
                src={pixelArt.imageUrl}
                alt={pixelArt.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b flex items-center gap-3">
                {pixelArt.profile?.avatarConfig ? (
                  <BoringAvatar
                    size={32}
                    name={pixelArt.profile.avatarConfig.seed}
                    variant={pixelArt.profile.avatarConfig.variant}
                    colors={pixelArt.profile.avatarConfig.colors}
                  />
                ) : (
                  <Avatar className="h-8 w-8">
                    <AvatarImage alt={pixelArt.profile?.username} />
                    <AvatarFallback>
                      {pixelArt.profile?.username?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div className="flex flex-col">
                  <a
                    href={`/${pixelArt.profile?.username}`}
                    className="font-medium text-sm hover:underline"
                  >
                    {pixelArt.profile?.username}
                  </a>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(pixelArt.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </div>

              {/* Main Content (Title & Comments) */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="font-semibold text-lg">{pixelArt.title}</h2>
                </div>
                {/* Comments Section */}
                <div className="space-y-4">
                  {comments.length > 0 ? (
                    comments.map((c) => (
                      <div key={c.id} className="flex items-start gap-2">
                        {c.profile?.avatarConfig ? (
                          <BoringAvatar
                            size={32}
                            name={c.profile.avatarConfig.seed}
                            variant={c.profile.avatarConfig.variant}
                            colors={c.profile.avatarConfig.colors}
                          />
                        ) : (
                          <Avatar className="h-8 w-8">
                            <AvatarImage alt={c.profile?.username} />
                            <AvatarFallback>
                              {c.profile?.username?.charAt(0) || "U"}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div className="flex-1 text-sm">
                          <p>
                            <span className="font-medium">
                              {c.profile?.username}
                            </span>{" "}
                            {c.content}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(c.createdAt), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                        {currentUserProfile?.id === c.profileId && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs p-1 h-auto"
                            onClick={() => handleDeleteComment(c.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      No comments yet
                    </p>
                  )}
                </div>
              </div>

              {/* Actions and Comment Input */}
              <div className="p-4 border-t">
                <div className="flex items-center gap-3 mb-4">
                  <Button variant="ghost" size="icon" onClick={handleLike}>
                    <Heart
                      className={`h-6 w-6 transition-colors ${
                        liked ? "text-primary" : ""
                      }`}
                      fill={liked ? "currentColor" : "none"}
                    />
                    <span>{likes}</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircle className="h-6 w-6" />
                    <span>{comments.length}</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-6 w-6" />
                  </Button>
                  {currentUserProfile?.id === pixelArt.profile.id && (
                    <>
                      <Link href={`/edit?id=${pixelArt.id}`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-6 w-6" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeleteConfirm(true);
                        }}
                      >
                        <Trash2 className="h-6 w-6" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Comment Input */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button
                    size="sm"
                    onClick={handleAddComment}
                    className="rounded-full"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
      <ConfirmDialog
        open={showDeleteConfirm}
        title="Delete pixel art?"
        description="This will permanently remove your pixel art. This action cannot be undone."
        confirmText="Delete"
        loading={deleting}
        onCancel={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeletePixelArt}
      />
    </Dialog>
  );
};

export default PixelArtModal;
