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

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 w-full p-4 bg-background/80 backdrop-blur-sm"
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-pixel-neon-pink" />
            <h1 className="text-2xl font-bold font-mono">
              <span className="text-pixel-neon-cyan">Pixel</span>
              <span className="text-pixel-neon-pink">Art</span>
              <span className="text-pixel-neon-green">Daily</span>
            </h1>
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center gap-6">
          <motion.a
            href="/"
            className="text-foreground hover:text-pixel-neon-cyan transition-colors font-mono"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Today's Prompt
          </motion.a>
          <motion.a
            href="/gallery"
            className="text-foreground hover:text-pixel-neon-pink transition-colors font-mono"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Gallery
          </motion.a>
          <motion.a
            href="/create"
            className="text-foreground hover:text-pixel-neon-green transition-colors font-mono"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Create
          </motion.a>
          <motion.a
            href="/leaderboard"
            className="text-foreground hover:text-pixel-neon-yellow transition-colors font-mono"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Leaderboard
          </motion.a>

          <motion.a
            href="/blog"
            className="text-foreground hover:text-pixel-neon-cyan transition-colors font-mono"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Blog
          </motion.a>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {isLoggedIn ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="relative hidden md:flex"
              >
                <Bell className="h-5 w-5 text-pixel-neon-cyan" />
                <span className="absolute top-0 right-0 flex h-2 w-2 rounded-full bg-destructive"></span>
              </Button>
              <Link href={`/${profile?.username || ""}`}>
                <div className="h-10 w-10 cursor-pointer rounded-full overflow-hidden border-2 border-primary transition-all hover:scale-110">
                  {profile?.avatarConfig ? (
                    <BoringAvatar
                      size={40}
                      name={profile.avatarConfig.seed}
                      variant={profile.avatarConfig.variant}
                      colors={profile.avatarConfig.colors}
                    />
                  ) : (
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={session.user.image || ""}
                        alt={session.user.name || "User"}
                      />
                      <AvatarFallback>
                        {session.user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </Link>
              <Button
                variant="ghost"
                onClick={() => signOut()}
                className="hidden md:flex"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="neon"
                size="sm"
                className="text-xs md:text-sm px-2 md:px-4 hidden md:flex"
                onClick={handleLoginClick}
              >
                Log in
              </Button>
              <Button
                variant="pixel"
                size="sm"
                className="text-xs md:text-sm px-2 md:px-4 hidden md:flex"
                onClick={handleSignupClick}
              >
                Sign up
              </Button>
            </>
          )}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
              </div>
            </Button>
          </div>
        </div>
      </nav>

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
