import Image from "next/image";
import Cards from "../Cards";
import { ICONS_COLLECT, ICONS_DISTRIBUTION, ICONS_SORTING } from "@/lib/images";

export default function Services() {
  return (
    <div className={`flex flex-col gap-6 md:gap-12`}>
      <div className={`flex flex-col items-center text-center`}>
        <p
          className={`text-xs leading-[18px] text-Gray font-medium md:font-bold md:text-lg md:leading-[27px] md:tracking-wide`}
        >
          Services
        </p>
        <p className={`font-bold text-2xl leading-9 mt-2`}>
          Efficient and Eco-Friendly Bottle Plastic Management Services
        </p>
      </div>
      <div className={`flex flex-col gap-6 md:flex-row `}>
        <Cards
          icons={
            <Image
              className={`w-16 h-16 bg-white rounded-[100%] p-2`}
              src={ICONS_COLLECT}
              alt={``}
              width={512}
              height={512}
            />
          }
          title={`Collecting`}
        >
          UD Wijaya is dedicated to collecting plastic bottles from local
          communities to promote recycling and reduce environmental impact
        </Cards>
        <Cards
          icons={
            <Image
              className={`w-16 h-16 bg-white rounded-[100%] p-2`}
              src={ICONS_SORTING}
              alt={``}
              width={512}
              height={512}
            />
          }
          title={`Sorting`}
        >
          We efficiently sort plastic bottles by color to enhance the quality of
          recycling and ensure optimal processing of materials
        </Cards>
        <Cards
          icons={
            <Image
              className={`w-16 h-16 bg-white rounded-[100%] p-2`}
              src={ICONS_DISTRIBUTION}
              alt={``}
              width={512}
              height={512}
            />
          }
          title={`Distribution`}
        >
          We are ready to distribute plastic bottles to both local and
          international companies, ensuring a reliable supply for various
          industries
        </Cards>
      </div>
    </div>
  );
}
