"use client";

import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";
import { useState, useRef } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Loader2 } from "lucide-react"; // spinner icon

export default function PixelArtCommentInput({ pixelArtId, onCommentAdded }) {
  const [commentText, setCommentText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [posting, setPosting] = useState(false);
  const inputRef = useRef(null);

  const submit = async () => {
    if (!commentText.trim() || posting) return;

    setPosting(true);

    try {
      const res = await fetch(`/api/pixelArts/${pixelArtId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: commentText }),
      });

      if (!res.ok) throw new Error("Failed to post comment");

      const comment = await res.json();
      onCommentAdded(comment);
      setCommentText("");
    } catch (err) {
      console.error(err);
      // You can add toast here if using sonner/toast
    } finally {
      setPosting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline
      submit();
    }
  };

  const addEmoji = (emoji) => {
    const input = inputRef.current;
    if (!input) return;

    const start = input.selectionStart;
    const end = input.selectionEnd;

    const newText =
      commentText.slice(0, start) + emoji.native + commentText.slice(end);

    setCommentText(newText);
    setShowEmoji(false);

    // Restore cursor position after emoji
    requestAnimationFrame(() => {
      input.focus();
      input.setSelectionRange(
        start + emoji.native.length,
        start + emoji.native.length
      );
    });
  };

  return (
    <div className="relative border-t p-4">
      {showEmoji && (
        <div className="absolute bottom-14 left-4 z-50">
          <Picker
            data={data}
            onEmojiSelect={addEmoji}
            theme="light"
            previewPosition="none"
          />
        </div>
      )}

      <div className="flex gap-2 items-center">
        <button
          type="button"
          onClick={() => setShowEmoji((p) => !p)}
          className="hidden md:block p-2 rounded-full hover:bg-muted"
        >
          <Smile className="h-5 w-5 text-muted-foreground" />
        </button>

        <input
          ref={inputRef}
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 border text-black rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          onKeyDown={handleKeyPress}
          disabled={posting}
        />

        <Button
          size="sm"
          onClick={submit}
          className="rounded-full flex items-center justify-center gap-1"
          disabled={posting}
        >
          {posting && <Loader2 className="h-4 w-4 animate-spin" />}
          Post
        </Button>
      </div>
    </div>
  );
}
