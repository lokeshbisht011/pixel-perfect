"use client";

import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";
import { useState, useRef } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function PixelArtCommentInput({ pixelArtId, onCommentAdded }) {
  const [commentText, setCommentText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const inputRef = useRef(null);

  const submit = async () => {
    if (!commentText.trim()) return;

    const res = await fetch(`/api/pixelArts/${pixelArtId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: commentText }),
    });

    const comment = await res.json();
    onCommentAdded(comment);
    setCommentText("");
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
      input.setSelectionRange(start + emoji.native.length, start + emoji.native.length);
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
          className="p-2 rounded-full hover:bg-muted"
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
        />

        <Button size="sm" onClick={submit} className="rounded-full">
          Post
        </Button>
      </div>
    </div>
  );
}
