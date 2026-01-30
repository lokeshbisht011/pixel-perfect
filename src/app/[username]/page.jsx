"use client";

import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "next/navigation";

import ProfileHeaderSection from "@/components/profile/ProfileHeaderSection";
import ProfilePixelArtsSection from "@/components/profile/ProfilePixelArtsSection";
import ProfileBadgesSection from "@/components/profile/ProfileBadgesSection";
import ProfileLikedSection from "@/components/profile/ProfileLikedSection";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { username } = useParams();
  const [currentUserProfile, setCurrentUserProfile] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/profile/user");

      if (res.status === 404) {
        router.replace("/404");
        return;
      }

      if (!res.ok) {
        console.error("Failed to load profile");
        return;
      }
      const profileData =  await res.json()

      setCurrentUserProfile(profileData);
    };

    load();
  }, [username]);

  return (
    
      <div className="md:container md:py-6 px-4 py-4">
        <ProfileHeaderSection username={username} />

        <Tabs defaultValue="pixelArts" className="mt-4 ">
          <TabsList>
            <TabsTrigger value="pixelArts">Pixel Arts</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="liked">Liked</TabsTrigger>
          </TabsList>

          <TabsContent value="pixelArts">
            <ProfilePixelArtsSection
              username={username}
              currentUserProfile={currentUserProfile}
            />
          </TabsContent>

          <TabsContent value="badges">
            <ProfileBadgesSection />
          </TabsContent>

          <TabsContent value="liked">
            <ProfileLikedSection username={username} />
          </TabsContent>
        </Tabs>
      </div>
    
  );
}
