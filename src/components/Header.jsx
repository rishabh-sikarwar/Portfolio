import React, { useState, useEffect } from "react";
import { IconButton, Drawer } from "@mui/material";
import { Menu, X } from "lucide-react";
import FeedbackModel from "./FeedbackModel";

const Header = () => {
  const [floating, setFloating] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Add menuOpen state

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setFloating(currentScrollY > 50);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-lg px-10 py-4 flex items-center transition-all duration-300 ${
          floating ? "justify-start px-5 py-2" : "justify-center"
        } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        {floating ? (
          <IconButton
            className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            onClick={() => setMenuOpen(true)} // Open menu on click
          >
            <Menu className="w-6 h-6" />
          </IconButton>
        ) : (
          <nav className="flex gap-8 uppercase font-bold">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        )}
        <div className="absolute right-5 top-4">
          <FeedbackModel />
        </div>
      </div>
      <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <div className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-4 h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Navigation</h2>
            <IconButton onClick={() => setMenuOpen(false)}>
              <X className="w-5 h-5 text-white" />
            </IconButton>
          </div>
          <nav className="flex flex-col gap-3">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
