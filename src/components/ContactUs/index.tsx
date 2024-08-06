import Image from "next/image";
import Input from "../Input";

export default function ContactUs() {
  return (
    <div className={`bg-white rounded-xl px-4 py-6 max-w-[1280px] mx-auto`}>
      <div>
        <p className={`text-base font-medium tracking-wide text-center`}>
          Get In Touch
        </p>
        <h1 className={`text-center font-bold text-2xl leading-9`}>
          Interested with us?
        </h1>
      </div>
      <div className={`mt-6 flex flex-col gap-6 max-w-[840px] mx-auto`}>
        <div className={`w-full grid md:grid-cols-2 gap-6`}>
          <Input
            label={`First Name`}
            id={`firstName`}
            placeholder={`Input First Name...`}
            className={`px-4 py-3 focus:outline-none border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-[4px] mt-2 w-full`}
          />
          <Input
            label={`Last Name`}
            id={`lastName`}
            placeholder={`Input Last Name...`}
            className={`px-4 py-3 focus:outline-none border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-[4px] mt-2 w-full`}
          />
        </div>
        <Input
          label={`Email`}
          id={`email`}
          placeholder={`Input Email Address...`}
          className={`px-4 py-3 focus:outline-none border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-[4px] mt-2 w-full`}
        />
        <div className={`flex flex-col`}>
          <label htmlFor={`message`} className={`font-medium mb-2`}>
            Message
          </label>
          <textarea
            id={`message`}
            placeholder={`We want to collaboration with UD Wijaya Kusuma`}
            className={`px-4 py-3  border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-[4px]  w-full resize-none min-h-[209px]`}
          />
        </div>
        <button
          className={`bg-[#2626BB] py-3 text-white rounded-full font-medium tracking-wide`}
        >
          Send Message
        </button>
        <div className="relative flex  items-center mt-6 px-6">
          <div className="flex-grow border-t border-Gray"></div>
          <span className="flex-shrink mx-4 text-xs text-Gray">Or contact</span>
          <div className="flex-grow border-t border-Gray"></div>
        </div>
        <div className={`flex gap-6 mt-8 mx-auto`}>
          <button
            className={`px-4 py-2 bg-Black  text-white w-full rounded-full flex items-center md:w-fit`}
          >
            <Image
              className={`aspect-square size-6 shrink-0 object-cover`}
              alt={``}
              src={`/icons/whatsapp.png`}
              width={577}
              height={577}
            />
            <span className={`ml-2`}>Whatsapp</span>
          </button>
          <button
            className={`px-4 py-2 bg-Black flex text-white w-full rounded-full md:w-fit`}
          >
            <Image
              className={`size-6 shrink-0 object-cover rounded-[100%]`}
              alt={``}
              src={`/icons/line.png`}
              width={577}
              height={433}
            />
            <span className={`ml-2`}>Line</span>
          </button>
        </div>
      </div>
    </div>
  );
}
