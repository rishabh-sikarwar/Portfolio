import React from "react";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  return (
    <div className="fixed w-full z-30 py-28 px-20 flex justify-end items-center ">
      <button className="bg-black px-6 py-3 rounded-full text-white border-4 text-xl hover:bg-slate-500">
        Hire Me
      </button>
      <i className="ri-more-2-fill text-4xl text-white ml-3"></i>
    </div>
  );
};

export default Header;
