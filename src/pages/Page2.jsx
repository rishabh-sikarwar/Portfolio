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
        transform: "rotateX(-80deg)",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "top 10%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <div id="section2" className="bg-white text-black text-center py-20 px-4">
      {/* Massive Text for Maximum Impact */}
      {["CODE!", "CREATE!", "INNOVATE!"].map((word, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="h1 mt-20"
        >
          <h1
            className="text-[40vw] sm:text-[36vw] md:text-[30vw] lg:text-[28vw] 
                      font-bold text-black leading-none tracking-tight font-[anzo123456] "
          >
            {word}
          </h1>
        </div>
      ))}

      {/* Bottom Line */}
      <div className="h-2 w-5/6 sm:w-3/4 bg-black relative left-1/2 -translate-x-1/2 mt-16"></div>
    </div>
  );
};

export default Page2;
