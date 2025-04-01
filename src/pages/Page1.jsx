import React, { use, useRef, useState } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const mouseMoving = (e) => {
    // console.log(tiltRef.current.getBoundingClientRect());

    //to find the middle point on the div we have to first find the total length of the page then subtract the distance of the div from the left corner then again subtract the half of the div width
    const centreTiltDivX =
      e.clientX -
      tiltRef.current.getBoundingClientRect().x -
      tiltRef.current.getBoundingClientRect().width / 2;
    const centreTiltDivY =
      e.clientY -
      tiltRef.current.getBoundingClientRect().y -
      tiltRef.current.getBoundingClientRect().height / 2;
    setXVal(centreTiltDivX / 70);
    setYVal(-centreTiltDivY / 20);
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <>
      <div
        onMouseMove={(e) => mouseMoving(e)}
        className=" relative h-screen bg-gray-900 p-6 "
      >
        <div className="absolute inset-0 rounded-[50px] overflow-hidden bg-gradient-to-b from-blue-800 via-blue-300 to-blue-200 shadow-[#8ab4f1] m-3 shadow-xl "></div>
        <div id="page1-in" className=" relative h-full w-full p-3 md:p-20">
          <TiltText abc={tiltRef} />
          <Page1Bottom />
        </div>
      </div>
    </>
  );
};

export default Page1;
