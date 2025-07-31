"use client";
import { useRouter } from "next/navigation";
import { UserManager } from "oidc-client-ts";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { COGNITO_AUTH_CONFIG } from "@/app/auth/CognitoProvider";

const userManager = new UserManager(COGNITO_AUTH_CONFIG);

export default function Callback() {

    // Need hasMounted to ensure the component has mounted before using router
    const [hasMounted, setHasMounted] = useState(false);
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted) return;
        userManager.signinRedirectCallback().then(() => {
            console.log("User signed in successfully");
            auth.signinSilent(); // Optionally, you can call signinSilent to refresh the user session
            router.replace("/");
        }).catch((error) => {
            console.error("Error during sign-in callback:", error);
        });
    }, [hasMounted]);

    return (
        <div className="overflow-hidden justify-center bg-gradient-to-b from-[#CFE8EC] to-[#FEA27B] h-screen">
            <div className="bg-[url(/backgrounds/landing-foreground.png)] bg-no-repeat bg-cover sm:bg-[position:center_top] bg-[position:center_top] -my-[30vh] sm:my-0">
                {/* No content here */}
            </div>
        </div>

    )
}