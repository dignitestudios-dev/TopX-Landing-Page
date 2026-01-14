"use client";
import { useState } from "react";
import { bg, logo, mark } from "../assets/export";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GenerateLink from "./GenerateLink";

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigator = useRouter();

  const handleSubmit = () => {
    console.log("Name:", name, "Email:", email);
    if (email.trim() === "" || name.trim() === "") return;

    setModalOpen(!modalOpen);

    // Add your link generation logic here
  };

  return (
    <div className="overflow-hidden  bg-gradient-to-br from-orange-50 via-white to-orange-50 min-h-screen relative">
      <div className=" ">
        <div className="absolute top-0 left-0 ">
          {" "}
          <Image src={bg} alt="" className="w-[320px] h-[320px]" />{" "}
        </div>
        <div className="relative max-w-2xl mx-auto px-6 py-20 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Image src={logo} alt="" className="w-[160px] h-[160px]" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Invite Your Friends.
          </h1>
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Grow Our Community.
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
            <b>
              Enter your name and email to generate your personal referral link.
            </b>
            <br />
            This link will be activated once the app officially launches. You’ll
            be able to share it with friends to invite them to join the platform
            and earn rewards when they sign up using your link.
          </p>

          {/* Form */}
          <div className="max-w-md mx-auto">
            <div className="mb-6 text-left">
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name here"
                className="w-full px-4 py-3 text-black placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="mb-8 text-left">
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 py-3 text-black placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
            >
              Generate Link
            </button>
          </div>

          {/* Footer */}
        </div>
        <div className="px-20">
          <p className="mt-20 text-gray-500 text-sm text-center py-6 border-t border-gray-300 ">
            Copyright © 2025 Top X
          </p>
        </div>
        <div className="absolute bottom-0 right-0 ">
          <Image src={mark} alt="" className="w-[260px] h-[260px]" />{" "}
        </div>

        <GenerateLink
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Hero;
