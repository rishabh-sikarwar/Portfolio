import React, { useState, useEffect } from "react";

const Page1Bottom = () => {
  const [typedText, setTypedText] = useState(""); // Current typed text
  const [displayText, setDisplayText] = useState(""); // Fully typed text
  const [typingSpeed, setTypingSpeed] = useState(120); // Adjust typing speed here for smoother typing
  const [textIndex, setTextIndex] = useState(0); // Tracks current text index
  const [isReversing, setIsReversing] = useState(false); // Flag to determine if text is being erased
  const texts = [
    "Merging creativity with code.",
    "Delivering seamless user experiences.",
    "A Dark Mode Coder.",
    "Crafting digital masterpieces.",
  ];

  useEffect(() => {
    let timeout;

    if (!isReversing) {
      // If we are not in the reversing state, type the next character
      if (typedText.length < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setTypedText(texts[textIndex].substring(0, typedText.length + 1));
        }, typingSpeed);
      } else if (displayText !== texts[textIndex]) {
        timeout = setTimeout(() => {
          setDisplayText(texts[textIndex]);
        }, 1000); // Speed after typing the full text (can adjust)
      } else {
        timeout = setTimeout(() => {
          setIsReversing(true); // Start reversing (erasing text)
          setDisplayText("");
        }, 500); // Small delay before reversing
      }
    } else {
      // Reversing (erasing) text
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, typingSpeed * 0.5); // Speed of erasing (half the typing speed)
      } else {
        timeout = setTimeout(() => {
          setIsReversing(false); // Start typing again after erasing
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 500); // Small delay before typing the next text
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, displayText, textIndex, texts, typingSpeed, isReversing]);

  return (
    <div className="text-white text-3xl text-center mt-10">
      <h2>
        {typedText || displayText}
        <span className="inline-block w-1 bg-white ml-1 animate-pulse">
          &nbsp;
        </span>
      </h2>
    </div>
  );
};

export default Page1Bottom;
