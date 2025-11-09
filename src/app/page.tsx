"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function Home() {
  const router = useRouter();
  const { accessToken, _hasHydrated } = useAuthStore();

  useEffect(() => {
    if (!_hasHydrated) return;

    if (accessToken) {
      router.push("/dashboard");
    } else {
      router.push("/signup");
    }
  }, [accessToken, _hasHydrated, router]);

  // Show loading while checking auth state
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F0F8]">
      <div className="text-xl text-[#704180]">Loading...</div>
    </div>
  );
}
