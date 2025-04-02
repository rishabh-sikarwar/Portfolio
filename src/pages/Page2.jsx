import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRefs = useRef([]);

  useGSAP(() => {
    textRefs.current.forEach((el, index) => {
      gsap.from(el, {
        transform: window.innerWidth > 768 ? "rotateX(-60deg)" : "none",
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.15,
        scrollTrigger:
          window.innerWidth > 768
            ? {
                trigger: el,
                start: "top 90%",
                end: "top 40%",
                scrub: 0.5,
              }
            : null,
      });
    });
  }, []);

  return (
    <div id="section2" className="text-white text-center py-20 px-4">
      {/* Massive Text for Maximum Impact */}
      {["CODE!", "CREATE!", "INNOVATE!"].map((word, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="h1 mt-16"
        >
          <h1
            className="text-[12vw] sm:text-[15vw] md:text-[16vw] lg:text-[20vw] xl:text-[5vw] 2xl:text-[4vw] 
                      font-extrabold text-white leading-none tracking-wide uppercase font-sans"
          >
            {word}
          </h1>
        </div>
      ))}

      {/* Bottom Line */}
      <div className="h-1 w-5/6 sm:w-3/4 bg-black relative left-1/2 -translate-x-1/2 mt-12"></div>
    </div>
  );
};

export default Page2;
