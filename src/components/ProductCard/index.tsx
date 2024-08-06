import Image from "next/image";

interface ProductCardProps {
  imgSrc: string;
  text: string;
  color: "clear" | "green" | "blue";
}
export default function ProductCard({ imgSrc, text, color }: ProductCardProps) {
  return (
    <div
      className={`aspect-square size-full md:size-80 hover:bg-black hover:bg-opacity-30 relative flex items-center justify-center rounded-lg `}
    >
      <Image
        alt={``}
        src={imgSrc}
        className={`aspect-square size-full relative rounded-lg object-cover`}
        width={960}
        height={1280}
      />
      <div
        className={`w-full h-full ${color === "clear" && "bg-[#1A1A1A]"} ${
          color === "blue" && "bg-[#003375]"
        } ${
          color === "green" && "bg-[#014537]"
        } bg-opacity-60 hover:opacity-0 transition-all duration-500 absolute top-0 text-center flex items-center justify-center rounded-lg`}
      >
        <p className={`text-white text-[32px] font-bold `}>{text}</p>
      </div>
    </div>
  );
}
