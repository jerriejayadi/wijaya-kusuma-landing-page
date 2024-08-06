import Image from "next/image";
import ProductCard from "../ProductCard";

export default function Products() {
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
          Our Bottle Plastic Waste Mangement
        </h1>
      </div>
      <div
        className={`flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-center`}
      >
        <ProductCard
          color={`clear`}
          imgSrc={`/images/products/clear.jpeg`}
          text="PET Bales Clear Grade A"
        />
        <ProductCard
          color={`blue`}
          imgSrc={`/images/products/light-blue.jpeg`}
          text="PET Bales Light Blue Grade A"
        />
        <ProductCard
          color={`green`}
          imgSrc={`/images/products/green.jpeg`}
          text="PET Bales Green Grade A"
        />
      </div>
    </div>
  );
}
