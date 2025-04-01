import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Star } from "lucide-react";
import emailjs from "@emailjs/browser";

const FeedbackModel = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailError("Email is required.");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (!feedback) {
      alert("Please provide your feedback before submitting.");
      return;
    }

    const templateParams = {
      rating,
      feedback,
      email,
    };

    emailjs
      .send(
        "service_66rqu3z",
        "template_l0spwcq",
        templateParams,
        "TCx8l3Een6-jgPZAD"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Feedback submitted successfully!");
        setRating(0);
        setFeedback("");
        setEmail("");
        setIsOpen(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send feedback. Please try again later.");
      });

    emailjs
      .send(
        "service_66rqu3z",
        "template_tf4yy3v",
        templateParams,
        "TCx8l3Een6-jgPZAD"
      )
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send feedback. Please try again later.");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 mt-5 rounded-full text-white border-4 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          onClick={() => setIsOpen(true)}
        >
          Give Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 p-6 rounded-xl w-[90%] max-w-lg text-white shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Rate Your Experience
        </h2>
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <Star
              key={num}
              className={`w-10 h-10 cursor-pointer transition-all transform hover:scale-110 ${
                num <= rating
                  ? "fill-yellow-400 stroke-yellow-400"
                  : "fill-gray-500 stroke-gray-500"
              }`}
              onClick={() => setRating(num)}
            />
          ))}
        </div>
        <Textarea
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded-md mb-4 bg-gray-800 text-white focus:ring-2 focus:ring-green-500"
        />
        <Input
          type="email"
          required
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded-md mb-2 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
        />
        {emailError && (
          <p className="text-red-500 text-sm mb-4">{emailError}</p>
        )}
        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          onClick={handleSubmit}
        >
          Submit Feedback
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModel;
