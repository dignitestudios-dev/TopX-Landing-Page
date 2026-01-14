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
            
            </button>
          </div>
        </nav>


      </div>
    </div>
  );
};

export default Navbar;
