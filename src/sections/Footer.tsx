'use client'

import { useState } from "react";

interface FooterProps {
  onSendMessage: (message: string) => void;
  toggleChat: () => void;
  // isThinking prop is no longer needed
}
export default function Footer({ onSendMessage, toggleChat }: FooterProps) {
  const [command, setCommand] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSendMessage(command);
      setCommand(''); // Clear input after sending
    }
  };

  return (
    <footer className="flex items-center justify-between p-3 bg-gray-800 border-t border-gray-700 min-h-12">
      {/* Command Input */}
      <div className="flex-grow mr-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter command..."
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={toggleChat}
          className="px-3 py-2 bg-gray-700 text-gray-200 rounded-md text-sm hover:bg-gray-600 transition-colors duration-200 border border-gray-600 flex items-center justify-center"
          title="Toggle Chat History"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </button>
      </div>

      {/* Performance Info */}
      <div className="font-mono text-red-500 font-bold text-sm">
        <span>FPS: 120</span>
      </div>
    </footer>
  );
}