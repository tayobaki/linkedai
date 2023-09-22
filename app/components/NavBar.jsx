"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/data";
import Image from "next/image";
import Bar from "@/public/bar.svg";
import Close from "@/public/close.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="border-b border-white/10 items-center justify-between bg-indigo flex text-white py-6 px-10 overflow-hidden">
      <Link
        href={"/"}
        className="
       text-2xl md:text-4xl font-bold bg-clip-text bg-gradient-to-r from-white from-35% to-violet to-5% z-40 text-transparent "
      >
        getlinked
      </Link>

      <div className="items-center gap-16 lg:flex hidden">
        <ul className="flex items-center justify-center gap-8 text-base  md:z-50">
          {navLinks.map((items) => (
            <Link href={items.href}>
              <li className=" hover:text-violet duration-150">{items.title}</li>
            </Link>
          ))}
        </ul>

        <Link href={"/register"}>
          <button className=" w-44 h-14 bg-gradient-to-l from-purple from-10% to-violet to-100% rounded ">
            <span>Register</span>
          </button>
        </Link>
      </div>

      <Image
        onClick={toggleNav}
        src={Bar}
        width={19}
        height={14}
        alt="bar"
        className="block lg:hidden
         cursor-pointer"
      />
      {/* TOGGLE NAVIGATION */}
      {isOpen ? (
        <div className="absolute bg-indigo  inset-0 px-10 z-50 h-screen scroll-m-0 overflow-hidden">
          <div className="  flex items-end justify-end mt-7 ">
            <div className="rounded-full border p-1">
              <Image
                onClick={toggleNav}
                src={Close}
                width={19}
                height={14}
                alt="close"
                className=" cursor-pointer rounded-full"
              />
            </div>
          </div>
          <div className="mt-20 flex gap-9 flex-col ">
            {navLinks.map((items) => (
              <Link onClick={toggleNav} href={items.href}>
                <span className=" text-lg font-medium hover:text-violet duration-150">
                  {items.title}
                </span>
              </Link>
            ))}
            <button className=" w-44 h-14 bg-gradient-to-l from-purple from-30% to-violet to-100% rounded ">
              <span>Register</span>
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
