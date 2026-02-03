import Link from "next/link";
import { Bell, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotificationDropdown from "../notifications/NotificationDropdown";
import { PixelMenuIcon } from "./PixelMenuIcon";
import BoringAvatar from "boring-avatars";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const MobileHeader = ({
  profile,
  session,
  notifications,
  unreadCount,
  notificationsOpen,
  setNotificationsOpen,
  setMobileMenuOpen,
  markAllRead,
}) => {
  return (
    <nav className="md:hidden flex items-center justify-between">
      {/* Left */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileMenuOpen(true)}
      >
        <PixelMenuIcon />
      </Button>

      {/* Center */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Pixel Art Daily Logo"
          width={32}
          height={32}
          className="pixelated"
          priority
        />
        <span className="font-mono font-bold text-lg">
          <span className="text-pixel-neon-cyan">Pixel</span>
          <span className="text-pixel-neon-pink">Art</span>
          <span className="text-pixel-neon-green">Daily</span>
        </span>
      </Link>

      {/* Right */}
      <div className="flex items-center gap-2">
        <div className="relative hidden">
          {/* TODO implement notifications */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setNotificationsOpen((p) => !p)}
          >
            <Bell className="h-5 w-5 text-pixel-neon-cyan" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
            )}
          </Button>

          {notificationsOpen && (
            <NotificationDropdown
              notifications={notifications}
              onMarkAllRead={markAllRead}
              align="right"
            />
          )}
        </div>

        <Link href={`/${profile?.username}`}>
          <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-primary">
            {profile?.avatarConfig ? (
              <BoringAvatar
                size={36}
                name={profile.avatarConfig.seed}
                variant={profile.avatarConfig.variant}
                colors={profile.avatarConfig.colors}
              />
            ) : (
              <Avatar className="h-9 w-9">
                <AvatarImage src={session?.user?.image || ""} />
                <AvatarFallback>
                  {session?.user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default MobileHeader;
