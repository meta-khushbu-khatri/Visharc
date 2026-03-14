import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/background.png";
import img2 from "../assets/product_image2.png";
import img3 from "../assets/product_image3.jpeg";

const images = [img1, img2, img3];

function Herosection() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex(([prev]) => [
      (prev + dir + images.length) % images.length,
      dir,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] overflow-hidden flex items-center justify-center">

      {/* Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
          Welcome to Visharc CNC
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
          We sell precision CNC Machines and ingenuity
        </p>

        <a
          href="/products"
          className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#FECE46] text-black font-bold rounded-full hover:bg-yellow-400 transition text-sm sm:text-base md:text-lg"
        >
          Explore Our Machines →
        </a>

      </div>

      {/* Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-3 sm:left-6 text-white text-2xl sm:text-3xl md:text-4xl z-20 hover:scale-110 transition"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-3 sm:right-6 text-white text-2xl sm:text-3xl md:text-4xl z-20 hover:scale-110 transition"
      >
        &#10095;
      </button>

    </div>
  );
}

export default Herosection;