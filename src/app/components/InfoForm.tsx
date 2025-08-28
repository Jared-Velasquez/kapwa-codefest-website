"use client";
import { toast } from "sonner";

type InfoFormProps = {
  label: string;
  formData: string;
  setFormData: (formData: string) => void;
  isEditing: boolean;
  required?: boolean;
};

export default function InfoForm({ label, formData, setFormData, isEditing, required = false }: InfoFormProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isEditing) return; // Prevent changes if not in editing mode
        const newValue = e.target.value;

        // if required, previously filled, and the user cleared it, send a toast
        if (required && formData.trim().length > 0 && newValue.trim().length === 0)
            toast.error(`You can't input an empty ${label.toLowerCase()} once populated.`);
        setFormData(e.target.value);
    };


    const styling = `border p-2 rounded w-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#EDAB1D] placeholder:text-gray-500 ${isEditing ? "cursor-text" : "cursor-not-allowed"} ${required && !formData ? "border-red-600 border-2" : ""}`;

    return (
        <div className="w-full flex flex-col p-2 items-start text-center">
            <label className="text-lg font-bold">{label}</label>
            <div className="flex flex-row items-end w-full">
                 <input
                    type="text"
                    value={formData}
                    onChange={handleChange}
                    placeholder={label}
                    className={styling}
                    required={required}
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
