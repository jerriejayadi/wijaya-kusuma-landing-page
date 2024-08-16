"use client";
import { useState } from "react";
import Image from "next/image";
import Input from "../Input";
import emailjs from "@emailjs/browser";
import Link from "next/link";

interface FormProps {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}
export default function ContactUs() {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormProps>({
    email: "",
    first_name: "",
    last_name: "",
    message: "",
  });
  const sendEmail = (e: any) => {
    setLoading(true);
    e.persist();
    e.preventDefault();

    emailjs
      .send(
        "service_8sgiadf",
        `template_4myi9gl`,
        form as any,
        `8Zur_O2qSdVjdbiYO`
      )
      .then(
        (result) => {
          alert("Successfully sent message to the email");
          setLoading(false);
          setForm({
            email: "",
            first_name: "",
            last_name: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );

    // Clears the form after sending the email
  };
  return (
    <div
      className={`bg-white rounded-xl px-4 py-6 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center md:p-20`}
    >
      <div className={`flex flex-col`}>
        <p
          className={`text-base font-medium tracking-wide text-center md:text-left md:text-2xl`}
        >
          Get In Touch
        </p>
        <h1
          className={`text-center font-bold text-2xl leading-9 md:text-left md:text-5xl mt-3`}
        >
          Interested with us?
        </h1>
      </div>
      <div className={`mt-6 flex flex-col gap-6 max-w-[840px] mx-auto`}>
        {/* <div className={`w-full grid md:grid-cols-2 gap-6`}>
          <Input
            disabled={loading}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, first_name: e.target.value }));
            }}
            value={form.first_name}
            label={`First Name`}
            id={`firstName`}
            placeholder={`Input First Name...`}
            className={`px-4 py-3 focus:outline-none border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-[4px] mt-2 w-full`}
          />
          <Input
            disabled={loading}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, last_name: e.target.value }));
            }}
            value={form.last_name}
            label={`Last Name`}
            id={`lastName`}
            placeholder={`Input Last Name...`}
            className={`px-4 py-3 focus:outline-none border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-[4px] mt-2 w-full`}
          />
        </div>
        <Input
          disabled={loading}
          onChange={(e) => {
            setForm((prev) => ({ ...prev, email: e.target.value }));
          }}
          value={form.email}
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
            disabled={loading}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, message: e.target.value }));
            }}
            value={form.message}
            id={`message`}
            placeholder={`We want to collaboration with UD Wijaya Kusuma`}
            className={`px-4 py-3  border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-[4px]  w-full resize-none min-h-[209px]`}
          />
        </div>
        <button
          disabled={loading}
          onClick={(e) => {
            sendEmail(e);
          }}
          className={`bg-[#2626BB] disabled:bg-gray-300 py-3 text-white rounded-full font-medium tracking-wide`}
        >
          Send Message
        </button>
        <div className="relative flex  items-center mt-6 px-6">
          <div className="flex-grow border-t border-Gray"></div>
          <span className="flex-shrink mx-4 text-xs text-Gray">Or contact</span>
          <div className="flex-grow border-t border-Gray"></div>
        </div> */}
        <div className={`flex gap-6 justify-center w-full`}>
          <Link
            href={`https://api.whatsapp.com/send/?phone=%2B6285723723208&text=Hello+i+want+to+collaboration+with+your+company&type=phone_number&app_absent=0`}
            className={`px-4 py-2 bg-Black  text-white justify-center  w-full rounded-full flex items-center md:w-fit md:text-3xl md:font-bold md:px-6 md:py-4 active:brightness-90 md:hover:brightness-90 transition-all duration-300`}
          >
            <Image
              className={`aspect-square size-6 md:size-10 shrink-0 object-cover`}
              alt={``}
              src={`/icons/Whatsapp_Icon.png`}
              width={1080}
              height={1080}
            />
            <span className={`ml-2 truncate`}>Whatsapp</span>
          </Link>
          {/* <button
            className={`px-4 py-2 bg-Black flex justify-center text-white w-[50%] rounded-full md:w-fit`}
          >
            <Image
              className={`size-6 shrink-0 object-cover rounded-[100%]`}
              alt={``}
              src={`/icons/line.png`}
              width={577}
              height={433}
            />
            <span className={`ml-2`}>Line</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
