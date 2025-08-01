"use client";
import {useState} from "react";

type InfoFormProps = {
  label: string;
  formData: string;
  setFormData: (formData: string) => void;
};

export default function InfoForm({ label, formData, setFormData }: InfoFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  

  const styling = (!label.includes("Name")) ? 
  "border p-2 rounded -h-2 w-[60vw] sm:w-[30vw] text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" :
   "border p-2 rounded -h-2 w-[29vw] sm:w-[14vw] text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"; 


  return (
    <div className="flex flex-col gap-2 p-2 items-start gap-1 text-center ">
      <label className="text-lg font-bold">{label}</label>
      <input
        type="text"
        value={formData}
        onChange={handleChange}
        placeholder={label}
        className={styling}
      />
    </div>
  );
}
