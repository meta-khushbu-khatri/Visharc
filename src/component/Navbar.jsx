// components/Navbar.jsx
import React, { useState } from "react";
import { FaSearch, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import Products from "./Products";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm relative">

      <div className="max-w-[1400px] mx-auto px-4">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-36 md:w-44" src={logo} alt="logo" />
          </div>

          {/* Desktop Menu (CENTER) */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8">

            <a href="/Home" className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-lg font-bold transition hover:bg-gray-800">
              Home
            </a>

            <div className="relative group">
              <button className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-lg font-bold transition hover:bg-gray-800">
                Products
              </button>

              <div className="hidden group-hover:block absolute top-full left-0">
                <Products />
              </div>
            </div>

            <a
              href="/Techicalsupport"
              className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-lg font-bold transition hover:bg-gray-800"
            >
              Technical Support
            </a>



            <a
              href="/Home"
              className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-lg font-bold transition hover:bg-gray-800"
            >
              About us
            </a>

            <a
              href="/Home"
              className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-lg font-bold transition hover:bg-gray-800"
            >
              Events
            </a>

          </nav>

          {/* Phone Icon RIGHT */}
          <div className="flex items-center">
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaPhoneAlt size={20} />
            </a>
          </div>

        </div>

       
        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden absolute left-0 top-16 w-56 bg-white shadow-xl rounded-b-sm py-4 z-50 border border-gray-200
  transition-all duration-300 ease-in-out transform
  ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >

          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Home
          </a>

          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Products
          </a>

          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Technical Support
          </a>

          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            About us
          </a>

          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Events
          </a>

        </div>

      </div>

    </header>
  );
};

export default Navbar;