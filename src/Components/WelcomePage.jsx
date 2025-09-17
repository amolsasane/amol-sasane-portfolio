import { useState, useEffect } from "react";

const WelcomePage = () => {
  const text = ["Hello", "Hola", "Bonjour", "こんにちは", "Ciao", "नमस्ते"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text.length]);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <h1 className="text-white text-4xl">{text[currentIndex]}</h1>
    </div>
  );
};

export default WelcomePage;
