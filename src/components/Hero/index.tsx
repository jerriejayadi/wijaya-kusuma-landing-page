import Image from "next/image";
import ImageCarousel from "../Carousel";

const IMAGE_LIST = [
  "/images/hero/hero-1.jpeg",
  "/images/hero/hero-2.jpeg",
  "/images/hero/hero-3.jpeg",
  "/images/hero/hero-4.jpeg",
  "/images/hero/hero-5.jpeg",
];
export default function Hero() {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 md:flex-row py-6 `}
    >
      <div className={`w-full md:w-[50%]  order-2 md:order-1`}>
        <article className={`flex flex-col gap-6 w-full`}>
          <h1
            className={`font-bold text-4xl md:text-6xl leading-[54px] md:leading-[90px] `}
          >
            Leading the Way in Plastic Waste Management
          </h1>
          <p className={`text-base md:text-2xl md:leading-9`}>
            <span className={`font-bold`}>UD Wijaya</span> is a plastic bottle
            management company that is playing a crucial role in bridging the
            gap between collectors and companies. As the world grapples with the
            mounting issue of plastic waste,{" "}
            <span className={`font-bold`}>UD Wijaya</span> has emerged as a
            reliable and efficient solution.
          </p>
          <button
            className={`w-full px-6 py-3 bg-[#2626BB] rounded-[4px] text-white font-medium md:w-fit`}
          >
            Contact Us
          </button>
        </article>
      </div>
      <div className={`order-1 md:order-2 shrink-0 w-full md:w-[50%]`}>
        <ImageCarousel
          className="aspect-video max-h-[600px] w-full md:hidden"
          images={IMAGE_LIST}
        />
        <Image
          className={`shrink-0 rounded-lg w-full hidden md:block`}
          alt={``}
          src={`/images/hero/hero-1.jpeg`}
          width={1920}
          height={1080}
        />
        <div className={`hidden md:grid grid-cols-2 gap-6 mt-6`}>
          <Image
            className={`shrink-0 rounded-lg w-72 h-60`}
            alt={``}
            src={`/images/hero/hero-2.jpeg`}
            width={1920}
            height={1080}
          />
          <Image
            className={`shrink-0 rounded-lg w-72 h-60 object-cover`}
            alt={``}
            src={`/images/hero/hero-3.jpeg`}
            width={1920}
            height={1080}
          />
          <Image
            className={`shrink-0 rounded-lg w-72 h-60 object-cover`}
            alt={``}
            src={`/images/hero/hero-4.jpeg`}
            width={1920}
            height={1080}
          />
          <Image
            className={`shrink-0 rounded-lg w-72 h-60 object-cover`}
            alt={``}
            src={`/images/hero/hero-5.jpeg`}
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}
