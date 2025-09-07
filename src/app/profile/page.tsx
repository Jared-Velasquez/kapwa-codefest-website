'use client';
import { useEffect, useState } from 'react';
import InfoForm, { InfoFormProps } from '@/app/components/InfoForm';
import { useAuth } from 'react-oidc-context';
import axios from 'axios';
import { UpdateUserProfile, UserProfile } from '../dto/ResponseDTOs';
import Image from 'next/image';
import { motion } from 'framer-motion';

function SkeletonLine({ className = '' }: { className?: string }) {
    return (
        <div className={`bg-gray-300 animate-pulse rounded-md ${className}`} />
    );
}

function SkeletonInfoForm() {
    return (
        <div className="w-full flex flex-col p-2 items-start text-center">
            <div className="h-5 w-24 mb-2 bg-gray-300 rounded animate-pulse" />

            {/* Input line + right-side icon area */}
            <div className="flex flex-row items-end w-full gap-2">
                <div className="h-10 w-full bg-gray-300 rounded border border-gray-300 animate-pulse" />
            </div>
        </div>
    );
}

// Combine isLoading
function InfoFormWithLoading({
    isLoading,
    ...props
}: { isLoading: boolean } & InfoFormProps) {
    if (isLoading) {
        return <SkeletonInfoForm />;
    }

    return (
        <motion.div
            className="w-full md:flex-1"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
        >
            <InfoForm {...props} />
        </motion.div>
    );
}

