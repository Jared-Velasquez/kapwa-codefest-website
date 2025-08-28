import axios from "axios";
import HeroHeader from "@/app/components/HeroHeader";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "react-oidc-context";
import InteractiveButton from "../components/InteractiveButton";
import { AnimatePresence, motion } from "framer-motion";

const MIN_DELAY_MS = 500;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
type UIState = "loading" | "profileIncomplete" | "canRegister" | "doneOrGuest";

export default function LandingPage() {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const uiState: UIState = useMemo(() => {
    if (!auth.isAuthenticated) return "doneOrGuest";
    if (isLoading) return "loading";
    if (!isProfileComplete) return "profileIncomplete";
    if (isProfileComplete && !isRegistered) return "canRegister";
    return "doneOrGuest";
  }, [auth.isAuthenticated, isLoading, isProfileComplete, isRegistered]);

  useEffect(() => {
    if (!auth.isAuthenticated || !auth.user?.id_token || !auth.user?.profile?.sub) return;

    const fetchRegistrationData = async () => {
      setIsLoading(true);
      try {
        const [res] = await Promise.all([
          axios.get(
            `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/${auth.user?.profile?.sub}/check-registration`,
            {
              headers: {
                Authorization: `Bearer ${auth.user?.id_token}`,
              },
            }
          ),
          sleep(MIN_DELAY_MS)
        ]);

        console.log("Get response:", res.data.is_complete, res.data.is_registered);
        setIsProfileComplete(res.data.is_complete);
        setIsRegistered(res.data.is_registered);
      } catch (error) {
        // Fall back to prompt profile completion if error occurs
        console.error("Error fetching user profile:", error);
        setIsProfileComplete(false);
        setIsRegistered(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRegistrationData();
  }, [auth.isAuthenticated, auth.user?.id_token, auth.user?.profile?.sub]);

  // Redirect the user to the profile page via NextJS routing
  function redirectToProfile() {
    window.location.href = "/profile";
  }

  async function registerUserForHackathon() {
    setIsLoading(true);
    console.log("Registering user for hackathon...");

    try {
      await Promise.all([
        axios.post(
          `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/register`,
          null, // No body is needed for this endpoint
          {
            headers: {
              Authorization: `Bearer ${auth.user?.id_token}`,
            },
          }
        ),
        sleep(MIN_DELAY_MS)
      ]);
      setIsRegistered(true);
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setIsLoading(false);
    }

    console.log("User registered successfully");
  }

  return (
    <div className="h-[100vh] sm:h-[100vh] flex justify-center items-center flex-col">
      <HeroHeader />

      <AnimatePresence mode="wait">
        {/* User is unauthenticated */}
        {!auth.isAuthenticated && (
          <motion.div
            key="unauthenticated"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-6"
          >
            <InteractiveButton text={"Register Today!"} onClick={() => auth.signinRedirect()} isActive={true} />
          </motion.div>
        )}

        {/* Loading skeleton */}
        {auth.isAuthenticated && uiState === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            aria-busy="true"
            className="mt-6 w-full flex flex-col items-center"
          >
            <div className="font-sans p-10 bg-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-xl animate-pulse">
              <p>Checking your hackathon status...</p>
            </div>
          </motion.div>
        )}

        {/* User needs to complete profile */}
        {auth.isAuthenticated && uiState === "profileIncomplete" && (
          <motion.div
            key="profileIncomplete"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-6 flex flex-col items-center gap-3"
          >
            <div className="font-sans bg-red-300 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <p>Please complete your profile to register!</p>
            </div>
            <InteractiveButton text={"Complete Profile"} onClick={redirectToProfile} isActive={true}/>
          </motion.div>
        )}

        {/* User can register */}
        {auth.isAuthenticated && uiState === "canRegister" && (
          <motion.div
            key="canRegister"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-6"
          >
            <InteractiveButton text={"Register for Kapwa Codefest!"} onClick={registerUserForHackathon} isActive={true}/>
          </motion.div>
        )}

        {/* User is already registered */}
        {auth.isAuthenticated && uiState === "doneOrGuest" && isProfileComplete && isRegistered && (
          <motion.div
            key="doneOrGuest"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-6"
          >
            <div className="font-sans bg-gradient-to-r from-[#e9a400] to-[#f9d46c] p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-xl">
              <p>Thank you for signing up for Kapwa Codefest!</p>
              <p>A confirmation email has been sent to {auth.user?.profile.email}.</p>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}