'use client'

import { useEffect, useRef } from "react";

interface ChatMessage { // Re-defining here to ensure scope for ChatPanel if file is split
  type: 'user' | 'ai';
  text: string;
}
interface ChatPanelProps {
  chatHistory: ChatMessage[];
  // isThinking prop is no longer needed for simplified chat
}
export default function ChatPanel({ chatHistory }: ChatPanelProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null); // Type the ref

  // Scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className="flex flex-col h-[50vh] bg-gray-800 border-t border-gray-700 p-4">
      <h4 className="text-gray-200 text-lg font-semibold border-b border-gray-700 pb-2 mb-3">Conversation</h4>
      <div className="flex-1 flex flex-col space-y-3 overflow-y-auto">
        {chatHistory.length === 0 && (
          <p className="text-gray-500 text-center text-sm">Start a conversation with the AI...</p>
        )}
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg text-sm ${
                msg.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Dummy div to scroll to */}
      </div>
    </div>
  );
}