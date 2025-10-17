"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { logo } from "../assets/export";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [active, setActive] = useState("home");

  const toggle = () => {
    setIsopen((prev) => !prev);
  };

  return (
    <div>
      <div className="px-7 lg:px-24 relative flex flex-col items-center z-10 uppercase">
        <nav className="w-full flex items-center justify-between py-4 lg:py-4">
          <div className="">
            <Image src={logo} alt="" className="w-[48px] h-[48px]" />
          </div>
          <div className="hidden lg:flex justify-center pl-12">
            <ul className="flex items-center space-x-10 font-medium text-orange-300">
              <li
                className={`text-[13.89px] cursor-pointer font-[600] tracking-[2.5px] ${
                  active === "home"
                    && "text-orange-600  decoration-orange-600"
                }`}
              >
                <Link
                  href={"/#home"}
                  onClick={() => {
                    setActive("home");
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                className={`text-[13.89px] cursor-pointer font-[600] tracking-[2.5px] ${
                  active === "PrivacyPolicy"
                    && "text-orange-600  decoration-orange-600"
                }`}
              >
                <Link
                  href={"/PrivacyPolicy"}
                  onClick={() => {
                    setActive("PrivacyPolicy");
                  }}
                >
                 Privacy Policy
                </Link>
              </li>
              <li
                className={`text-[13.89px] cursor-pointer font-[600] tracking-[2.5px] ${
                  active === "Terms"
                    && "text-orange-600  decoration-orange-600"
                }`}
              >
                <Link
                  href={"/Terms"}
                  onClick={() => {
                    setActive("Terms");
                  }}
                >
                  Terms & Conditions
                </Link>
              </li>
          
            </ul>
          </div>
          <div className="flex justify-between lg:hidden">
                  <button onClick={toggle} className="ml-auto">
              jdsd
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`absolute h-screen right-0 top-0 z-50 w-60 max-w-sm lg:hidden overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50  text-white transition-all duration-700 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-60"
          }`}
        >
          <div className="p-5 flex justify-between items-start w-full">
            <ul className="flex flex-col space-y-4 py-5 uppercase">
              <li
                onClick={toggle}
                className={`text-[13.89px] cursor-pointer font-[600] ${
                  active === "home"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link href="#home" onClick={() => setActive("home")}>
                  Home
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[13.89px] cursor-pointer font-[600] ${
                  active === "aboutus"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link href="#aboutus" onClick={() => setActive("aboutus")}>
                  About Us
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[13.89px] cursor-pointer font-[600] ${
                  active === "howitswork"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link
                  href="#howitswork"
                  onClick={() => setActive("howitswork")}
                >
                  Why Choose Us
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[13.89px] cursor-pointer font-[600] ${
                  active === "contactus"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link href="#contactus" onClick={() => setActive("contactus")}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <button onClick={toggle} className="ml-auto">
              jdsd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
