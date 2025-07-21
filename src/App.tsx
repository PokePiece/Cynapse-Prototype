import Header from "./sections/Header";
import LeftPanel from "./components/LeftPanel";
import Viewport from "./components/Viewport";
import RightPanel from "./components/RightPanel";
import Footer from "./sections/Footer";
import { useEffect, useState } from "react";
import ChatPanel from "./components/ChatPanel";

interface TokenStats {
  daily_limit: number;
  tokens_used_today: number;
  tokens_remaining: number;
  estimated_responses_left: number;
}

function App() {
  // Define the type for chat messages
  interface ChatMessage {
    type: 'user' | 'ai';
    text: string;
  }

  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isChatVisible, setIsChatVisible] = useState<boolean>(false);
  // isThinking state is removed as AI interaction is now simulated and instant

  const [tokenStats, setTokenStats] = useState<TokenStats | null>(null);
  const [tokensUsed, setTokensUsed] = useState("0");


  const fetchDailyTokenStats = async () => {
    try {
      //const response = await fetch("http://localhost:8000/daily-tokens");
      const response = await fetch("https://scomaton-backend.onrender.com/daily-tokens")
      const data = await response.json();
      setTokenStats(data);
    } catch (err) {
      console.error("Failed to fetch daily token stats:", err);
      setTokenStats(null);
    }
  };

  const fetchTokenStats = async () => {
    try {
      const response = await fetch("https://scomaton-backend.onrender.com/usage-stats");
      //const response = await fetch("http://localhost:8000/usage-stats");
      const data = await response.json();
      setTokensUsed(data.total_tokens || "0");
    } catch (err) {
      console.error("Failed to fetch token stats:", err);
      setTokensUsed("Error");
    }
  };

  useEffect(() => {
    fetchTokenStats(); // ⏱ fetch tokens once when app starts
    fetchDailyTokenStats();
  }, []);


  // Function to send message (now with filler AI response)
  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    async function sendMessageToAI(userMessage: string) {

      //For production
      
      const response = await fetch("https://scomaton-backend.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        //body: JSON.stringify({ prompt: userMessage })
        body: JSON.stringify({ prompt: userMessage, max_tokens: 1000, tag: "scomaton-general-chat" })
      });
      

      //For development
      /*
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        //body: JSON.stringify({ prompt: userMessage })
        body: JSON.stringify({ prompt: userMessage, max_tokens: 1000, tag: "general-chatbot" })
      });
      */

      const data = await response.json();
      return data.response;
    }


    // Add user message to history
    const newUserMessage: ChatMessage = { type: 'user', text: message };
    setChatHistory((prev) => [...prev, newUserMessage]);

    // Simulate AI response with filler text after a short delay
    setTimeout(async () => {
      //const aiResponseText = `AI: Thanks for your message: "${message}". This is a placeholder response.`;
      const aiResponseText = await sendMessageToAI(message);
      const aiMessage: ChatMessage = { type: 'ai', text: aiResponseText };
      setChatHistory((prev) => [...prev, aiMessage]);

      await fetchTokenStats();
      await fetchDailyTokenStats(); 
    }, 500); // Simulate a small delay for response
  };

  // Toggle chat visibility
  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gray-900 font-inter">
      <div className="flex flex-col w-[100vw] h-[100vh] bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <LeftPanel />
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <Viewport isChatVisible={isChatVisible} />
            </div>
            {isChatVisible && (
              <ChatPanel chatHistory={chatHistory} />
            )}
          </div>
          <RightPanel tokensUsed={tokensUsed} tokenStats={tokenStats} />
        </div>
        <Footer onSendMessage={handleSendMessage} toggleChat={toggleChat} />
      </div>
    </div>
  );
}

export default App;