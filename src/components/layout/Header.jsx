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
      className="sticky top-0 z-40 w-full p-6 bg-background/80 backdrop-blur-sm"
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
              <span className="text-pixel-neon-cyan">A</span>
              <span className="text-pixel-neon-pink">Pixel</span>
              <span className="text-pixel-neon-green">A</span>
              <span className="text-pixel-neon-yellow">Day</span>
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
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="relative hidden md:flex">
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
                      <AvatarImage src={session.user.image || ""} alt={session.user.name || "User"} />
                      <AvatarFallback>{session.user?.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </Link>
              <Button variant="ghost" onClick={() => signOut()} className="hidden md:flex">
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
            <Button variant="ghost" size="sm">
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={loginModal.isOpen}
        onClose={handleCloseModal}
        initialMode={loginModal.mode}
      />
    </motion.header>
  );
};

export default Header;