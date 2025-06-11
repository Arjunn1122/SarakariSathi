import React, { useState, useEffect, useRef } from 'react';
import { Message, Language } from '../types';
import { generateBotResponse } from '../utils/chatbot';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { ArrowLeft, Bot } from 'lucide-react';

interface ChatInterfaceProps {
  language: Language;
  onBack: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ language, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  useEffect(() => {
    // Welcome message
    const welcomeMessage: Message = {
      id: '1',
      text: language === 'hi' 
        ? 'नमस्ते! मैं सारथी हूँ। मैं आपको सरकारी योजनाओं और वित्तीय सहायता के बारे में जानकारी देने में मदद करूंगा। आप मुझसे कृषि, आवास, स्वास्थ्य या व्यवसाय संबंधी योजनाओं के बारे में पूछ सकते हैं।'
        : 'Hello! I\'m Saarthi. I\'ll help you discover government schemes and financial aid. You can ask me about agriculture, housing, healthcare, or business schemes.',
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [language]);
  
  const handleSendMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      const response = generateBotResponse(messageText, language);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        schemes: response.schemes
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">
                {language === 'hi' ? 'सारथी' : 'Saarthi'}
              </h1>
              <p className="text-sm text-gray-500">
                {isTyping 
                  ? (language === 'hi' ? 'टाइप कर रहा है...' : 'Typing...')
                  : (language === 'hi' ? 'ऑनलाइन' : 'Online')
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              language={language}
            />
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input */}
      <ChatInput
        onSendMessage={handleSendMessage}
        language={language}
        disabled={isTyping}
      />
    </div>
  );
};

export default ChatInterface;