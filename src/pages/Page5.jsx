import React from "react";

const Page5 = () => {
  return (
    <div className="h-screen relative p-10 bg-white">
      <div className="h-full w-full bg-black rounded-[50px] flex items-center justify-center overflow-hidden">
        <video
          src="https://res.cloudinary.com/dsrx8ljlr/video/upload/v1743395978/assets/tmycdzf0jus9l3shbxbn.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover transform "
        ></video>
        <h1 className="font-[anzo123456] text-[30vw] sm:text-[25vw] md:text-[20vw]  uppercase absolute bottom-10 left-10 text-[#399162]">
          ABOUT
        </h1>
      </div>
    </div>
  );
};

export default Page5;
