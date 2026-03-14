// Example: Pages/Machines.jsx or in Navbar / Home
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Enquiry from '../component/Enquiry ';
// import Modal from '../component/Modal'; // adjust path

const Techicalsupport = () => {
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Your sidebar / menu */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Menu categories (like HOMAG sidebar) */}
          <aside className="w-full md:w-80 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Machines</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-600">CNC Machining Centers</a></li>
              <li><a href="#" className="hover:text-blue-600">Edge Banders & Tenoners</a></li>
              {/* ... more items */}
            </ul>
          </aside>

          {/* Right: Machine Finder section */}
          <div className="flex-1">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                
                <Enquiry/>
              </div>

              <p className="text-lg text-gray-600 mb-8">
              </p>

              <button
                onClick={() => setIsFinderOpen(true)}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-md"
              >
                Open the Machine Finder
              </button>
            </div>

            {/* Theme Worlds section (like the rounded buttons) */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-blue-600 text-3xl">✦</span> Our Theme Worlds
              </h3>
             
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors">
                  Digitalization
                </button>
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors">
                  Automation
                </button>
                {/* Add more */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* The Popup/Modal */}
      {/* <Modal
        isOpen={isFinderOpen}
        onClose={() => setIsFinderOpen(false)}
        title="Machine Finder"
      >
        {/* Content inside the popup - make it step-by-step later */}
        <div className="text-center py-10">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Welcome to the Machine Finder
          </h3>
          <p className="text-lg text-gray-600 mb-10">
            Answer a few questions step by step and find the perfect machine for your needs.
          </p>

          {/* Placeholder for steps / form / wizard */}
          <div className="max-w-md mx-auto">
            <button className="w-full py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Start the Wizard
            </button>
          </div>
        </div>
      {/* </Modal> */} */
    </div>
  );
};

export default Techicalsupport;