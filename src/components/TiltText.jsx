import React from "react";

const TiltText = (props) => {
  return (
    <div
      id="tiltDiv"
      ref={props.abc}
      className="text-white z-10 uppercase font-bold mx-10 text-xl md:mt-10 mt-1 text-center flex flex-col md:flex-row items-center justify-center"
    >
      {/* Left Side: Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="https://res.cloudinary.com/dsrx8ljlr/image/upload/v1743395951/assets/gw8dyuztti50w5ujojd8.png"
          alt="Rishabh Sikarwar"
          className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full md:rounded-2xl shadow-2xl shadow-blue-500/50"
        />
      </div>

      {/* Right Side: Tilted Text */}
      <div className="text-left md:text-left md:w-1/2">
        <h1 className="text-[5vw] font-[anzo1] leading-[5vw]">Hi There,</h1>
        <h1 className="text-[5vw] font-[anzo1] leading-[5vw]">I Am</h1>
        <h1 className="text-[6vw] font-[anzo1] leading-[6vw] text-blue-700">
          Rishabh Sikarwar
        </h1>
      </div>
    </div>
  );
};

export default TiltText;
