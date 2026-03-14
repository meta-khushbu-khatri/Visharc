import React from "react";
import logo from "../assets/logo.jpg";


const Enquiry = ({
  logo,
  title = "Have any questions?",
  subtitle = "We're happy to help!",
  phone = "+91 9216873483",
  email = "avdheshshrm707@gmail.com",
}) => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative flex items-center justify-center bg-gray-100">

          {/* Centered Image */}
          <img
            src={logo}
            alt="Enquiry"
            className="w-3/4 object-contain"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#FECE46]/90 flex flex-col justify-between p-10 text-white">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
              <p className="text-lg">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between gap-4 text-sm mt-10">
              <span>📞 {phone}</span>
              <span>✉ {email}</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 md:p-10 bg-gray-50">
          <form className="space-y-5">

            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your First Name *" className="input-style" />
              <input type="text" placeholder="Your Last Name *" className="input-style" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <select className="input-style">
                <option>All Countries *</option>
                <option>India</option>
                <option>UK</option>
              </select>

              <input type="tel" placeholder="Your Telephone" className="input-style" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder="Your E-Mail *" className="input-style" />
              <input type="text" placeholder="Your Company" className="input-style" />
            </div>

            <textarea
              rows="4"
              placeholder="Your Message for Us"
              className="input-style w-full"
            />

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-900 text-white px-10 py-3 rounded-full font-semibold transition"
              >
                Send
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting this form, you accept our privacy policy
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;