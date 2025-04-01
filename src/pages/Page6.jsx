import React from "react";

const Page6 = () => {
  return (
    <div className="relative h-screen p-5 md:p-10 text-white">
      <div className="h-full w-full bg-black rounded-[50px] flex items-center justify-center overflow-hidden">
        <video
          src="https://res.cloudinary.com/dsrx8ljlr/video/upload/v1743395954/assets/krd52fb2bpveow6my4wl.mp4"
          autoPlay
          loop
          muted
          className="inset-0 object-cover transform w-full h-full opacity-90"
        ></video>
        <div className="absolute  top-0 flex flex-col w-full md:w-auto p-2 md:py-3 md:px-8 my-2  items-center">
          {" "}
          {/* Center on small screens */}
          <h1 className="font-[anzo123456] text-[15vw] sm:text-[15vw] md:text-[18vh] uppercase text-[#399162]  lg:p-10 text-center ">
            ABOUT ME
          </h1>
          <div className="relative z-10 w-full max-w-[80vw] md:w-full max-h-[65vh] md:max-h-[450px] px-2 rounded-2xl bg-black/50 backdrop-blur-sm shadow-lg overflow-y-auto ">
            <div className="w-full text-justify text-3xl">
              <p className="text-xs sm:text-sm md:text-xl mb-1 md:mb-1 leading-relaxed">
                I am a passionate{" "}
                <span className="text-green-400 font-semibold">
                  Full-Stack Developer
                </span>{" "}
                with a strong foundation in frontend and backend technologies. I
                specialize in crafting interactive, scalable, and
                high-performance web applications using{" "}
                <span className="text-yellow-400 font-semibold">
                  Next.js, React, TypeScript, and Tailwind CSS
                </span>
                , while ensuring seamless backend integration with{" "}
                <span className="text-purple-400 font-semibold">
                  MongoDB, Appwrite, and Node.js
                </span>
                .
              </p>
              <p className="text-xs sm:text-sm md:text-xl mb-1 md:mb-2 leading-relaxed">
                Beyond development, I have a keen interest in{" "}
                <span className="text-pink-400 font-semibold">
                  UI/UX design
                </span>
                , optimizing web performance, and implementing robust
                authentication systems. My projects reflect my dedication to
                writing clean, efficient, and maintainable code.
              </p>
              <p className="text-xs sm:text-sm md:text-xl mb-2 md:mb-3 leading-relaxed">
                Currently, I am exploring modern web architectures and
                full-stack security while actively seeking opportunities to
                collaborate on impactful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
