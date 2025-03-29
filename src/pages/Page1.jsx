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
        className=" relative h-screen bg-red-200 p-6"
      >
        <div id="page1-in" className=" relative h-full w-full bg-[url(./assets/backgroundimage.png)] rounded-[50px] bg-cover shadow-gray-700 shadow-xl p-20">
          <img
            src={circleimage}
            alt="circle"
            className="w-16 h-16 absolute top-10 left-1  ml-10 z-10"
          />
          <TiltText abc={tiltRef} />
          <Page1Bottom />
        </div>
      </div>
    </>
  );
};

export default Page1;
