"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, MessageCircle, Users } from "lucide-react";
import BoringAvatar from "boring-avatars";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

import ProfileSetupModal from "../ProfileModal";

export default function ProfileHeaderSection({ username }) {
  const router = useRouter();

  const [profile, setProfile] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const [isFollowing, setIsFollowing] = useState(false);
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const [profileRes, meRes] = await Promise.all([
          fetch(`/api/profile/${username}/header`),
          fetch("/api/profile/user"),
        ]);

        if (profileRes.status === 404) {
          router.replace("/404");
          return;
        }

        const profileData = await profileRes.json();
        const meData = meRes.ok ? await meRes.json() : null;

        setProfile(profileData);
        setFollowers(profileData.followers || []);
        setFollowing(profileData.following || []);

        setCurrentUser(meData);
        setIsCurrentUser(meData?.username === username);

        if (meData) {
          setIsFollowing(
            profileData.followers?.some((f) => f.followerId === meData.id)
          );
        }
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [username, router]);

  const handleFollow = async () => {
    if (!currentUser) {
      toast.error("You must be logged in to follow users.");
      return;
    }

    const prev = isFollowing;
    setActionLoading(true);
    setIsFollowing(!prev);

    setFollowers((f) =>
      prev
        ? f.filter((x) => x.followerId !== currentUser.id)
        : [...f, { followerId: currentUser.id, follower: currentUser }]
    );

    try {
      const res = await fetch(`/api/profile/${profile.username}/follow`, {
        method: prev ? "DELETE" : "POST",
      });

      if (!res.ok) throw new Error();
      toast.success(prev ? "Unfollowed" : "Followed");
    } catch {
      setIsFollowing(prev);
      setFollowers((f) =>
        prev
          ? [...f, { followerId: currentUser.id, follower: currentUser }]
          : f.filter((x) => x.followerId !== currentUser.id)
      );
      toast.error("Something went wrong.");
    } finally {
      setActionLoading(false);
    }
  };

  const renderUserList = (list, type) =>
    list.map((item) => {
      const user = type === "followers" ? item.follower : item.following;

      if (!user) return null;

      return (
        <Link
          key={user.username}
          href={`/${user.username}`}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted"
        >
          <BoringAvatar size={32} name={user.username} variant="beam" />
          <span className="font-medium">{user.username}</span>
        </Link>
      );
    });

  /* ------------------ SKELETON ------------------ */
  if (loading) {
    return (
      <div className="bg-card p-4 md:p-6 rounded-xl shadow-sm">
        {/* ---------------- Desktop Skeleton ---------------- */}
        <div className="hidden md:flex gap-6 items-start">
          {/* Avatar */}
          <Skeleton className="h-24 w-24 rounded-full" />

          {/* Content */}
          <div className="flex-1 space-y-4">
            {/* Username */}
            <Skeleton className="h-6 w-48" />

            {/* Bio */}
            <Skeleton className="h-4 w-[60%]" />
            <Skeleton className="h-4 w-[40%]" />

            {/* Meta row */}
            <div className="flex gap-4 mt-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-28" />
            </div>

            {/* Followers / Following */}
            <div className="flex gap-6 mt-4">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-24" />
            </div>

            {/* Streak badge */}
            <Skeleton className="h-6 w-40 rounded-full mt-2" />
          </div>

          {/* Action button */}
          <Skeleton className="h-10 w-28 rounded-md" />
        </div>

        {/* ---------------- Mobile Skeleton ---------------- */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          {/* Avatar */}
          <Skeleton className="h-24 w-24 rounded-full" />

          {/* Username */}
          <Skeleton className="h-6 w-40" />

          {/* Bio */}
          {/* <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[60%]" /> */}

          {/* Meta */}
          <div className="flex flex-wrap justify-center gap-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
          </div>

          {/* Followers / Following */}
          {/* <div className="flex gap-6">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
          </div> */}

          {/* Streak */}
          <Skeleton className="h-6 w-36 rounded-full" />

          {/* Button */}
          <Skeleton className="h-10 w-32 rounded-md mt-2" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card p-4 md:p-6 rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {profile?.avatarConfig ? (
          <BoringAvatar
            size={96}
            name={profile.avatarConfig.seed}
            variant={profile.avatarConfig.variant}
            colors={profile.avatarConfig.colors}
          />
        ) : (
          <Avatar className="h-24 w-24">
            <AvatarImage alt={profile.username || "User"} />
            <AvatarFallback className="text-4xl">
              {profile.username?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        )}

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold">{profile.username}</h1>
          <p className="text-muted-foreground mt-2 max-w-md">
            {profile.bio || "No bio yet"}
          </p>

          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>
                Joined {new Date(profile.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                {profile.pixelArtsCount || 0}{" "}
                {profile.pixelArtsCount === 1 ? "pixel art" : "pixel arts"}
              </span>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MessageCircle className="h-4 w-4" />
              <span>{profile.commentsCount || 0} comments</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <Button
              variant="ghost"
              className="text-sm p-0 h-auto"
              onClick={() => setShowFollowersModal(true)}
            >
              <span className="font-bold">{followers.length}</span> Followers
            </Button>
            <Button
              variant="ghost"
              className="text-sm p-0 h-auto"
              onClick={() => setShowFollowingModal(true)}
            >
              <span className="font-bold">{following.length}</span> Following
            </Button>
          </div>

          {profile.currentStreak > 0 && (
            <Badge className="mt-3 bg-gradient-to-r from-orange-400 to-red-500">
              🔥 {profile.currentStreak}{" "}
              {profile.currentStreak === 1 ? "day" : "days"} streak
            </Badge>
          )}
        </div>

        {isCurrentUser ? (
          <Button variant="outline" onClick={() => setShowProfileModal(true)}>
            Edit Profile
          </Button>
        ) : (
          <Button
            onClick={handleFollow}
            disabled={actionLoading}
            variant={isFollowing ? "secondary" : "default"}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )}
      </div>

      <ProfileSetupModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        profile={profile}
      />

      <Dialog open={showFollowersModal} onOpenChange={setShowFollowersModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Followers</DialogTitle>
          </DialogHeader>
          {renderUserList(followers, "followers")}
        </DialogContent>
      </Dialog>

      <Dialog open={showFollowingModal} onOpenChange={setShowFollowingModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Following</DialogTitle>
          </DialogHeader>
          {renderUserList(following, "following")}
        </DialogContent>
      </Dialog>
    </div>
  );
}
