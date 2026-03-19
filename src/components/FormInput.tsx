import { useId } from "react";

interface Props {
    label?: string;
    inputType?: string;
    placeholder?: string;
}

// TODO props icon
export default function FormInput({
    label,
    inputType = "text",
    placeholder,
}: Props) {
    const inputId = useId();

    return (
        <div className="mb-5">
            <label className="text-[14px] text-gray" htmlFor={inputId}>
                {label}
            </label>
            <input
                id={inputId}
                className="mt-2 p-4 w-full text-[16px] text-gray border rounded-2xl border-blue-steel3 bg-white"
                type={inputType}
                placeholder={placeholder}
            />
        </div>
    );
}
