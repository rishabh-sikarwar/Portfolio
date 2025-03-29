import React from "react";

const TiltText = (props) => {
  return (
    <div
      id="tiltDiv"
      ref={props.abc}
      className="text-white uppercase font-bold mt-30 mx-10 text-xl mt-24"
    >
      <h1 className="text-[4.3vw] font-[anzo1] leading-[4vw] ">
        {" "}
        I am <span className="text-blue-700">DARK MODE</span>{" "}
      </h1>
      <h1 className="text-[7.5vw] font-[anzo1] leading-[7vw] ">DESIGNER</h1>
      <h1 className="text-[4.3vw] font-[anzo1] leading-[4vw] ">TO HIRE</h1>
    </div>
  );
};

export default TiltText;
