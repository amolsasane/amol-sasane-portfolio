import { useState, useEffect } from "react";

const WelcomePage = () => {
  const text = ["Hello", "Hola", "Bonjour", "こんにちは", "Ciao", "नमस्ते"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Slow fade-in only for the first text
    if (currentIndex === 0) {
      setFade(true);
      const timer = setTimeout(() => {
        setFade(false);
        setCurrentIndex(1); // move to the next after fade-in
      }, 2000); // slow delay for first text
      return () => clearTimeout(timer);
    }

    // Normal speed for the rest
    if (currentIndex < text.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200); // fast transition
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text.length]);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <h1
        className={`text-white text-4xl transition-opacity duration-2000 ${
          fade ? "opacity-0 animate-fadeIn" : "opacity-100"
        }`}
      >
        {text[currentIndex]}
      </h1>
    </div>
  );
};

export default WelcomePage;
