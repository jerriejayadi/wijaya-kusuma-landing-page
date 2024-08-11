// components/RepeatableText.tsx
import React from "react";

interface RepeatableTextProps {
  text: string;
  className?: string;
}

const RepeatableText: React.FC<RepeatableTextProps> = ({ text, className }) => {
  return (
    <div
      className={`${className ?? ""} w-full overflow-hidden whitespace-nowrap`}
    >
      <div className="inline-block">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="font-extrabold text-[#ECF2FD] text-4xl md:text-9xl">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RepeatableText;
