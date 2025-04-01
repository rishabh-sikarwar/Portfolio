import React from "react";
import FeedbackModel from "./FeedbackModel";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 text-white px-5 py-4 flex justify-center md:justify-center items-center">
        {/* Navigation Links */}
        <nav className="flex md:gap-10 gap-4 py-2 px-1 uppercase font-bold items-center flex-col md:justify-center bg-opacity-10 backdrop-blur md:px-6 md:py-3 md:rounded-full rounded-lg bg-[#212121] 
                        md:flex-row md:top-auto top-4 left-4 absolute md:relative">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="bg-[gray]  md:bg-[#e25353] rounded-full px-2 py-0.5 w-full text-center md:px-4 md:py-2 hover:bg-[#212121] hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="bg-[gray]  md:bg-[#e25353] rounded-full px-2 py-0.5 w-full text-center md:px-4 md:py-2 hover:bg-[#212121] hover:text-blue-500 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#tools"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("tools");
            }}
            className="bg-[gray]  md:bg-[#e25353] rounded-full px-2 py-0.5 w-full text-center md:px-4 md:py-2 hover:bg-[#212121] hover:text-blue-500 transition-colors duration-300"
          >
            Tools
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("work");
            }}
            className="bg-[gray]  md:bg-[#e25353] rounded-full px-2 py-0.5 w-full text-center md:px-4 md:py-2 hover:bg-[#212121] hover:text-blue-500 transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="bg-[gray]  md:bg-[#e25353] rounded-full px-2 py-0.5 w-full text-center md:px-4 md:py-2 hover:bg-[#212121] hover:text-blue-500 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Feedback Button */}
        <div className="absolute right-4 top-4 md:right-5 md:top-4">
          <FeedbackModel />
        </div>
      </div>
    </>
  );
};

export default Header;
