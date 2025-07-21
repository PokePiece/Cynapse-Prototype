'use client';

import { useState } from "react";


function Header() {
  const [activeButton, setActiveButton] = useState('Object Placement Generator');

  return (
    <header className="flex items-center justify-between p-3 bg-gray-800 border-b border-gray-700 min-h-12">
      {/* Traffic Lights */}
      <div className="flex space-x-2">
        
        
        
        <span className="w-3 h-3 bg-red-500 rounded-full border border-gray-600"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full border border-gray-600"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full border border-gray-600"></span>
        
      </div>
          
      {/* Center Buttons */}
      <div className="flex space-x-3">
        <button
          className={`px-4 py-2 rounded-md text-sm transition-colors duration-200
            ${activeButton === 'Object Placement Generator' ? 'bg-blue-600 border border-blue-600 text-white' : 'bg-gray-700 border border-gray-600 text-gray-200 hover:bg-gray-600'}`}
          onClick={() => setActiveButton('Object Placement Generator')}
        >
          Object Placement Generator
        </button>
        <button
          className={`px-4 py-2 rounded-md text-sm transition-colors duration-200
            ${activeButton === 'Other Tool' ? 'bg-blue-600 border border-blue-600 text-white' : 'bg-gray-700 border border-gray-600 text-gray-200 hover:bg-gray-600'}`}
          onClick={() => setActiveButton('Other Tool')}
        >
          Other Tool
        </button>
      </div>

      {/* Right User Icon */}
      <div className="text-gray-300 text-xl">
        {/* Simple user icon - replace with Lucide React icon if preferred */}
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </header>
  );
}

export default Header;