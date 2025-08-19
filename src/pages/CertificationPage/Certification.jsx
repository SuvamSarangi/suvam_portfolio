import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Certificates } from "./certificate";
const Certification = () => {
    const slides = Certificates; // use your imported array

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Animation variants
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };
  return (
   <div className="relative w-full h-screen mx-auto overflow-hidden bg-black">
  <h2 className="text-white text-center text-3xl md:text-4xl mt-10 mb-8">
    Certification
  </h2>

  <div className="relative w-full h-[70vh]">
    <AnimatePresence custom={direction}>
      <motion.div
        key={slides[index].image}
        className="absolute w-full h-full flex items-center justify-center"
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <img
          src={slides[index].image}
          alt={`Certificate ${index + 1}`}
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Buttons */}
  <button
    onClick={prevSlide}
    className="absolute left-4 md:left-1/5 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded shadow"
  >
    ◀
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 md:right-1/5 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded shadow"
  >
    ▶
  </button>
</div>
  );
};

export default Certification;
