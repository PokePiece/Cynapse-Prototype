'use client'

import { useState } from "react";
import PanelButton from "./PanelButton";


function LeftPanel() {
  const [activeOption, setActiveOption] = useState('Active Option');

  return (
    <aside className="w-56 bg-gray-800 border-r border-gray-700 p-4 flex flex-col space-y-4 overflow-y-auto">
      <div className="flex flex-col space-y-2">
        <PanelButton label="Option 1" active={activeOption === 'Option 1'} onClick={() => setActiveOption('Option 1')} />
        <PanelButton label="Option 2" active={activeOption === 'Option 2'} onClick={() => setActiveOption('Option 2')} />
        <PanelButton label="Active Option" active={activeOption === 'Active Option'} onClick={() => setActiveOption('Active Option')} />
        <PanelButton label="Option 4" active={activeOption === 'Option 4'} onClick={() => setActiveOption('Option 4')} />
        <PanelButton label="Option 5" active={activeOption === 'Option 5'} onClick={() => setActiveOption('Option 5')} />
        <PanelButton label="Option 6" active={activeOption === 'Option 6'} onClick={() => setActiveOption('Option 6')} />
      </div>

      {/* Add more sections as needed */}
      <div className="mt-auto pt-4 border-t border-gray-700"> {/* Use mt-auto to push to bottom */}
        <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-md font-bold text-sm hover:bg-blue-700 transition-colors duration-200">
          Generate
        </button>
      </div>
    </aside>
  );
}

export default LeftPanel;