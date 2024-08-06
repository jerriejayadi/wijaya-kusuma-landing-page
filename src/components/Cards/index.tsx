import React from "react";

interface CardsProps {
  className?: string;
  icons?: React.ReactNode;
  children?: React.ReactNode;
  title: string;
}

export default function Cards({
  className,
  icons,
  title,
  children,
}: CardsProps) {
  return (
    <div
      className={`${
        className ?? ""
      } bg-[#ECF3FD] p-6 rounded-lg font-medium w-full`}
    >
      <div className={`flex items-center gap-4`}>
        {icons}
        <p className={`text-2xl font-bold`}>{title}</p>
      </div>
      <p className={`text-base leading-6 mt-4`}>{children}</p>
    </div>
  );
}
