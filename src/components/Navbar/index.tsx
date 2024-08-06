"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LIST_MENU = [
  {
    name: "services",
    url: "#service",
    title: "Services",
  },
  {
    name: "products",
    url: "#product",
    title: "Our Products",
  },
  {
    name: "location",
    url: "#location",
    title: "Our Location",
  },
  {
    name: "contact",
    url: "#contact",
    title: "Contact Us",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav
      className={` ${
        open
          ? "h-screen bg-black bg-opacity-50 backdrop-blur-sm"
          : " bg-transparent"
      } z-50 fixed top-0 left-0 w-full bg-white`}
    >
      <div
        className={`max-w-[1240px] mx-auto flex items-center justify-between z-40 px-4 md:px-8 py-6 md:py-7`}
      >
        <div>
          <Image
            className={`w-40`}
            alt={``}
            src={`/logo.png`}
            width={1497}
            height={290}
          />
        </div>
        <div
          className={` md:flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-6 md:py-0 hidden `}
        >
          {LIST_MENU.map((rows) => (
            <Link className={`font-medium `} key={rows.name} href={rows.url}>
              {rows.title}
            </Link>
          ))}
        </div>
        <div className={`block md:hidden`}>
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <svg
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`size-6`}
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`size-6`}
              >
                <path
                  d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                  fill="#1D223A"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          open
            ? "translate-y-0 opacity-100 visible "
            : "-translate-y-full opacity-0 invisible hidden"
        } transition-all duration-500 bg-white flex flex-col items-start md:items-center justify-between gap-10  px-4 py-6 `}
      >
        {LIST_MENU.map((rows) => (
          <Link
            onClick={() => {
              setOpen(false);
            }}
            className={`font-medium `}
            key={rows.name}
            href={rows.url}
          >
            {rows.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
