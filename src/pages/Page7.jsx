import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaCode,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white p-10 rounded-[50px]">
      <h1 className="text-5xl font-bold mb-6 text-[#399162]">Contact Me</h1>
      <p className="text-lg text-gray-400 mb-8">
        Let's connect and build something amazing!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        <a
          href="https://www.linkedin.com/in/rishabh-sikarwar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center hover:text-[#0A66C2] transition-all duration-300"
        >
          <FaLinkedin size={40} />
          <span className="mt-2">LinkedIn</span>
        </a>

        <a
          href="https://github.com/rishabh-sikarwar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center hover:text-gray-400 transition-all duration-300"
        >
          <FaGithub size={40} />
          <span className="mt-2">GitHub</span>
        </a>

        <a
          href="https://leetcode.com/rishabh-sikarwar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center hover:text-[#FFA116] transition-all duration-300"
        >
          <SiLeetcode size={40} />
          <span className="mt-2">LeetCode</span>
        </a>

        <a
          href="mailto:rishabh.sikarwar@example.com"
          className="flex flex-col items-center text-center hover:text-red-400 transition-all duration-300"
        >
          <FaEnvelope size={40} />
          <span className="mt-2">Email</span>
        </a>

        <a
          href="tel:+91XXXXXXXXXX"
          className="flex flex-col items-center text-center hover:text-green-400 transition-all duration-300"
        >
          <FaPhone size={40} />
          <span className="mt-2">Phone</span>
        </a>

        <a
          href="/Rishabh-Sikarwar-Resume.pdf"
          download
          className="flex flex-col items-center text-center hover:text-blue-400 transition-all duration-300"
        >
          <FaFileAlt size={40} />
          <span className="mt-2">Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
