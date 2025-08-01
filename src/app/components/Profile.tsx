"use client";
import {useState} from "react";
import InfoForm from "./InfoForm";
import InteractiveButton from "./InteractiveButton";

export default function ProfileTab({ authToken , isSignedIn}: { authToken : string, isSignedIn: boolean}) {
    // Use info from the authToken to pre-fill the form. If info is null, use placeholder text.
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [discord, setDiscord] = useState();
    const [school, setSchool] = useState();
    const [major, setMajor] = useState();
    const [graduationYear, setGraduationYear] = useState();
    
    return (
        <div className="flex justify-center items-center p-4">
            <div className="shadow-[4px_4px_9px_rgba(0,0,0,0.5)] p-3 flex flex-col items-center items-center justify-center gap-1 min-h-[50vh] sm:min-h-[60vh] w-fit lg:w-fit bg-[rgb(255,255,255,0.9)] text-black rounded-lg">
                <h3 className="text-[2rem] font-[Maragsa] py-3 text-center">Registration</h3>
                <div className="flex flex-row gap-2 p-0 items-start gap-1 text-center ">
                    <InfoForm label="First Name" formData={firstName} setFormData={setFirstName}/>
                    <InfoForm label="Last Name" formData={lastName} setFormData={setLastName}/>
                </div>
                <InfoForm label="Discord" formData={discord} setFormData={setDiscord}/>
                
                <InfoForm label="School" formData={school} setFormData={setSchool}/>
                <InfoForm label="Major" formData={major} setFormData={setMajor}/>
                <InfoForm label="Graduation Year" formData={graduationYear} setFormData={setGraduationYear}/>
                
                <InteractiveButton text={"Register/Update Data"} onClick={() => auth.updateData()} />
                <div className="p-2"/>
            </div>
        </div>
    )
}

