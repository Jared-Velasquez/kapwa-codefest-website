"use client";
import {useEffect, useState} from "react";
import InfoForm from "@/app/components/InfoForm";
import InteractiveButton from "@/app/components/InteractiveButton";
import { useAuth } from "react-oidc-context";
import axios from "axios";
import { UserProfile } from "../dto/ResponseDTOs";

export default function ProfileTab({ authToken , isSignedIn}: { authToken : string, isSignedIn: boolean}) {
    // Use info from the authToken to pre-fill the form. If info is null, use placeholder text.
    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        discord_username: "",
        school: "",
        major: "",
        graduation_year: "",
        user_id: "",
        is_registered: false,
    } as UserProfile);
    const [prevProfile, setPrevProfile] = useState({}); // Store previous profile data to compare changes
    const [isEditing, setIsEditing] = useState(false);
    const [buttonColor, setButtonColor] = useState("bg-gradient-to-r from-[#e9a400] to-[#f9d46c]");
    const [isLoading, setIsLoading] = useState(true);

    const auth = useAuth();
    // const router = useRouter();

    console.log("Profile page");

    useEffect(() => {
        if (!auth.isLoading && !auth.isAuthenticated) {
            window.location.href = "/"; // Redirect to home if not authenticated
        }
    }, [auth.isLoading, auth.isAuthenticated]);

    useEffect(() => {
        if (!auth.isAuthenticated || !auth.user?.id_token) return;

        const fetchUserProfile = async () => {
            try {
                console.log(
                    "Invoking endpoint",
                    `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/${auth.user?.profile?.sub}`
                );

                setIsLoading(true);

                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/${auth.user?.profile?.sub}`,
                    {
                        headers: {
                            Authorization: `Bearer ${auth.user?.id_token}`,
                        },
                    }
                );

                console.log("Get response:", response.data);
                const profileData: UserProfile = {
                    first_name: response.data.first_name || "",
                    last_name: response.data.last_name || "",
                    discord_username: response.data.discord_username || "",
                    school: response.data.school || "",
                    major: response.data.major || "",
                    graduation_year: response.data.graduation_year || "",
                    user_id: response.data.user_id,
                    is_registered: response.data.is_registered || false,
                }
                setIsLoading(false);

                // response:
                // {
                //     "user_id": "4909894e-a0f1-70a8-2f9f-3e5d07b4ef89",
                //     "first_name": "Jared",
                //     "last_name": "Velasquez",
                //     "email": "jaredvel25@ucla.edu",
                //     "discord_username": "jvel.",
                //     "school": "University of California, Los Angeles",
                //     "graduation_year": null,
                //     "major": null,
                //     "linkedin": "https://www.linkedin.com/in/jaredvel25/",
                //     "is_registered": true
                // }

                setProfile(profileData);
            } catch (error) {

            }
        }

        fetchUserProfile();
    }, [auth.isLoading, auth.isAuthenticated, auth.user?.id_token]);

    async function updateUserProfile() {
        console.log("Updating user profile...");

        // Take all the non-empty fields and send them to the backend
        // If a field is null or empty, do not add it to the request body
        const requestBody: any = {};
        // Compare current profile with previous profile to see if there are changes
        const keys = [
            "first_name",
            "last_name",
            "discord_username",
            "school",
            "major",
            "graduation_year"
        ] as const;

        keys.forEach((key) => {
            if (profile[key] !== (prevProfile as typeof profile)[key] && profile[key] !== "") {
                requestBody[key] = profile[key];
            }
        });

        // If no fields have changed, do not send a request
        if (Object.keys(requestBody).length === 0) {
            console.log("No changes detected, not sending update request.");
            return;
        }

        console.log("Patch request body:", requestBody);

        try {
            const response = await axios.patch(
                `${process.env.NEXT_PUBLIC_API_GATEWAY_INVOKE_URL}/users/${auth.user?.profile?.sub}`,
                requestBody,
                {
                    headers: {
                        Authorization: `Bearer ${auth.user?.id_token}`,
                    },
                }
            );

            console.log("Update response:", response);
        } catch (error) {
            console.error("Error updating user profile:", error);
        }
    }

    async function onEditClick() {
        // If the user is not editing, set the profile to be editable
        if (!isEditing) {
            setPrevProfile(profile); // Store the current profile data before editing
            setIsEditing(true);
            setButtonColor("bg-gradient-to-r from-[#e9a400] to-[#f9d46c]");
        } else {
            // If the user is editing, save the changes
            updateUserProfile();
            setIsEditing(false);
            setButtonColor("bg-gradient-to-r from-[#4caf50] to-[#81c784]");
        }
    }

    function handleFormChange(field: string, value: string) {
        setProfile((prev) => ({ ...prev, [field]: value }));
    }

    return (
        <div className="overflow justify-center bg-gradient-to-b from-[#CFE8EC] to-[#FEA27B]">
            <div className="p-10"/>

            <div className="bg-[url(/backgrounds/landing-foreground.png)] bg-no-repeat bg-cover sm:bg-[position:center_top] bg-[position:center_top] -my-[20vh] sm:my-[] p-[vh] sm:p-[10vh]">
                <div className="flex flex-col justify-center items-center p-4">
                    <div className="shadow-[4px_4px_9px_rgba(0,0,0,0.5)] p-3 flex flex-col gap-1 items-center justify-center min-h-[50vh] sm:min-h-[60vh] w-fit lg:w-fit bg-[rgb(255,255,255,0.9)] text-black rounded-lg mt-20">
                        <div className="ml-auto"> 
                            <button
                            onClick={onEditClick}
                            className="bg-gradient-to-r from-[#e5e5e5] to-[#e5e5e5] rounded-[15px] px-[15px] py-[1vh] text-black cursor-pointer shadow-[0_6px_12px_rgba(0,0,0,0.25)] transition-transform duration-200 font-instrument-sans flex items-center justify-center no-underline w-fit z-10 hover:scale-[1.05] active:scale-[0.95]] w-[20vw] absolute translate-x-[-100%] translate-y-[-100%]"
                            >
                                <p className="text-black text-base">✍️</p>
                            </button>   
                        </div>
                        <h3 className="text-[2rem] font-[Maragsa] py-3 text-center">Registration</h3>
                        <div className="flex flex-row gap-2 p-0 items-start text-center ">
                            <InfoForm label="First Name" formData={profile.first_name} setFormData={(value) => handleFormChange("first_name", value)} isEditing={isEditing}/>
                            <InfoForm label="Last Name" formData={profile.last_name} setFormData={(value) => handleFormChange("last_name", value)} isEditing={isEditing}/>
                        </div>
                        <InfoForm label="Discord" formData={profile.discord_username} setFormData={(value) => handleFormChange("discord_username", value)} isEditing={isEditing}/>
                        <InfoForm label="School" formData={profile.school} setFormData={(value) => handleFormChange("school", value)} isEditing={isEditing}/>
                        <InfoForm label="Major" formData={profile.major} setFormData={(value) => handleFormChange("major", value)} isEditing={isEditing}/>
                        <InfoForm label="Graduation Year" formData={profile.graduation_year} setFormData={(value) => handleFormChange("graduation_year", value)} isEditing={isEditing}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

