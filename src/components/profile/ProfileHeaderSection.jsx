"use client";

import { useEffect, useState } from "react";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { useRouter } from "next/navigation";

export default function ProfileHeaderSection({ username }) {
  const [profile, setProfile] = useState(null);
  const [currentUserProfile, setCurrentUserProfile] = useState(null);
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const load = async () => {
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
      setCurrentUserProfile(meData);
      setIsCurrentUser(meData?.username === username);
    };

    load();
  }, [username]);

  if (!profile) return null;

  return (
    <ProfileHeader
      profile={profile}
      isCurrentUser={isCurrentUser}
      currentUserProfile={currentUserProfile}
      followersCount={profile._count.followers}
      followingCount={profile._count.following}
      followers={[]}
      following={[]}
    />
  );
}
