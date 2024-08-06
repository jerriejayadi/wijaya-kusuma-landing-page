import Hero from "@/components/Hero";
import Image from "next/image";
import Advantages from "../components/Advantages";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Locations from "@/components/Locations";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className=" py-16 flex flex-col items-center gap-6 w-full">
      <section
        className={`max-w-[1240px] px-6 md:px-0 py-6 md:py-20`}
        id={`hero`}
      >
        <Hero />
      </section>
      <section
        className={`max-w-[1240px] px-6 md:px-0 py-6 md:py-20`}
        id={`advantage`}
      >
        <Advantages />
      </section>
      <section
        className={`max-w-[1240px] px-6 md:px-0 py-6 md:py-20`}
        id={`service`}
      >
        <Services />
      </section>
      <section
        className={`max-w-[1240px] px-6 md:px-0 py-6 md:py-20`}
        id={`product`}
      >
        <Products />
      </section>
      <section
        className={`max-w-[1240px] px-6 md:px-0 py-6 md:py-20`}
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
