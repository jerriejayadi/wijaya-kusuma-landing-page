import Hero from "@/components/Hero";
import Image from "next/image";
import Advantages from "../components/Advantages";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Locations from "@/components/Locations";
import ContactUs from "@/components/ContactUs";
import ProductsGallery from "@/components/ProductsGallery";
import RepeatableText from "@/components/RepeatableText";

export default function Home() {
  return (
    <main className=" py-16 flex flex-col items-center gap-6 w-full overflow-hidden">
      <section
        className={`max-w-[1240px] px-6 md:px-0 py-6 md:py-20`}
        id={`hero`}
      >
        <Hero />
        <Image
          className={`absolute top-96 -z-50 size-auto md:size-[700px] object-cover`}
          alt={``}
          src={`/bg-pattern-1.png`}
          width={700}
          height={700}
        />
      </section>
      <section
        className={`relative max-w-[1240px] px-6 md:px-0 py-6 md:py-20`}
        id={`advantage`}
      >
        <Advantages />
        <Image
          className={`absolute right-0 -top-28 -z-50`}
          alt={``}
          src={`/bg-pattern-2.png`}
          width={261}
          height={500}
        />
        <Image
          className={`absolute left-0 -z-50`}
          alt={``}
          src={`/bg-pattern-3.png`}
          width={261}
          height={500}
        />
      </section>
      <section
        className={`relative max-w-[1240px] px-6 md:px-0 py-6 md:py-20 scroll-mt-20`}
        id={`service`}
      >
        <Services />
      </section>
      <section
        className={`max-w-[1240px] px-6 md:px-0 py-6 md:py-20 scroll-mt-9`}
        id={`product`}
      >
        <Products />
      </section>
      <section
        className={`relative max-w-[1240px] px-6 md:px-0 py-6 md:py-20 overflow-hidden`}
        id={`product`}
      >
        <RepeatableText
          className={`absolute top-1 w-screen -z-50`}
          text={" UD WIJAYA KUSUMA "}
        />
        <ProductsGallery />
      </section>
      <section
        className={`max-w-[1240px] px-6 md:px-0 py-6 md:py-20 scroll-mt-20`}
        id={`location`}
      >
        <Locations />
      </section>
      <section
        className={` px-6 md:px-0 py-6 md:py-20 bg-blue2 w-full `}
        id={`contact`}
      >
        <ContactUs />
      </section>
    </main>
  );
}
