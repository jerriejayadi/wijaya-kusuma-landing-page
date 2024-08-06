import { ICONS_EXCELLENT, ICONS_TRUSTED } from "@/lib/images";
import Image from "next/image";
import Cards from "../Cards";

export default function Advantages() {
  return (
    <div
      className={`flex flex-col md:flex-row gap-6 items-center md:items-start justify-center`}
    >
      <div
        className={`flex flex-col items-center md:items-start text-center md:text-left`}
      >
        <p
          className={` text-xs md:text-lg leading-[18px] tracking-normal text-[#9F9F9F] font-medium md:font-semibold md:leading-7 md:tracking-wide`}
        >
          Our Advantages
        </p>
        <p
          className={`text-[#1D223A] mt-2 font-bold text-2xl md:text-[32px] leading-[48px] `}
        >
          Why choose us?
        </p>
        <p
          className={`font-medium mt-4 md:text-lg md:font-normal md:tracking-wider`}
        >
          We have been operating since [year], and have done many collaborations
          with both local and international companies.
        </p>
      </div>
      <Cards
        icons={
          <Image
            className={`w-16 h-16 bg-white rounded-[100%] p-2`}
            src={ICONS_TRUSTED}
            alt={``}
            width={512}
            height={512}
          />
        }
        title={`Trusted`}
      >
        UD Wijaya has successfully established numerous collaborations with both
        local and international companies
      </Cards>
      <Cards
        className={`h-full flex-grow`}
        icons={
          <Image
            className={`w-16 h-16 bg-white rounded-[100%] p-2`}
            src={ICONS_EXCELLENT}
            alt={``}
            width={512}
            height={512}
          />
        }
        title={`Excellent Work`}
      >
        UD Wijaya has completed numerous projects in the field of bottle plastic
        management
      </Cards>
    </div>
  );
}
