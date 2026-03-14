// src/component/Footer.jsx
import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">

      {/* Main Footer */}
      <div className="w-full py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Column 1 */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">
                VISHARC CNC
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Plot No 15, Manak Nagar,<br />
                Bhadarwa Bera, Mata Ka Than,<br />
                Jodhpur, Rajasthan 342304
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>

              <ul className="space-y-3 text-sm sm:text-base">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/Company" className="hover:text-white transition">
                    Company
                  </a>
                </li>

                <li>
                  <a href="/Machine" className="hover:text-white transition">
                    Machines
                  </a>
                </li>

                <li>
                  <a href="/Software" className="hover:text-white transition">
                    Software
                  </a>
                </li>

                <li>
                  <a href="/Service" className="hover:text-white transition">
                    Service
                  </a>
                </li>

                <li>
                  <a href="/Career" className="hover:text-white transition">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-white mb-6">
                Connect With Us
              </h4>

              <div className="flex justify-center sm:justify-start gap-5 mb-6">

                <a
                  href="https://www.youtube.com/@visharccnc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600 transition text-3xl"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://www.instagram.com/visharc_com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-600 transition text-3xl"
                >
                  <FaInstagram />
                </a>

              </div>

              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} VISHARC CNC.<br />
                All rights reserved.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-center text-sm text-gray-500">
          Designed & Developed with passion in Jodhpur
        </div>
      </div>

    </footer>
  );
};

export default Footer;