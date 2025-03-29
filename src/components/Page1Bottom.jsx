import React from 'react'
import mern from "../assets/mern.png"
import engineerlogo from "../assets/engineerlogo.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to('#banner img', {
      rotate: 360,
      duration: 3,
      repeat: -1,
      ease: 'linear'
    })
  })
  return (
    <div className="absolute bottom-0 left-0 px-20 pt-32 flex items-center justify-between w-full text-white">
      <div>
        <h2 className="text-4xl font-serif ">BRAND DESIGH| WEBSITE DESIGN </h2>
        <h3 className="text-3xl text-gray-400 font-serif ">
          {" "}
          BESPOKE FREELANCE
        </h3>
      </div>
      <div id='banner'>
        <img 
          src={mern}
          alt="mern"
          className="w-24 h-24 rounded-full ml-10 z-10 mb-10 object-cover"
        />
        <img
          src={engineerlogo}
          alt="engineer"
          className="w-24 h-24 rounded-full ml-10 z-10 mb-10 object-cover"
        />
      </div>
    </div>
  );
}

export default Page1Bottom