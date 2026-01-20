"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import PixelArtImage from "./PixelArtImage";
import PixelArtHeader from "./PixelArtHeader";
import PixelArtComments from "./PixelArtComments";
import PixelArtActions from "./PixelArtActions";
import PixelArtCommentInput from "./PixelArtCommentInput";
import ModalSkeleton from "./ModalSkeleton";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

const PixelArtModal = ({ pixelArt, isOpen, onClose, currentUserProfile }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

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

  useEffect(() => {
    if (!isOpen || !pixelArt?.id) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/pixelArts/${pixelArt.id}`);
        const json = await res.json();
        setData(json);
      } catch {
        toast.error("Failed to load pixel art");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isOpen, pixelArt?.id]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
    p-0
    w-[calc(100vw-2rem)]
    max-w-5xl
    md:w-full
    overflow-hidden
  "
      >
        <DialogTitle className="sr-only">Pixel Art</DialogTitle>

        {loading || !data ? (
          <ModalSkeleton />
        ) : (
          <div className="flex flex-col md:flex-row h-[90vh] md:h-[600px]">
            <PixelArtImage pixelArt={data} />

            <div className="flex flex-col flex-1 border-l min-h-0">
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
                onCommentAdded={(c) =>
                  setData((p) => ({ ...p, comments: [c, ...p.comments] }))
                }
              />
            </div>
          </div>
        )}
      </DialogContent>

      <ConfirmDialog
        open={showDeleteConfirm}
        title="Delete pixel art?"
        description="This action cannot be undone."
        confirmText="Delete"
        loading={deleting}
        onCancel={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeletePixelArt}
      />
    </Dialog>
  );
};

export default PixelArtModal;
