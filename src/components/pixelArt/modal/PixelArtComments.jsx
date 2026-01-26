import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { Trash2 } from "lucide-react";
import BoringAvatar from "boring-avatars";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PixelArtComments({ pixelArt, currentUserProfile, isOwner }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(pixelArt.comments);
  }, [pixelArt]);

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

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c.id} className="flex items-start gap-2">
              {c.profile?.avatarConfig && (
                <Link href={`/${c.profile.username}`}>
                  <BoringAvatar
                    size={32}
                    name={c.profile.avatarConfig.seed}
                    variant={c.profile.avatarConfig.variant}
                    colors={c.profile.avatarConfig.colors}
                  />
                </Link>
              )}
              <div className="flex-1 text-sm">
                <p className="text-sm leading-relaxed">
                  <Link
                    href={`/${c.profile.username}`}
                    className="font-semibold text-foreground"
                  >
                    {c.profile.username}
                  </Link>{" "}
                  <span className="text-muted-foreground">{c.content}</span>
                </p>

                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(c.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
              {isOwner}
              {((currentUserProfile?.id === c.profileId) || isOwner) && (
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
          <p className="text-muted-foreground text-sm">No comments yet</p>
        )}
      </div>
    </div>
  );
}
