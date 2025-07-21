'use client'

import { useState } from "react";
import InputGroup from "../components/InputGroup";

interface RightPanelProps {
  tokensUsed: string;
  tokenStats: TokenStats | null;
}

interface TokenStats {
  daily_limit: number;
  tokens_used_today: number;
  tokens_remaining: number;
  estimated_responses_left: number;
}


function RightPanel({ /*tokensUsed,*/ tokenStats }: RightPanelProps) {
  const [position, setPosition] = useState({ x: 0.00, y: 0.00, z: 0.00 });
  const [material, setMaterial] = useState('Default Material');
  const [color, setColor] = useState('#ffffff');

  const { /* estimated_responses_left, */ } = tokenStats || {};


  const handleResetMemory = async () => {
    try {

      //For production
      
      const res = await fetch("https://scomaton-backend.onrender.com/reset-memory", {
        method: "POST"
      });
      

      //For development
      /*
      const res = await fetch("http://localhost:8000/reset-memory", {
        method: "POST"
      });
      */

      const data = await res.json();
      console.log("Memory reset:", data.message);
    } catch (err) {
      console.error("Failed to reset memory:", err);
    }
  };

  return (
    <aside className="w-64 bg-gray-800 border-l border-gray-700 p-4 flex flex-col space-y-6 overflow-y-auto">
      {/* Transform Section */}
      <div className="panel-section">
        <h4 className="text-gray-200 text-lg font-semibold border-b border-gray-700 pb-2 mb-3">Transform</h4>
        <InputGroup label="Position X:" type="number" value={position.x} onChange={(e) => setPosition({ ...position, x: parseFloat(e.target.value) })} />
        <InputGroup label="Position Y:" type="number" value={position.y} onChange={(e) => setPosition({ ...position, y: parseFloat(e.target.value) })} />
        <InputGroup label="Position Z:" type="number" value={position.z} onChange={(e) => setPosition({ ...position, z: parseFloat(e.target.value) })} />
      </div>

      {/* Material Section */}
      <div className="panel-section">
        <h4 className="text-gray-200 text-lg font-semibold border-b border-gray-700 pb-2 mb-3">Material</h4>
        <select
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        >
          <option>Default Material</option>
          <option>Shiny Metal</option>
          <option>Matte Plastic</option>
        </select>
        <InputGroup label="Color:" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>

      {/* View Section */}
      <div className="panel-section">
        <h4 className="text-gray-200 text-lg font-semibold border-b border-gray-700 pb-2 mb-3">View</h4>
        <button className="w-full px-3 py-2 bg-blue-700 text-gray-200 rounded-md text-sm text-left hover:bg-gray-600 transition-colors duration-200 border border-gray-600">
          Tokens Used {/*tokensUsed*/}
        </button>
        <button className="w-full px-3 py-2 bg-green-700 text-gray-200 rounded-md text-sm text-left hover:bg-gray-600 transition-colors duration-200 border border-gray-600">
          <p>Daily Est. Prompts {/*estimated_responses_left*/}</p>
        </button>
        <button
          onClick={handleResetMemory}
          className="w-full px-3 py-2 bg-red-700 hover:bg-red-600 text-white rounded-md text-sm text-left transition-colors duration-200 border border-red-600"
        >
          Reset Memory
        </button>
      </div>
    </aside>
  );
}

export default RightPanel;