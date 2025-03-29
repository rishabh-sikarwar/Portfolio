import React from "react";
import video from "../assets/stars.mp4";
import image from "../assets/laptop.png";

const Page3 = () => {
  return (
    <div className="relative h-screen bg-white flex items-center justify-center">
      <img src={image} alt="image z-20" className="absolute" />
      <video
        src={video}
        autoPlay
        loop
        muted
        controls
        className="h-[53vh] w-[52vw] object-cover relative z-10"
      ></video>
      <div className="h-0.5 w-2/3 top-[40%]  absolute z-0 bg-black"></div>
      <div className="h-0.5 w-3/4 top-[58%]  absolute z-0 bg-black"></div>
      <div className="h-0.5 w-4/5 absolute top-[76%]  z-0 bg-black"></div>
    </div>
  );
};

export default Page3;
