// app/auth/Callback.tsx
"use client";

import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation";

export default function Callback() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    // when the AuthProvider has processed the callback,
    // isAuthenticated will go from false → true
    if (!auth.isLoading && auth.isAuthenticated) {
      router.replace("/");
    }
  }, [auth.isLoading, auth.isAuthenticated, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Completing sign-in…</p>
    </div>
  );
}
