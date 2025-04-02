import React from "react";
import FeedbackModel from "../components/FeedbackModel"
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
    <div className="h-screen flex flex-col items-center justify-center text-white p-10 rounded-[50px] ">
      <h1 className="text-5xl font-bold mb-6 text-[#399162]">Contact Me</h1>
      <p className="text-lg text-gray-400 mb-8">
        Let's connect and build something amazing!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        <a
          href="https://www.linkedin.com/in/rishabhsikarwar"
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
          href="https://leetcode.com/u/Rishabh_sikarwar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center hover:text-[#FFA116] transition-all duration-300"
        >
          <SiLeetcode size={40} />
          <span className="mt-2">LeetCode</span>
        </a>

        <a
          href="mailto:rishabhsikarwar1000@gmailcom"
          className="flex flex-col items-center text-center hover:text-red-400 transition-all duration-300"
        >
          <FaEnvelope size={40} />
          <span className="mt-2">Email</span>
        </a>

        <a
          href="tel:+917771977087"
          className="flex flex-col items-center text-center hover:text-green-400 transition-all duration-300"
        >
          <FaPhone size={40} />
          <span className="mt-2">Phone</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1VWkC0cJOGt6YCZTuH-18DFS4iK43Kpj2/view?usp=sharing"
          target="_blank"
          className="flex flex-col items-center text-center hover:text-blue-400 transition-all duration-300"
        >
          <FaFileAlt size={40} />
          <span className="mt-2">Resume</span>
        </a>
      </div>
      {/* Feedback Button */}
      <div className="pt-20">
        {" "}
        {/* Only make it absolute on medium screens */}
        <FeedbackModel />
      </div>
    </div>
  );
};

export default Contact;
