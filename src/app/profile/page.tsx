"use client";
import {useState} from "react";
import InfoForm from "@/app/components/InfoForm";
import InteractiveButton from "@/app/components/InteractiveButton";

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

