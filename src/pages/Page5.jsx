import React from "react";

const Page5 = () => {
  return (
    <div className="h-screen relative p-10 bg-white">
      <div className="h-full w-full bg-black rounded-[50px] flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
        {/* Video Background */}
        <video
          src="https://res.cloudinary.com/dsrx8ljlr/video/upload/v1743395978/assets/tmycdzf0jus9l3shbxbn.mp4"
          autoPlay
          loop
          muted
          className="absolute h-full w-full object-cover opacity-40"
        ></video>

        {/* Content Section */}
        <div className="relative z-10 p-10 text-white w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#399162] uppercase">
            Essential Tools & Technologies
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            I harness the power of modern web technologies to craft seamless,
            scalable, and high-performance applications.
          </p>

          {/* Tech Stack */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg font-semibold">
            <span className="bg-[#222] px-4 py-2 rounded-lg">HTML</span>
            <span className="bg-[#222] px-4 py-2 rounded-lg">CSS</span>
            <span className="bg-[#222] px-4 py-2 rounded-lg">JavaScript</span>
            <span className="bg-[#222] px-4 py-2 rounded-lg">React</span>
            <span className="bg-[#222] px-4 py-2 rounded-lg">Next.js</span>
            <span className="bg-[#222] px-4 py-2 rounded-lg">Node.js</span>
            <span className="bg-[#222] px-4 py-2 rounded-lg">MongoDB</span>
            <span className="bg-[#222] px-4 py-2 rounded-lg">Tailwind CSS</span>
            <span className="bg-[#222] px-4 py-2 rounded-lg">Git & GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
