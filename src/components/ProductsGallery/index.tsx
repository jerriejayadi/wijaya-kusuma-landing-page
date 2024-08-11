import Image from "next/image";
import ProductCard from "../ProductCard";
import ImageCarousel from "../Carousel";
import { IMAGE_LIST_GALLERY } from "@/lib/images";

export default function ProductsGallery() {
  return (
    <div>
      <div className={`flex flex-col items-center justify-center text-center`}>
        <p
          className={`text-Gray font-medium leading-[18px] md:font-semibold md:tracking-wider`}
        >
          Our Products
        </p>
        <h1
          className={`font-bold text-2xl leading-[36px] mt-2 md:font-bold md:tracking-wide`}
        >
          Gallery Our Product
        </h1>
      </div>
      <div
        className={`flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-center overflow-hidden md:overflow-auto`}
      >
        <ImageCarousel
          className={`h-[300px] block md:hidden`}
          images={IMAGE_LIST_GALLERY}
        />
        <div className={` items-center justify-start gap-5 hidden md:flex`}>
          {IMAGE_LIST_GALLERY.map((rows, index) => (
            <Image
              key={`index`}
              alt={`Image ${index}`}
              src={rows}
              className={`aspect-square object-cover w-full rounded-lg`}
              width={300}
              height={300}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
