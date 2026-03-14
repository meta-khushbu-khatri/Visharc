import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Scollersection from "../component/Scollersection";
import product_cncrouter from "../assets/cnc.png";
import product_image2 from "../assets/product_image2.png";
import product_image3 from "../assets/product_image3.jpeg";
import Cards from "../component/Cards";
import Herosection from "../component/Herosection";
import Fabrication from "../assets/Fabrication.webp";
import metalSignage from "../assets/metal Signage.webp";
import Sheetmetal from "../assets/Sheet metal work.webp";
import MetalFaced from "../assets/Metal Faced.webp";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      {/* Hero Section */}
      <Herosection />

      {/* Product Series Section */}
      <div className="py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">

          <div className="text-center py-10 px-2">

            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Machines
            </motion.h2>

            <motion.div
              className="h-1 bg-[#FECE46] mx-auto rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "140px" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            <Cards
              title="Fiber laser on CNC router"
              description="High-precision fiber laser integration for CNC routers designed for fast, accurate and efficient material processing."
              imageUrl={product_cncrouter}
              link="/products/Fiber laser"
            />

            <Cards
              title="CNC router"
              description="Advanced CNC router system designed for precision cutting and engraving."
              imageUrl={product_image2}
              link="/products/CNC"
            />

            <Cards
              title="CO2 LASER"
              description="CO2 laser technology suitable for detailed engraving and cutting applications."
              imageUrl={product_image3}
              link="/products/CO2 LASER"
            />

          </div>

        </div>
      </div>

      {/* Scroll Sections */}
      <div className="text-center py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gray-100 overflow-hidden">

        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Application of CNC Router
        </motion.h2>

        <motion.div
          className="h-1 bg-[#FECE46] mx-auto rounded"
          initial={{ width: 0 }}
          whileInView={{ width: "140px" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <Scollersection
          imageUrl={Fabrication}
          title="Fabrication on CNC router"
          highlight="High-speed, high-precision."
          description="Fabrication on CNC routers ensures precise cutting, shaping, and machining of various materials. Designed for high accuracy and smooth finishing, it supports efficient production workflows. Ideal for metal, wood, acrylic, and composite material processing. CNC router fabrication enhances productivity while maintaining consistent quality. Built for durability and reliable performance in industrial environments."
        />

        <Scollersection
          imageUrl={metalSignage}
          title="Metal Signage on CNC router"
          highlight="Power."
          description="Metal signage crafted on CNC routers delivers precise cutting, engraving, and detailing for premium finishes. Advanced CNC technology ensures clean edges, sharp lettering, and consistent quality. Suitable for stainless steel, aluminum, brass, and other metals. Ideal for commercial branding, architectural signage, and custom design applications. Engineered for durability, accuracy, and long-lasting visual impact"
          reverse={true}
        />

        <Scollersection
          imageUrl={Sheetmetal}
          title="Sheet metal on CNC router"
          highlight="Precision."
          description="CNC technology enables precise cutting and detailing for exterior metal façade applications. It delivers clean finishes, accurate patterns, and consistent structural integrity. Suitable for aluminum panels, stainless steel sheets, and architectural cladding materials. Ideal for modern building exteriors, decorative panels, and structural facades. Engineered for durability, weather resistance, and long-lasting performance."
        />

        <Scollersection
          imageUrl={MetalFaced}
          title="Metal Faced (Exterior)"
          highlight=""
          description="CNC technology enables precise cutting and detailing for exterior metal façade applications."
          reverse={true}
        />

      </div>

      <Footer />

    </div>
  );
}

export default Home;