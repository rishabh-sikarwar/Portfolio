import React from "react";

const TiltText = (props) => {
  return (
    <div
      id="tiltDiv"
      ref={props.abc}
      className="text-white z-10 uppercase font-bold mx-10 text-xl mt-24 text-center"
    >
      <h1 className="text-[4vw] font-[anzo1] leading-[4vw]">
        Transforming Ideas into <span className="text-blue-700">Seamless</span>
      </h1>
      <h1 className="text-[7vw] font-[anzo1] leading-[7vw] text-blue-700">
        Digital Experience
      </h1>
    </div>
  );
};

export default TiltText;
