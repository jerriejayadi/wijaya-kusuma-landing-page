import Link from "next/link";

export default function Locations() {
  return (
    <div className={`flex flex-col md:flex-row items-center md:gap-6`}>
      <div
        className={`flex flex-col items-center justify-center text-center md:items-start md:text-left`}
      >
        <p
          className={`text-Gray text-xs font-medium leading-[18px] md:text-lg md:font-bold md:leading-[27px]`}
        >
          Our Location
        </p>
        <h1
          className={`mt-2 font-bold text-2xl leading-9 md:text-[32px] md:leading-[48px]`}
        >
          Where to find us?
        </h1>
        <p
          className={`font-medium mt-4 text-base md:text-lg md:tracking-wider `}
        >
          MARDIREJO RT 001, RT.001/RW.004, Karanganom, Kec. Klaten Utara,
          Kabupaten Klaten, Jawa Tengah 57436
        </p>
        <Link
          href={`https://maps.app.goo.gl/Cy3qqzvynMDfy8q16`}
          className={`bg-[#2626BB] px-6 py-3 w-full mt-4 text-white rounded-[4px] font-semibold tracking-wide md:w-fit md:mt-6 transition-all duration-300 active:brightness-90 md:hover:brightness-90`}
        >
          Direction
        </Link>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27536.26579004953!2d110.59802112602358!3d-7.698345624831367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a41e081032eaf%3A0xca70a13eb0ea423a!2sUD%20WIJAYA%20KUSUMA!5e0!3m2!1sen!2sid!4v1723332639611!5m2!1sen!2sid"
        className={`aspect-square size-full mt-4 rounded-lg md:max-h-[263px]`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
