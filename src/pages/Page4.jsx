import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Work = [
  {
    title: "Full-Stack Authentication System",
    image: "https://via.placeholder.com/300",
    link: "#",
    description:
      "Developed a secure authentication system using Next.js, TypeScript, MongoDB, and Tailwind CSS. Implemented signup, login, and profile pages with responsive UI.",
  },
  {
    title: "Stack Overflow Clone",
    image: "https://via.placeholder.com/300",
    link: "#",
    description:
      "Built a dynamic QnA platform using Next.js and Appwrite. Integrated Magic UI animations and features like slugify, tab navigation, and markdown support for content creation.",
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300",
    link: "#",
    description:
      "Designed and developed a personal portfolio using React and Tailwind CSS. Showcased projects, blogs, and contact information with smooth animations and responsive design.",
  },
];

const Page4 = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Projects
      </h1>
      <div className="relative w-full h-full">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 hover:bg-gray-600"
          onClick={scrollLeft}
        >
          <FaArrowLeft size={20} />
        </button>
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide p-4 bg-black rounded-[50px]"
        >
          {Work.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-xl min-w-[300px] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-white text-xl font-semibold mt-4 text-center">
                {project.title}
              </h2>
              <p className="text-gray-400 text-center mt-2">
                {project.description}
              </p>
            </a>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 hover:bg-gray-600"
          onClick={scrollRight}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Page4;
