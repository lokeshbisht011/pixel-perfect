"use client";

import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { toast } from "sonner";
import { Loader2 } from "lucide-react"; // Reusing Loader2 for consistency

const LoginModal = ({ isOpen, onClose, initialMode = "signup", reason, callbackUrl = "/" }) => {
  const [mode, setMode] = useState(initialMode);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const titleMap = {
    signin: "WELCOME BACK",
    signup: "JOIN PIXEL ART DAILY",
  };

  const descriptionMap = {
    signin: "Sign in to continue your Pixel Art journey",
    signup: "Create an account to start your creative streak",
  };

  const reasonMessage =
    reason === "save-pixelArt"
      ? "You need to sign in to save your Pixel Art."
      : null;

  const handleLogin = async (provider) => {
    try {
      setLoading(true);
      const result = await signIn(provider, {
        redirect: false,
        callbackUrl
      });

      if (result?.error) {
        toast.error(`Failed to sign in with ${provider} ❌`);
      } else {
        toast.success("Signed in successfully 🎉");
        onClose();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Apply pixel-card styling via wrapper div */}
      <DialogContent className="max-w-md bg-card border-none p-0">
        <div className="pixel-card w-full p-4 sm:p-6 font-mono">
          <DialogHeader className="space-y-2 text-center">
            <DialogTitle className="text-2xl font-bold font-mono neon-glow text-primary">
              {titleMap[mode]}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground font-mono">
              {reasonMessage || descriptionMap[mode]}
            </DialogDescription>
          </DialogHeader>

          {/* Social logins */}
          <div className="flex flex-col gap-3 mt-6">
            <Button
              onClick={() => handleLogin("google")}
              disabled={loading}
              variant="outline" // Use outline to keep the Google icon visible
              className="flex items-center justify-center gap-2 text-foreground hover:bg-accent hover:text-accent-foreground font-mono"
            >
              <FcGoogle className="h-5 w-5" />
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : mode === "signup" ? (
                "Sign up with Google"
              ) : (
                "Sign in with Google"
              )}
            </Button>

            {/* Using theme variants for Facebook/Twitter */}
            <Button
              onClick={() => handleLogin("facebook")}
              disabled={loading}
              variant="pixel" // Themed button style
              className="flex items-center justify-center gap-2 font-mono"
            >
              <FaFacebookF className="h-5 w-5" />
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : mode === "signup" ? (
                "Sign up with Facebook"
              ) : (
                "Sign in with Facebook"
              )}
            </Button>

            <Button
              onClick={() => handleLogin("twitter")}
              disabled={loading}
              variant="neon" // Flashy themed button style
              className="flex items-center justify-center gap-2 font-mono"
            >
              <FaTwitter className="h-5 w-5" />
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : mode === "signup" ? (
                "Sign up with X (Twitter)"
              ) : (
                "Sign in with X (Twitter)"
              )}
            </Button>
          </div>

          <DialogFooter className="mt-6 flex flex-col justify-center gap-2">
            <p className="text-sm text-muted-foreground text-center font-mono">
              By signing in, you agree to our{" "}
              <a
                href="/terms"
                className="text-pixel-neon-cyan hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-pixel-neon-cyan hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
            {mode === "signin" ? (
              <p className="text-sm text-foreground text-center font-mono">
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-pixel-neon-pink hover:underline"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p className="text-sm text-foreground text-center font-mono">
                Already have an account?{" "}
                <button
                  onClick={() => setMode("signin")}
                  className="text-pixel-neon-pink hover:underline"
                >
                  Sign in
                </button>
              </p>
            )}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;