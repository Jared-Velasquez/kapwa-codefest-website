"use client";
import {useEffect, useState} from "react";
import InfoForm from "@/app/components/InfoForm";
import InteractiveButton from "@/app/components/InteractiveButton";
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProfileTab({ authToken , isSignedIn}: { authToken : string, isSignedIn: boolean}) {
    // Use info from the authToken to pre-fill the form. If info is null, use placeholder text.
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [discord, setDiscord] = useState("");
    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [graduationYear, setGraduationYear] = useState("");
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
                )

                console.log("Get response:", response);
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

                setFirstName(response.data.first_name || "");
                setLastName(response.data.last_name || "");
                setDiscord(response.data.discord_username || "");
                setSchool(response.data.school || "");
                setMajor(response.data.major || "");
                setGraduationYear(response.data.graduation_year || "");
            } catch (error) {

            }
        }

        fetchUserProfile();
    }, [auth.isLoading, auth.isAuthenticated, auth.user?.id_token]);

    return (
        <div className="overflow justify-center bg-gradient-to-b from-[#CFE8EC] to-[#FEA27B]">
            <div className="p-10"/>

            <div className="bg-[url(/backgrounds/landing-foreground.png)] bg-no-repeat bg-cover sm:bg-[position:center_top] bg-[position:center_top] -my-[20vh] sm:my-[] p-[vh] sm:p-[10vh]">
                <div className="flex flex-col justify-center items-center p-4">
                    <div className="shadow-[4px_4px_9px_rgba(0,0,0,0.5)] p-3 flex flex-col gap-1 items-center justify-center min-h-[50vh] sm:min-h-[60vh] w-fit lg:w-fit bg-[rgb(255,255,255,0.9)] text-black rounded-lg mt-20">
                        <h3 className="text-[2rem] font-[Maragsa] py-3 text-center">Registration</h3>
                        <div className="flex flex-row gap-2 p-0 items-start gap-1 text-center ">
                            <InfoForm label="First Name" formData={firstName} setFormData={setFirstName} isEditing={isEditing}/>
                            <InfoForm label="Last Name" formData={lastName} setFormData={setLastName} isEditing={isEditing}/>
                        </div>
                        <InfoForm label="Discord" formData={discord} setFormData={setDiscord} isEditing={isEditing}/>
                        <InfoForm label="School" formData={school} setFormData={setSchool} isEditing={isEditing}/>
                        <InfoForm label="Major" formData={major} setFormData={setMajor} isEditing={isEditing}/>
                        <InfoForm label="Graduation Year" formData={graduationYear} setFormData={setGraduationYear} isEditing={isEditing}/>
                        
                        <InteractiveButton text={"Register/Update Data"} onClick={() => {}} isActive={true  } />
                        <div className="relative ml-auto"> 
                            <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="bg-gradient-to-r from-[#e5e5e5] to-[#e5e5e5] rounded-[15px] px-[15px] py-[1vh] text-black cursor-pointer shadow-[0_6px_12px_rgba(0,0,0,0.25)] transition-transform duration-200 font-instrument-sans flex items-center justify-center no-underline w-fit z-10 hover:scale-[1.05] active:scale-[0.95]] w-[20vw] absolute translate-x-[-100%] translate-y-[-100%]"
                            >
                                <p className="text-black text-base">✍️</p>
                            </button>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

