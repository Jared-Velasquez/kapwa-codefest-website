import axios from "axios";
import HeroHeader from "@/app/components/HeroHeader";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import InteractiveButton from "../components/InteractiveButton";

export default function LandingPage() {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated || !auth.user?.id_token) return;

    const fetchRegistrationData = async () => {
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

        setIsProfileComplete(response.data.is_complete);
        setIsRegistered(response.data.is_registered);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        if (axios.isAxiosError(error)) {
          console.error("Response headers:", error.response?.headers);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRegistrationData();
  }, [auth.isAuthenticated, auth.user?.id_token]);

  // Redirect the user to the profile page via NextJS routing
  function redirectToProfile() {
    window.location.href = "/profile";
  }

  async function registerUserForHackathon() {
    console.log("Registering user for hackathon...");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/register`,
      null, // No body is needed for this endpoint
      {
        headers: {
          Authorization: `Bearer ${auth.user?.id_token}`,
        },
      }
    );

    // TODO: if successful, update the UI to reflect registration status
    console.log("Registration response:", response);
  }

  if (auth.isAuthenticated && !isLoading) {
    return (
      <div className="h-[100vh] sm:h-[100vh] flex justify-center items-center flex-col">
        <HeroHeader />
        {/* Check if user's profile is incomplete */}
        {!isLoading && !isProfileComplete && (
          <>
            <div className="font-[instrument sans] bg-red-300 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <p>Please complete your profile to register!</p>
            </div>
            <InteractiveButton text={"Complete Profile"} onClick={redirectToProfile} isActive={true}/>
          </>
        )}

        {/* If user's profile is complete but not registered, allow the user to register */}
        {!isLoading && isProfileComplete && !isRegistered && (
          <>
            <InteractiveButton text={"Register for Hackathon"} onClick={registerUserForHackathon} isActive={true} />
          </>
        )}

        {/* TODO: if user's profile is complete and registered, show success label */}
      </div>
    );
  }

  return (
    <div className="h-[100vh] sm:h-[100vh] flex justify-center items-center flex-col">
      <HeroHeader />
      {/* Button to redirect the user to login */}
      <InteractiveButton text={"Register Today!"} onClick={() => auth.signinRedirect()} isActive={true} />
    </div>
  );
}