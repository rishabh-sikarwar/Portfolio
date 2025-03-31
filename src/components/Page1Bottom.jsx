import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1Bottom = () => {
  useGSAP(() => {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 3,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });
  });

  return (
    <div className="mb-10 absolute bottom-0 left-0 px-6 sm:px-12 md:px-20 pt-20 flex flex-col md:flex-row items-center justify-between w-full text-white">
      {/* Left Side Text (Hidden on Small Screens) */}
      <div className="hidden md:block">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif">
          BRAND DESIGN | WEBSITE DESIGN
        </h2>
        <h3 className="text-lg sm:text-2xl md:text-3xl text-gray-400 font-serif">
          BESPOKE FREELANCE
        </h3>
      </div>

      {/* Rotating Circular Logos (Always Visible) */}
      <div
        id="banner"
        className="flex flex-row items-center gap-6 sm:gap-8 mt-6 md:mt-0 md:flex-col "
      >
        <img
          src="https://res.cloudinary.com/dsrx8ljlr/image/upload/v1743395953/assets/oti7ieah3tbc94qjyq36.png"
          alt="mern"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"
        />
        <img
          src="https://res.cloudinary.com/dsrx8ljlr/image/upload/v1743395950/assets/uovbpqerlwyi5ifypasb.png"
          alt="engineer"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
