import axios from "axios";
import Button from "@/app/components/Button";
import HeroHeader from "@/app/components/HeroHeader";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";

export default function LandingPage() {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated || !auth.user?.id_token) return;

    const fetchUserProfile = async () => {
      try {
        console.log(
          "Invoking endpoint",
          `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/${auth.user?.profile?.sub}/check-registration`
        );
        setIsLoading(true);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/${auth.user?.profile?.sub}/check-registration`,
          {
            headers: {
              Authorization: `Bearer ${auth.user?.id_token}`,
            },
          }
        );

        console.log("Get response:", response);

        // setIsProfileComplete(response.data.is_registered);
        // setIsRegistered(response.data.is_complete);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        if (axios.isAxiosError(error)) {
          console.error("Response headers:", error.response?.headers);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [auth.isAuthenticated, auth.user?.access_token]);

  if (auth.isAuthenticated) {
    return (
      <div className="h-[100vh] sm:h-[100vh] flex justify-center items-center flex-col">
        <HeroHeader />
        <p>Authenticated!!!</p>
      </div>
    );
  }

  return (
    <div className="h-[100vh] sm:h-[100vh] flex justify-center items-center flex-col">
      <HeroHeader />
      <Button text={"Sign Up"} onClick={"#SignUp"} />
    </div>
  );
}
