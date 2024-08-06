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
        <p className={`font-medium mt-4 text-base md:text-lg md:tracking-wider `}>
          MARDIREJO RT 001, RT.001/RW.004, Karanganom, Kec. Klaten Utara,
          Kabupaten Klaten, Jawa Tengah 57436
        </p>
        <button
          className={`bg-[#2626BB] px-6 py-3 w-full mt-4 text-white rounded-[4px] font-semibold tracking-wide md:w-fit md:mt-6`}
        >
          Direction
        </button>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6663075435663!2d106.82457865874419!3d-6.175408343786172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2db8c5617%3A0x4e446b7ac891d847!2sMonas%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1722964393498!5m2!1sen!2sid"
        className={`aspect-square size-full mt-4 rounded-lg md:max-h-[263px]`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
