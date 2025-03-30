import React from "react";
import "remixicon/fonts/remixicon.css";
import circleimage from "../assets/circleimage.png";

const Header = () => {

  const handleClick = () => {
    window.scrollTo({top:0 , behavior: "smooth"})  
  }


  return (
    <div className=" w-full h-20 fixed top-[7%] left-0 flex items-center justify-between px-14 z-20 ">
      <div onClick={handleClick} className="cursor-pointer ">
        <img
          src={circleimage}
          alt="circle"
          className="w-16 h-16 "
        />
      </div>
      <div className=" flex  items-center ">
        <button className="bg-[#399162] px-6 py-3 rounded-full text-white border-4 text-xl hover:bg-[#453991] ">
          Hire Me
        </button>
        <i className="ri-more-2-fill text-4xl text-[#3898a9] ml-3"></i>
      </div>
    </div>
  );
};

export default Header;
