import React , {useState, useEffect} from "react";

const Page1Bottom = () => {
  const [typedText, setTypedText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(100); // Adjust typing speed here
  const [textIndex, setTextIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);
  const texts = [
    "Merging creativity with code.",
    "Delivering seamless user experiences.",
    "Building innovative solutions.",
    "Crafting digital masterpieces.",
  ];

  useEffect(() => {
    let timeout;

    if (!isReversing) {
      if (typedText.length < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setTypedText(texts[textIndex].substring(0, typedText.length + 1));
        }, typingSpeed);
      } else if (displayText !== texts[textIndex]) {
        timeout = setTimeout(() => {
          setDisplayText(texts[textIndex]);
        }, 1000); // speed of typing .
      } else {
        timeout = setTimeout(() => {
          setIsReversing(true); // Start reversing
          setDisplayText("");
        }, 500); // Wait for half a seconds before reversing.
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, typingSpeed / 2); // Reverse faster
      } else {
        timeout = setTimeout(() => {
          setIsReversing(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 500); // Small delay before next type
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
