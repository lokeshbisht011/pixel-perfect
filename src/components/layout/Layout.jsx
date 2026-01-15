'use client'

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import Header from "./Header";

const Layout = ({ children }) => {
  const { data: session } = useSession();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      if (session?.user) {
        try {
          const response = await fetch("/api/profile/user");
          if (response.ok) {
            const data = await response.json();
            setProfile(data);
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    }
    fetchProfile();
  }, [session]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header profile={profile} />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
