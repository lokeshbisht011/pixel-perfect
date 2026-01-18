"use client";

import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "next/navigation";

import ProfileHeaderSection from "@/components/profile/ProfileHeaderSection";
import ProfilePixelArtsSection from "@/components/profile/ProfilePixelArtsSection";
import ProfileBadgesSection from "@/components/profile/ProfileBadgesSection";
import ProfileLikedSection from "@/components/profile/ProfileLikedSection";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const { username } = useParams();
  const [currentUserProfile, setCurrentUserProfile] = useState(null);

  useEffect(() => {
    const load = async () => {
      const fetchProfile = await fetch("/api/profile/user")
      const profileData = fetchProfile.ok ? await fetchProfile.json() : null;

      setCurrentUserProfile(profileData);
    };

    load();
  }, [username]);

  return (
    <Layout>
      <div className="container py-6">
        <ProfileHeaderSection username={username} />

        <Tabs defaultValue="pixelArts" className="mt-8">
          <TabsList>
            <TabsTrigger value="pixelArts">Pixel Arts</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="liked">Liked</TabsTrigger>
          </TabsList>

          <TabsContent value="pixelArts">
            <ProfilePixelArtsSection username={username} currentUserProfile={currentUserProfile} />
          </TabsContent>

          <TabsContent value="badges">
            <ProfileBadgesSection />
          </TabsContent>

          <TabsContent value="liked">
            <ProfileLikedSection username={username} />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
