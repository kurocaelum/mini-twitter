import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
    label?: string;
    id?: string;
    inputType?: string;
    placeholder?: string;
    icon: React.ReactNode;
    register: UseFormRegisterReturn<string>;
}

export default function FormInput({
    label,
    id,
    inputType = "text",
    placeholder,
    icon,
    register
}: Props) {

    return (
        <div className="mb-5">
            <label className="text-[14px] text-gray dark:text-white2" htmlFor={id}>
                {label}
            </label>
            
            <div className="mt-2 p-4 flex justify-between w-full text-[16px] text-gray border rounded-2xl border-blue-steel3 dark:border-gray bg-white dark:bg-blue-midnight3 outline-blue">
                <input
                    id={id}
                    className="w-[90%] outline-none"
                    type={inputType}
                    placeholder={placeholder}
                    {...register}
                />
                {icon}
            </div>
        </div>
    );
}
