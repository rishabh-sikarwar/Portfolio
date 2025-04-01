import React from "react";

const certificates = [
  {
    title: "Full-Stack Web Development",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Data Structures & Algorithms",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Cloud Computing Basics",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
];

const Page4 = () => {
  return (
    <div className="h-screen p-10 bg-white flex items-center justify-center">
      <div className="h-full w-full bg-black rounded-[50px] p-10 overflow-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Certificates
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-white text-xl font-semibold mt-4 text-center">
                {cert.title}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page4;
