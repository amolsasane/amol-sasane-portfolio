import { useState, useEffect } from "react";

const WelcomePage = () => {
  const text = ["Hello", "Hola", "Bonjour", "こんにちは", "Ciao", "नमस्ते"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Slow fade-in only for the first text
    if (currentIndex === 0) {
      setFade(true);
      const timer = setTimeout(() => {
        setFade(false);
        setCurrentIndex(1);
      }, 2000);
      return () => clearTimeout(timer);
    }

    // Normal speed for the rest
    if (currentIndex < text.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }

    // After last text, trigger slide-up
    if (currentIndex === text.length - 1) {
      const timer = setTimeout(() => {
        setSlideUp(true); // add slide-up class
        setTimeout(() => setHidden(true), 1000); // remove completely
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text.length]);

  if (hidden) return null;

  return (
    <div
      className={`bg-gradient-to-b from-blue-800  to-black h-screen flex items-center justify-center ${
        slideUp ? "slide-up" : ""
      }`}
    >
      <h1
        className={`text-white text-5xl borel-regular transition-opacity duration-2000 ${
          fade ? "opacity-0 animate-fadeIn" : "opacity-100"
        }`}
      >
        {text[currentIndex]}
      </h1>
    </div>
  );
};

export default WelcomePage;
