import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className={`flex flex-col`}>
      {label && (
        <label htmlFor={props.id} className={`font-medium mb-2`}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={`px-4 py-3 border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-[4px]  w-full`}
      />
    </div>
  );
}
