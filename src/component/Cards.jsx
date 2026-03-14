import React from "react";
import { motion } from "framer-motion";

const Cards = ({ title, description, imageUrl, link = "#" }) => {
  return (

    <motion.div
      className="
        group relative bg-white rounded-2xl overflow-hidden shadow-xl
        hover:shadow-2xl transition-all duration-300 cursor-pointer
        border border-gray-200 flex flex-col w-full
      "
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="
            w-full h-full object-cover
            group-hover:scale-110 transition-transform duration-700 ease-out
          "
        />

        <div
          className="
            absolute inset-0 bg-gradient-to-t from-black/50 via-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-gray-700 text-sm md:text-base mb-6 flex-grow">
          {description}
        </p>

        <a
          href={link}
          className="
            inline-flex items-center justify-center px-6 py-3
            bg-[#FECE46] text-white font-semibold text-base
            rounded-xl shadow-lg
            transition-all duration-300 transform hover:scale-105
            hover:bg-yellow-500
          "
        >
          Explore
        </a>
      </div>
    </motion.div>
  );
};

export default Cards;