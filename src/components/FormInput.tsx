import { useId } from "react";

interface Props {
    label?: string;
    inputType?: string;
    placeholder?: string;
    icon: React.ReactNode;
}

// TODO props icon
export default function FormInput({
    label,
    inputType = "text",
    placeholder,
    icon
}: Props) {
    const inputId = useId();

    return (
        <div className="mb-5">
            <label className="text-[14px] text-gray" htmlFor={inputId}>
                {label}
            </label>
            
            <div className="mt-2 p-4 flex justify-between w-full text-[16px] text-gray border rounded-2xl border-blue-steel3 bg-white outline-blue">
                <input
                    id={inputId}
                    className="w-[90%] outline-none"
                    type={inputType}
                    placeholder={placeholder}
                />
                {icon}
            </div>
        </div>
    );
}
