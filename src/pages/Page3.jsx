import React from "react";
import video from "../assets/intro.mp4";
import image from "../assets/laptop.png";

const Page3 = () => {
  return (
    <div className="relative h-screen bg-[#f3f3f3] flex items-center justify-center px-4">
      <div className="absolute w-full flex flex-col items-center z-0 p-52">
        <div className="h-[1px] w-[50%] bg-black absolute top-[30%]  "></div>
        <div className="h-[1px] w-[67%] bg-black absolute top-[50%] "></div>
        <div className="h-[1px] w-[85%] bg-black absolute top-[70%] "></div>
      </div>

      {/* Laptop with video inside */}
      <div
        className="relative w-[90%] max-w-[900px] md:max-w-[1000px] lg:max-w-[1200px] 
                   bg-no-repeat bg-contain bg-center flex justify-center items-center z-10"
        style={{
          backgroundImage: `url(${image})`,
          aspectRatio: "16/10",
          zIndex: 10,
        }}
      >
        {/* Video inside laptop screen (Behind the Laptop) */}
        <div
          className="absolute flex justify-center items-center z-[-1]"
          style={{
            width: "49%",
            height: "49%",
            top: "19%",
            left: "25%",
            zIndex: -1, // Video goes behind
          }}
        >
          <video
            src={video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-md"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Page3;
