import axios from 'axios';
import HeroHeader from '@/app/components/HeroHeader';
import { useEffect, useMemo, useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { motion } from 'framer-motion';

const MIN_DELAY_MS = 500;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
type UIState = 'loading' | 'profileIncomplete' | 'canRegister' | 'doneOrGuest';

export default function LandingPage() {
    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isProfileComplete, setIsProfileComplete] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        if (
            !auth.isAuthenticated ||
            !auth.user?.id_token ||
            !auth.user?.profile?.sub
        )
            return;

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
                    sleep(MIN_DELAY_MS),
                ]);

                setIsProfileComplete(res.data.is_complete);
                setIsRegistered(res.data.is_registered);
            } catch (error) {
                // Fall back to prompt profile completion if error occurs
                console.error('Error fetching user profile:', error);
                setIsProfileComplete(false);
                setIsRegistered(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRegistrationData();
    }, [auth.isAuthenticated, auth.user?.id_token, auth.user?.profile?.sub]);


    return (
        <div className="h-[100vh] sm:h-[100vh] flex justify-center items-center flex-col">
            <HeroHeader />

            <motion.div
                key="registrationClosed"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mt-6 w-full flex flex-col items-center"
            >
            <div className="text-center font-sans text-black px-10 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl mx-5 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-xl">
                <div className="pt-6 pb-6">
                <p className="font-semibold text-2xl">Registration Closed</p>
                <p className="mt-2 text-base">
                    Thanks for your interest! Registration for Kapwa Codefest 2025 is now closed.
                </p>
                <p className="mt-1 text-base">
                    If you already registered, please check your email for details.
                </p>
                </div>
            </div>
            </motion.div>
        </div>
    );
}
