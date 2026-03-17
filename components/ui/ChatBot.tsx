"use client";

import { useState, useRef, useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { currentLanguage } = useAppContext();
  const t = useTranslation(currentLanguage);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  // Initial greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "1",
          sender: "bot",
          text: t("bot_welcome") !== "bot_welcome" ? t("bot_welcome") : `Hello! I am your AI Assistant. I can help with developmental assessments, activity translation, and platform queries in ${currentLanguage}. How can I assist you today?`
        }
      ]);
    }
    
    // When language changes, update the first message if it's open just so it feels reactive
    if (isOpen && messages.length > 0) {
      setMessages(prev => {
        const newMsgs = [...prev];
        if (newMsgs[0].sender === "bot") {
          newMsgs[0].text = t("bot_welcome") !== "bot_welcome" ? t("bot_welcome") : `Hello! I am your AI Assistant. I can help with developmental assessments, activity translation, and platform queries in ${currentLanguage}. How can I assist you today?`;
        }
        return newMsgs;
      });
    }
  }, [isOpen, currentLanguage, t, messages.length]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue
    };
    
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: getRandomResponse()
        }
      ]);
    }, 1500);
  };

  const getRandomResponse = () => {
    const responses = [
      t("bot_resp_1") !== "bot_resp_1" ? t("bot_resp_1") : "I am analyzing the latest child milestone data using our ML model. Early detection accuracy is currently running 22% higher than baseline.",
      t("bot_resp_2") !== "bot_resp_2" ? t("bot_resp_2") : `Certainly. I can translate the physical activities guide into ${currentLanguage} for you.`,
      t("bot_resp_3") !== "bot_resp_3" ? t("bot_resp_3") : "The system indicates that language stimulation activities would be highly beneficial this week. Would you like me to generate a custom 5-minute activity?",
      t("bot_resp_4") !== "bot_resp_4" ? t("bot_resp_4") : "I can certainly help with that. Let me look up the coordinator's details for you.",
      t("bot_resp_5") !== "bot_resp_5" ? t("bot_resp_5") : "I understand. I'm recording this observation into the child's developmental log using our natural language processor."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleQuickAction = (text: string) => {
    setInputValue(text);
    // Use a small timeout so state sets before sending
    setTimeout(() => {
      handleSendMessage();
    }, 50);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white shadow-xl shadow-indigo-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Assistant"
      >
        <span className="material-symbols-outlined text-3xl">smart_toy</span>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#f8f7f6]"></span>
        </span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 w-[calc(100vw-3rem)] md:w-[380px] h-[550px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right z-50 ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white flex justify-between items-center shadow-md z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">UMAANG AI</h3>
              <p className="text-[10px] text-indigo-100 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                <span className="uppercase">{currentLanguage} Bot Active</span>
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white hover:bg-white/10 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
          <div className="text-center pb-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider bg-slate-200/50 px-2 py-1 rounded-full">
              ML Delay Assessment Engine
            </span>
          </div>

          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} w-full`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 shrink-0 mr-2 mt-auto border border-indigo-200">
                  <span className="material-symbols-outlined text-sm">psychology</span>
                </div>
              )}
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.sender === 'user' ? 'bg-[#9f512d] text-white rounded-br-sm' : 'bg-white border border-slate-100 text-slate-700 rounded-bl-sm'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start w-full">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 shrink-0 mr-2 mt-auto border border-indigo-200">
                <span className="material-symbols-outlined text-sm">psychology</span>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions Base */}
        {messages.length < 3 && !isTyping && (
           <div className="px-4 pb-2 bg-slate-50 flex overflow-x-auto gap-2 no-scrollbar shrink-0">
             <button onClick={() => handleQuickAction("Run ML Assessment Scan")} className="shrink-0 text-xs font-semibold bg-white border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full hover:bg-indigo-50 shadow-sm transition-colors whitespace-nowrap">
               Run ML Assessment Scan
             </button>
             <button onClick={() => handleQuickAction(`Translate guide to ${currentLanguage}`)} className="shrink-0 text-xs font-semibold bg-white border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full hover:bg-indigo-50 shadow-sm transition-colors whitespace-nowrap">
               Translate Guide
             </button>
             <button onClick={() => handleQuickAction("Analyze Language Milestone")} className="shrink-0 text-xs font-semibold bg-white border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full hover:bg-indigo-50 shadow-sm transition-colors whitespace-nowrap">
               Analyze Milestone
             </button>
           </div>
        )}

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100 shrink-0">
          <form 
            onSubmit={handleSendMessage}
            className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1 pr-2 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-400 transition-all"
          >
            <button type="button" className="w-8 h-8 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[20px]">mic</span>
            </button>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask the assessment bot..." 
              className="flex-1 bg-transparent text-sm border-none focus:ring-0 px-2 py-2 placeholder-slate-400 text-slate-700"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center disabled:opacity-50 disabled:bg-slate-300 transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[12px]">security</span>
              Responses powered by conversational AI & ML algorithms
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
