"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CancelPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F0F8]">
      <div className="text-xl text-[#704180]">Redirecting to dashboard...</div>
    </div>
  );
}
