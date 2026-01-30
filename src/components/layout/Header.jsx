"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gamepad2, Palette, Monitor, Bell, LogOut } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import LoginModal from "../LoginModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BoringAvatar from "boring-avatars";
import { useNotifications } from "@/hooks/useNotifications";
import NotificationDropdown from "../notifications/NotificationDropdown";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = ({ profile }) => {
  const { data: session } = useSession();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [loginModal, setLoginModal] = useState({
    isOpen: false,
    mode: "signin",
  });

  const isLoggedIn = !!session?.user;

  const handleLoginClick = () => {
    setLoginModal({ isOpen: true, mode: "signin" });
  };

  const handleSignupClick = () => {
    setLoginModal({ isOpen: true, mode: "signup" });
  };

  const handleCloseModal = () => {
    setLoginModal({ ...loginModal, isOpen: false });
  };

  const { notifications, unreadCount, markAllRead } = useNotifications();

  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const sharedProps = {
    session,
    profile,
    notifications,
    unreadCount,
    notificationsOpen,
    setNotificationsOpen,
    setMobileMenuOpen,
    markAllRead,
    signOut,
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 w-full md:p-4 p-2 bg-background/80 backdrop-blur-sm"
    >
      <DesktopHeader {...sharedProps} />
      <MobileHeader {...sharedProps} />

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="
  lg:hidden
  absolute
  top-full
  right-0
  left-0
  z-50
  rounded-lg
  border border-border
  bg-background
  shadow-lg
  overflow-hidden
"
          >
            <div className="flex flex-col divide-y divide-border font-mono">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted"
              >
                Today’s Prompt
              </Link>

              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted"
              >
                Gallery
              </Link>

              <Link
                href="/create"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted"
              >
                Create
              </Link>

              <Link
                href="/leaderboard"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted"
              >
                Leaderboard
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted"
              >
                Blog
              </Link>

              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut();
                  }}
                  className="px-4 py-3 text-left hover:bg-muted"
                >
                  Log out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLoginClick();
                    }}
                    className="px-4 py-3 text-left hover:bg-muted"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleSignupClick();
                    }}
                    className="px-4 py-3 text-left hover:bg-muted"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}

      <LoginModal
        isOpen={loginModal.isOpen}
        onClose={handleCloseModal}
        initialMode={loginModal.mode}
      />
    </motion.header>
  );
};

export default Header;