export default function ProfileTab() {
    // Use info from the authToken to pre-fill the form. If info is null, use placeholder text.
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        discord_username: '',
        school: '',
        major: '',
        graduation_year: '',
        user_id: '',
        is_registered: false,
    } as UserProfile);
    const [prevProfile, setPrevProfile] = useState({}); // Store previous profile data to compare changes
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = useAuth();
    // const router = useRouter();

    useEffect(() => {
        if (!auth.isLoading && !auth.isAuthenticated) {
            window.location.href = '/'; // Redirect to home if not authenticated
        }
    }, [auth.isLoading, auth.isAuthenticated]);

    useEffect(() => {
        const accessToken = auth.user?.id_token;
        const sub = auth.user?.profile?.sub;
        if (!auth.isAuthenticated || !accessToken || !sub) return;

        const fetchUserProfile = async () => {
            try {
                setIsLoading(true);

                const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/${sub}`;

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        // 'Cache-Control': 'no-cache',
                    },
                });

                // Quick retry; TODO: replace with retry library (e.g. Cockatiel)
                if (response.status !== 200 || !response.data) {
                    console.warn('Retrying fetch user profile...');
                    await new Promise((res) => setTimeout(res, 1000)); // wait 1 second
                    const retryResponse = await axios.get(url, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
                    if (retryResponse.status !== 200 || !retryResponse.data) {
                        throw new Error(
                            'Failed to fetch user profile after retry'
                        );
                    }
                    response.data = retryResponse.data;
                }

                const profileData: UserProfile = {
                    first_name: response.data.first_name || '',
                    last_name: response.data.last_name || '',
                    discord_username: response.data.discord_username || '',
                    school: response.data.school || '',
                    major: response.data.major || '',
                    graduation_year: response.data.graduation_year || '',
                    user_id: response.data.user_id,
                    is_registered: response.data.is_registered || false,
                };
                setProfile(profileData);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserProfile();
    }, [
        auth.isLoading,
        auth.isAuthenticated,
        auth.user?.id_token,
        auth.user?.profile?.sub,
    ]);

    async function updateUserProfile() {
        // Take all the non-empty fields and send them to the backend
        // If a field is null or empty, do not add it to the request body
        const requestBody: UpdateUserProfile = {};
        // Compare current profile with previous profile to see if there are changes
        const keys = [
            'first_name',
            'last_name',
            'discord_username',
            'school',
            'major',
            'graduation_year',
        ] as const;

        keys.forEach((key) => {
            if (
                profile[key] !== (prevProfile as typeof profile)[key] &&
                profile[key] !== ''
            ) {
                requestBody[key] = profile[key];
            }
        });

        // If no fields have changed, do not send a request
        if (Object.keys(requestBody).length === 0) {
            return;
        }

        try {
            const accessToken = auth.user?.id_token;
            const sub = auth.user?.profile?.sub;
            if (!auth.isAuthenticated || !accessToken || !sub) return;
            const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/${sub}`;
            const response = await axios.patch(url, requestBody, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            console.log('Update response:', response);
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    }

    async function onEditClick() {
        // If the user is not editing, set the profile to be editable
        if (!isEditing) {
            setPrevProfile(profile); // Store the current profile data before editing
            setIsEditing(true);
        } else {
            // If the user is editing, save the changes
            updateUserProfile();
            setIsEditing(false);
        }
    }

    function handleFormChange(field: string, value: string) {
        setProfile((prev) => ({ ...prev, [field]: value }));
    }

    return (
        <div className="overflow justify-center bg-gradient-to-b from-[#CFE8EC] to-[#FEA27B]">
            <div className="p-10" />

            <div className="bg-[url(/backgrounds/landing-foreground.png)] bg-no-repeat bg-cover sm:bg-[position:center_top] bg-[position:center_top] -my-[20vh] sm:my-0 p-0 sm:p-[10vh]">
                <h1 className="text-[3rem] text-center font-[Maragsa] text-black mt-[20vh] md:py-[10vh]">
                    Profile
                </h1>
                <div className="flex justify-center p-10">
                    <div
                        className="bg-white/80 w-[80vw] px-[10vw] py-[5vh] md:py-[10vh] rounded-2xl"
                        aria-busy={isLoading}
                    >
                        <div className="flex justify-between">
                            {isLoading ? (
                                <>
                                    <SkeletonLine className="h-8 md:h-10 w-48 md:w-80 my-2 md:my-10" />
                                    <SkeletonLine className="h-10 w-10 rounded-full my-2 md:my-10" />
                                </>
                            ) : (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                    >
                                        <h1 className="text-black text-2xl md:text-4xl py-2 md:py-10">
                                            {profile.first_name}{' '}
                                            {profile.last_name}
                                        </h1>
                                    </motion.div>
                                    <motion.button
                                        onClick={onEditClick}
                                        className="relative inline-flex items-center justify-center cursor-pointer"
                                        aria-label={
                                            isEditing
                                                ? 'Save profile'
                                                : 'Edit profile'
                                        }
                                        title={
                                            isEditing
                                                ? 'Save profile'
                                                : 'Edit profile'
                                        }
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                    >
                                        {isEditing ? (
                                            <div className="bg-gradient-to-r from-[#e9a400] to-[#f9d46c] rounded-[40px] px-[2.5vw] py-[2vh] text-black cursor-pointer shadow-[0_6px_12px_rgba(0,0,0,0.25)] transition-transform duration-200 font-sans flex items-center justify-center no-underline w-fit hover:scale-[1.05] active:scale-[0.95]">
                                                <p className="text-black text-base text-xl">
                                                    Save
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="relative w-12 h-12 md:w-15 md:h-15 rounded-full grid place-items-center">
                                                {/* ring pulse */}
                                                <motion.span
                                                    aria-hidden
                                                    className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[#EDAB1D]"
                                                    initial={{
                                                        scale: 1,
                                                        opacity: 0.8,
                                                    }}
                                                    animate={{
                                                        scale: [1, 1.08, 1],
                                                        opacity: [
                                                            0.8, 0.5, 0.8,
                                                        ],
                                                    }}
                                                    transition={{
                                                        duration: 1.8,
                                                        ease: 'easeInOut',
                                                        repeat: Infinity,
                                                    }}
                                                />
                                                {/* gradient glow */}
                                                <motion.span
                                                    aria-hidden
                                                    className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-[#e9a400] to-[#f9d46c] opacity-60 blur-md"
                                                    initial={{
                                                        scale: 0.95,
                                                        opacity: 0.45,
                                                    }}
                                                    animate={{
                                                        scale: [
                                                            0.95, 1.15, 0.95,
                                                        ],
                                                        opacity: [
                                                            0.45, 0.7, 0.45,
                                                        ],
                                                    }}
                                                    transition={{
                                                        duration: 1.8,
                                                        ease: 'easeInOut',
                                                        repeat: Infinity,
                                                    }}
                                                />
                                                <Image
                                                    src={'/edit-outline.svg'}
                                                    alt="Edit Profile"
                                                    width={20}
                                                    height={20}
                                                    className="w-9 h-9 md:w-12 md:h-12"
                                                />
                                            </div>
                                        )}
                                    </motion.button>
                                </>
                            )}
                        </div>
                        <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] text-black rounded-lg">
                            <div className="flex md:flex-row flex-col gap-2 items-start text-center w-full">
                                <InfoFormWithLoading
                                    isLoading={isLoading}
                                    label="First Name"
                                    formData={profile.first_name}
                                    setFormData={(value) =>
                                        handleFormChange('first_name', value)
                                    }
                                    isEditing={isEditing}
                                    required
                                />
                                <InfoFormWithLoading
                                    isLoading={isLoading}
                                    label="Last Name"
                                    formData={profile.last_name}
                                    setFormData={(value) =>
                                        handleFormChange('last_name', value)
                                    }
                                    isEditing={isEditing}
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-full space-y-2">
                                <InfoFormWithLoading
                                    isLoading={isLoading}
                                    label="Discord"
                                    formData={profile.discord_username}
                                    setFormData={(value) =>
                                        handleFormChange(
                                            'discord_username',
                                            value
                                        )
                                    }
                                    isEditing={isEditing}
                                    required
                                />
                                <InfoFormWithLoading
                                    isLoading={isLoading}
                                    label="School"
                                    formData={profile.school}
                                    setFormData={(value) =>
                                        handleFormChange('school', value)
                                    }
                                    isEditing={isEditing}
                                />
                                <InfoFormWithLoading
                                    isLoading={isLoading}
                                    label="Major"
                                    formData={profile.major}
                                    setFormData={(value) =>
                                        handleFormChange('major', value)
                                    }
                                    isEditing={isEditing}
                                />
                                <InfoFormWithLoading
                                    isLoading={isLoading}
                                    label="Graduation Year"
                                    formData={profile.graduation_year}
                                    setFormData={(value) =>
                                        handleFormChange(
                                            'graduation_year',
                                            value
                                        )
                                    }
                                    isEditing={isEditing}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center flex flex-col h-[100vh]">
                    <h1 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">
                        Give a Helping Hand{' '}
                    </h1>
                    <button
                        onClick={() => {
                            window.location.href = '/';
                        }}
                    >
                        <div className="bg-gradient-to-r from-[#e9a400] to-[#f9d46c] rounded-[40px] md:px-[2vw] md:py-[2vh] px-5 py-5 text-black cursor-pointer shadow-[0_6px_12px_rgba(0,0,0,0.25)] transition-transform duration-200 font-instrument-sans font-medium flex items-center justify-center no-underline w-fit z-10 hover:scale-[1.05] active:scale-[0.95]">
                            <p className="text-black text-base">
                                Register Today!
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
