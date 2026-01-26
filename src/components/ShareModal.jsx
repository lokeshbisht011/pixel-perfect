"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socialLinks = {
  twitter: (title, text, url) =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title + " " + text
    )}&url=${encodeURIComponent(url)}`,
  facebook: (title, text, url) =>
    `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(
      title + " " + text
    )}&u=${encodeURIComponent(url)}`,
  linkedin: (title, text, url) =>
    `https://www.linkedin.com/sharing/share-offsite/?summary=${encodeURIComponent(
      title + " " + text
    )}&url=${encodeURIComponent(url)}`,
  whatsapp: (title, text, url) =>
    `https://api.whatsapp.com/send?text=${encodeURIComponent(
      title + " " + text + " " + url
    )}`,
  mail: (title, text, url) =>
    `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
      text + " " + url
    )}`,
};

const ShareModal = ({ isOpen, onClose, shareData }) => {
  const {
    title,
    text,
    url = typeof window !== "undefined" ? window.location.href : "",
  } = shareData;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${title} ${text} - ${url}`);
    toast({
      title: "Link Copied!",
      description: "You can now paste the text anywhere you like.",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="p-6">
            <DialogHeader>
              <DialogTitle className="text-center">{title}</DialogTitle>
              <DialogDescription className="text-center">
                {text}
              </DialogDescription>
            </DialogHeader>

            <div className="flex gap-4 mt-4 justify-center items-center">
              {/* WhatsApp */}
              <a
                href={socialLinks.whatsapp(title, text, url)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
              >
                <FaWhatsapp className="h-6 w-6 rotate-90" />
                <span className="sr-only">Share on WhatsApp</span>
              </a>

              {/* Twitter */}
              <a
                href={socialLinks.twitter(title, text, url)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500 text-white transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
                <span className="sr-only">Share on Twitter</span>
              </a>

              {/* Facebook */}
              <a
                href={socialLinks.facebook(title, text, url)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
                <span className="sr-only">Share on Facebook</span>
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin(title, text, url)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900 text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">Share on LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href={socialLinks.mail(title, text, url)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Share via Email</span>
              </a>
            </div>

            <div className="mt-4 border-t pt-4">
              <Button
                onClick={handleCopyLink}
                variant="outline"
                className="w-full gap-2"
              >
                <Copy className="h-5 w-5" /> Copy Link
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;
