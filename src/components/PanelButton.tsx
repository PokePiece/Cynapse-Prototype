'use client'

import React from 'react';

// 1. Define the interface for your component's props
interface PanelButtonProps {
  label: string;
  active?: boolean; // 'active' is optional, defaults to false if not provided
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Click event for a button
}

// 2. Use the interface in the function component definition
function PanelButton({ label, active = false, onClick }: PanelButtonProps) {
  return (
    <button
      className={`w-full px-3 py-2 rounded-md text-sm text-left transition-colors duration-200
        ${active ? 'bg-blue-600 border border-blue-600 text-white' : 'bg-gray-700 border border-gray-600 text-gray-200 hover:bg-gray-600'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default PanelButton;