"use client";
import {useState} from "react";

type InfoFormProps = {
  label: string;
  formData: string;
  setFormData: (formData: string) => void;
  isEditing: boolean;
};

export default function InfoForm({ label, formData, setFormData, isEditing }: InfoFormProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isEditing) return; // Prevent changes if not in editing mode
        setFormData(e.target.value);
    };

    const fullWidth = "w-[70vw] min-w-[400px] sm:w-[30vw]";
    const halfWidth = "w-[29vw] min-w-[190px] sm:w-[14vw]";

    const widthVariant = (!label.includes("Name")) ? fullWidth : halfWidth;
    const styling = "border p-2 rounded -h-2 " + widthVariant + " sm:w-[11.4vw] text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 " + (isEditing ? "cursor-text" : "cursor-not-allowed"); 
    
    return (
        <div className="w-full flex flex-col gap-2 p-2 items-start gap-1 text-center ">
            <label className="text-lg font-bold">{label}</label>
            <div className="flex flex-row items-end w-full flex gap-0">
                 <input
                    type="text"
                    value={formData}
                    onChange={handleChange}
                    placeholder={label}
                    className={styling}
                />
                <div className="relative ml-auto"> 
                    <p className="mr-auto absolute left-[-20] top-[-30] text-gray-500 text-sm">
                    {isEditing ? null : <>🔒</>}
                </p>
                </div>
            </div>


        </div>
    );
}
