'use client'

interface ViewportProps {
  isChatVisible: boolean;
}
export default function Viewport({ isChatVisible }: ViewportProps) {
  return (
    <main className={`h-full bg-gray-900 border-2 border-blue-600 relative flex items-center justify-center overflow-hidden ${isChatVisible ? 'flex-grow-[0.7]' : 'flex-1'}`}>
      {/* 3D Scene Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xl">
        <p>3D Scene Placeholder</p>
        {/* Dummy Object (Central Cube/Machinery) */}
        <div className="absolute w-48 h-36 bg-gray-400 rounded-md border border-gray-500 shadow-lg flex flex-col justify-evenly items-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="w-4/5 h-3 bg-red-600 rounded-sm"></div>
            <div className="w-4/5 h-3 bg-red-600 rounded-sm"></div>
        </div>
        {/* Dummy Table/Laptop */}
        <div className="absolute w-40 h-24 bg-gray-600 rounded-md border border-gray-700 shadow-md bottom-16 left-1/4 transform -rotate-x-12">
            <div className="absolute w-20 h-12 bg-gray-500 rounded-sm top-[-10px] left-1/2 -translate-x-1/2 transform -rotate-y-6 -rotate-x-12 border border-gray-600"></div>
        </div>
      </div>

      {/* Viewport Controls (Top Right) */}
      <div className="absolute top-3 right-3 flex space-x-1">
        <button className="px-2 py-1 bg-gray-700 text-gray-200 rounded-md text-lg hover:bg-gray-600 transition-colors duration-200 border border-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize-2">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" x2="14" y1="3" y2="10" />
            <line x1="3" x2="10" y1="21" y2="14" />
          </svg>
        </button>
      </div>
    </main>
  );
}