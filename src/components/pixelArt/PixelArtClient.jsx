"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

import PixelArtHeader from "./modal/PixelArtHeader";
import PixelArtComments from "./modal/PixelArtComments";
import PixelArtActions from "./modal/PixelArtActions";
import PixelArtCommentInput from "./modal/PixelArtCommentInput";
import ModalSkeleton from "./modal/ModalSkeleton";
import ConfirmDialog from "../ui/ConfirmDialog";

export default function PixelArtClient({ pixelArtId, currentUserProfile }) {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!pixelArtId) return;

    const fetchPixelArt = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/pixelArts/${pixelArtId}`);
        if (!res.ok) throw new Error();
        const json = await res.json();
        setData(json);
      } catch {
        toast.error("Failed to load pixel art");
      } finally {
        setLoading(false);
      }
    };

    fetchPixelArt();
  }, [pixelArtId]);

  const handleDeletePixelArt = async () => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/pixelArts/${pixelArtId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Pixel Art deleted");
        router.push("/");
      } else {
        toast.error("Failed to delete pixel art");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  if (loading || !data) return <ModalSkeleton />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Left: Pixel Art */}
        <div className="relative flex-1 flex items-center aspect-square rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-t-none justify-center overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col flex-1 border bg-card overflow-hidden rounded-b-xl md:rounded-tr-xl md:rounded-br-xl md:rounded-b-none">
          <PixelArtHeader pixelArt={data} />
          <PixelArtComments
            pixelArt={data}
            currentUserProfile={currentUserProfile}
          />
          <PixelArtActions
            pixelArt={data}
            currentUserProfile={currentUserProfile}
            onDelete={() => setShowDeleteConfirm(true)}
          />
          <PixelArtCommentInput
            pixelArtId={data.id}
            onCommentAdded={(comment) =>
              setData((prev) => ({
                ...prev,
                comments: [comment, ...prev.comments],
              }))
            }
          />
        </div>
      </div>

      <ConfirmDialog
        open={showDeleteConfirm}
        title="Delete pixel art?"
        description="This action cannot be undone."
        confirmText="Delete"
        loading={deleting}
        onCancel={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeletePixelArt}
      />
    </div>
  );
}
