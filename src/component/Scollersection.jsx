// src/component/ScrollSection.jsx

import React from "react";
import { motion } from "framer-motion";

const ScrollSection = ({
  imageUrl,
  title,
  highlight,
  description,
  reverse = false,
}) => {
  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Image */}
        <motion.div
          className={`${reverse ? "md:order-2" : "md:order-1"}`}
          initial={{ x: reverse ? 120 : -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className={`${reverse ? "md:order-1" : "md:order-2"}`}
          initial={{ x: reverse ? -120 : 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            {title}
            <span className="text-[#FECE46]"> {highlight}</span>
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default ScrollSection;