import React, { use, useRef, useState } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import circleimage from "../assets/circleimage.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)
  const mouseMoving = (e) => {
    // console.log(tiltRef.current.getBoundingClientRect());

    //to find the middle point on the div we have to first find the total length of the page then subtract the distance of the div from the left corner then again subtract the half of the div width
    const centreTiltDivX = e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2
    const centreTiltDivY = e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2
    setXVal((centreTiltDivX) / 70)
    setYVal((-centreTiltDivY)/20)
      };


  useGSAP(function () {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease:'power4.out',
    });
  },[xVal, yVal]);



  return (
    <>
      <div
        onMouseMove={(e) => mouseMoving(e)}
        className=" relative h-screen bg-red-200 p-6 "
      >
        <div className="absolute inset-0 rounded-[50px] overflow-hidden shadow-red-950 m-8 shadow-2xl">
          <video
            src="/src/assets/stars.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <div id="page1-in" className=" relative h-full w-full p-20">
          <TiltText abc={tiltRef} />
          <Page1Bottom />
        </div>
      </div>
    </>
  );
};

export default Page1;
