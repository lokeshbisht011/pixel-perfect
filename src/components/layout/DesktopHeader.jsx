import Link from "next/link";
import { Bell, LogOut, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotificationDropdown from "../notifications/NotificationDropdown";
import BoringAvatar from "boring-avatars";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const DesktopHeader = ({
  profile,
  session,
  notifications,
  unreadCount,
  notificationsOpen,
  setNotificationsOpen,
  markAllRead,
  signOut,
  handleLoginClick,
  handleSignupClick,
  handleCloseModal,
}) => {
  return (
    <nav className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Pixel Art Daily Logo"
          width={34}
          height={34}
          className="pixelated"
          priority
        />

        <h1 className="text-xl font-bold font-mono">
          <span className="text-pixel-neon-cyan">Pixel</span>
          <span className="text-pixel-neon-pink">Art</span>
          <span className="text-pixel-neon-green">Daily</span>
        </h1>
      </Link>

      {/* Nav */}
      <div className="flex items-center gap-6 font-mono">
        <Link href="/">Today's Prompt</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/create">Create</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/blog">Blog</Link>
      </div>

      {/* Actions */}
      {/* Actions */}
      <div className="flex items-center gap-3 font-mono">
        {session ? (
          <>
            {/* Notifications (future) */}
            <div className="relative hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setNotificationsOpen((p) => !p)}
              >
                <Bell className="h-5 w-5 text-pixel-neon-pink" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
                )}
              </Button>

              {notificationsOpen && (
                <NotificationDropdown
                  notifications={notifications}
                  onMarkAllRead={markAllRead}
                />
              )}
            </div>

            {/* Avatar */}
            <Link href={`/${profile?.username}`}>
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
                <BoringAvatar
                  size={40}
                  name={profile?.avatarConfig?.seed || ""}
                  variant={profile?.avatarConfig?.variant || "beam"}
                  colors={profile?.avatarConfig?.colors || ["#00E5FF"]}
                />
              </div>
            </Link>

            {/* Logout */}
            <Button variant="ghost" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-1" />
              Log out
            </Button>
          </>
        ) : (
          <>
            {/* Login */}

            <Button variant="ghost" onClick={handleLoginClick}>
              Log in
            </Button>

            {/* Signup */}

            <Button variant="neon" onClick={handleSignupClick}>
              Sign up
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default DesktopHeader;
