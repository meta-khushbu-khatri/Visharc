import React, { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Products = () => {
  const [activeMain, setActiveMain] = useState("Fiber Laser");
  const [activeSub, setActiveSub] = useState(null);

  const menuData = {
    "Fiber Laser": {
      subs: [
        {
          name: "Professional",
          children: [{ name: "PHOTONCUT P-Series", image: image1 }],
        },
        {
          name: "Industrial",
          children: [{ name: "PHOTONCUT I-Series", image: image2 }],
        },
      ],
    },

    "CNC Router": {
      subs: [
        {
          name: "Professional",
          children: [{ name: "EXACTA P-Series", image: image2 }],
        },
        {
          name: "Industrial",
          children: [{ name: "EXACTA I-Series", image: image2 }],
        },
        { name: "Nesting", image: image2 },
        { name: "Multi Axis", image: image2 },
      ],
    },

    "CO2 LASER": {
      subs: [
        { name: "Cutting", image: image3 },
        { name: "Engraving", image: image3 },
      ],
    },
  };

  const currentSubs = menuData[activeMain].subs;

  const previewImage =
    activeSub?.children?.[0]?.image ||
    activeSub?.image ||
    currentSubs[0]?.children?.[0]?.image ||
    currentSubs[0]?.image;

  return (
    <div className="absolute left-0 top-full z-50 w-full lg:w-[1100px] bg-white shadow-2xl rounded-b-xl overflow-hidden border-t-4 border-[#FECE46]">

      <div className="flex flex-col lg:flex-row lg:h-[480px]">

        {/* Main Menu */}
        <div className="w-full lg:w-1/4 bg-gray-900 text-white p-4 lg:p-6">
          <ul className="space-y-2 lg:space-y-3">
            {Object.keys(menuData).map((main) => (
              <li key={main}>
                <button
                  onMouseEnter={() => {
                    setActiveMain(main);
                    setActiveSub(null);
                  }}
                  onClick={() => {
                    setActiveMain(main);
                    setActiveSub(null);
                  }}
                  className={`w-full flex justify-between items-center px-4 py-2 lg:py-3 rounded-lg transition
                  ${
                    activeMain === main
                      ? "bg-[#FECE46] text-black"
                      : "hover:bg-gray-800"
                  }`}
                >
                  {main}
                  <span className="text-lg">›</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sub Menu */}
        <div className="w-full lg:w-1/4 bg-gray-50 p-4 lg:p-6 border-l border-gray-200 overflow-y-auto">

          {currentSubs.map((sub) => (
            <div
              key={sub.name}
              onMouseEnter={() => setActiveSub(sub)}
              onClick={() => setActiveSub(sub)}
              className="mb-2 lg:mb-3"
            >
              <div className="flex justify-between items-center px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                <p className="font-semibold text-gray-800">{sub.name}</p>

                {sub.children && (
                  <span className="text-gray-400 text-lg">›</span>
                )}
              </div>

              {/* Third Level */}
              {sub.children && activeSub?.name === sub.name && (
                <div className="ml-4 mt-1 space-y-1">
                  {sub.children.map((child) => (
                    <p
                      key={child.name}
                      className="text-sm text-gray-600 hover:text-[#FECE46] cursor-pointer"
                    >
                      {child.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Preview */}
        <div className="w-full lg:w-2/4 p-4 lg:p-8 bg-gradient-to-br from-gray-50 to-white border-l border-gray-200 flex items-center justify-center">
          <img
            src={previewImage}
            alt="Preview"
            className="w-full max-w-md lg:max-w-full h-52 lg:h-72 object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>

      </div>
    </div>
  );
};

export default Products;