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


    const styling = "border p-2 rounded -h-2 w-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#EDAB1D] placeholder:text-gray-500 " + (isEditing ? "cursor-text" : "cursor-not-allowed");
    
    return (
        <div className="w-full flex flex-col p-2 items-start text-center ">
            <label className="text-lg font-bold">{label}</label>
            <div className="flex flex-row items-end w-full gap-0">
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
