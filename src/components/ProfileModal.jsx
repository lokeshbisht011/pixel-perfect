"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Avatar from "boring-avatars";
import { toast } from "sonner";
import AvatarEditor from "./AvatarEditor";
import { Loader2 } from "lucide-react";

export default function ProfileModal({ isOpen, onClose, profile }) {
  const isEditing = !!profile;

  const [name, setName] = useState(profile?.name || "");
  const [username, setUsername] = useState(profile?.username || "");
  const [bio, setBio] = useState(profile?.bio || "");
  const [usernameAvailable, setUsernameAvailable] = useState(true);
  const [checking, setChecking] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [isSaving, setIsSaving] = useState(false); 

  const [selectedConfig, setSelectedConfig] = useState(
    profile?.avatarConfig || {
      seed: "user-0",
      variant: "beam",
      colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
    }
  );

  useEffect(() => {
    setName(profile?.name || "");
    setUsername(profile?.username || "");
    setBio(profile?.bio || "");
    setSelectedConfig(
      profile?.avatarConfig || {
        seed: "user-0",
        variant: "beam",
        colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
      }
    );
    setShowPicker(false);
  }, [profile]);

  useEffect(() => {
    if (!username || (isEditing && username === profile?.username)) return;
    const timer = setTimeout(async () => {
      setChecking(true);
      try {
        const res = await fetch(
          `/api/profile/check-username?username=${username}`
        );
        const data = await res.json();
        setUsernameAvailable(data.available);
      } catch {
        setUsernameAvailable(false);
      } finally {
        setChecking(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [username, isEditing, profile?.username]);

  const handleSubmit = async () => {
    if (!isEditing && !usernameAvailable) {
      toast.error("Username not available ❌");
      return;
    }

    setIsSaving(true);
    try {
      const url = isEditing ? "/api/profile/update" : "/api/profile/setup";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          username,
          bio,
          avatarConfig: selectedConfig,
        }),
      });

      if (!res.ok) throw new Error("Failed to save profile");
      toast.success(isEditing ? "Profile updated ✅" : "Profile created 🎉");
      onClose();
    } catch (err) {
      toast.error("Error saving profile");
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleAvatarChange = (newConfig) => {
    setSelectedConfig(newConfig);
    setShowPicker(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md -hidden bg-card border-none -hidden p-0">
        <div className="pixel-card w-full p-4 sm:p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-bold font-mono text-center neon-glow text-primary">
              {isEditing ? "EDIT YOUR PROFILE" : "SET UP YOUR PROFILE"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-8rem)]">
            <div className="flex flex-col items-center gap-3">
              <div className="border-4 border-accent p-1">
                <Avatar
                  size={80}
                  name={selectedConfig.seed}
                  variant={selectedConfig.variant}
                  colors={selectedConfig.colors}
                />
              </div>
              <Button
                variant="retro" // Changed to retro variant for themed look
                size="sm"
                onClick={() => setShowPicker((prev) => !prev)}
                className="font-mono"
              >
                {showPicker ? "Close Avatar Picker" : "Edit Avatar"}
              </Button>
            </div>

            {showPicker && (
              <AvatarEditor
                value={selectedConfig}
                onChange={handleAvatarChange}
              />
            )}

            <div>
              <Input
                placeholder="Display Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-border bg-input font-mono"
              />
            </div>
            <div>
              <Input
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-2 border-border bg-input font-mono"
              />
              {username && username != profile?.username && (
                <p
                  className={`text-sm mt-1 font-mono ${
                    checking
                      ? "text-muted-foreground"
                      : usernameAvailable
                      ? "text-pixel-neon-green" // Themed success color
                      : "text-destructive" // Themed error color
                  }`}
                >
                  {checking
                    ? "Checking..."
                    : usernameAvailable
                    ? "✅ Username available"
                    : "❌ Username taken"}
                </p>
              )}
            </div>
            <div>
              <Textarea
                placeholder="Write a short bio..."
                value={bio}
                onChange={(e) => {
                  if (e.target.value.length <= 200) {
                    setBio(e.target.value);
                  }
                }}
                className="border-2 border-border bg-input font-mono"
              />
              <p className="text-sm text-right text-muted-foreground font-mono mt-1">
                {bio.length} / 200
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              variant="neon" // Changed to neon variant for primary action
              onClick={handleSubmit}
              disabled={
                (!isEditing && !usernameAvailable) || checking || isSaving
              }
              className="w-full sm:w-auto font-mono"
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : isEditing ? (
                "Save Changes"
              ) : (
                "Save Profile"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}