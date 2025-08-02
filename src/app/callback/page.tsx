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
    <div className="overflow-hidden justify-center bg-gradient-to-b from-[#CFE8EC] to-[#FEA27B] h-screen">
      <div className="bg-[url(/backgrounds/landing-foreground.png)] bg-no-repeat bg-cover sm:bg-[position:center_top] bg-[position:center_top] -my-[30vh] sm:my-0">
        {/* No content here */}
      </div>  
    </div>
  );
}
