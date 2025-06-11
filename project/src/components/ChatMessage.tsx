import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message, Language } from '../types';
import SchemeCard from './SchemeCard';
import WebsiteCard from './WebsiteCard';

interface ChatMessageProps {
  message: Message;
  language: Language;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, language }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4 animate-fade-in`}>
      <div className={`flex max-w-4xl ${isBot ? 'flex-row' : 'flex-row-reverse'} space-x-3`}>
        <div className={`flex-shrink-0 ${isBot ? 'order-1' : 'order-2'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isBot ? 'bg-blue-600' : 'bg-gray-600'
          }`}>
            {isBot ? (
              <Bot className="h-4 w-4 text-white" />
            ) : (
              <User className="h-4 w-4 text-white" />
            )}
          </div>
        </div>
        
        <div className={`${isBot ? 'order-2' : 'order-1'} ${isBot ? 'mr-3' : 'ml-3'}`}>
          <div className={`rounded-2xl px-4 py-3 ${
            isBot 
              ? 'bg-gray-100 text-gray-900' 
              : 'bg-blue-600 text-white'
          }`}>
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {message.text}
            </p>
          </div>
          
          {message.schemes && message.schemes.length > 0 && (
            <div className="mt-4 space-y-4">
              <h4 className="font-semibold text-gray-900">
                {language === 'hi' ? 'संबंधित योजनाएं:' : 'Related Schemes:'}
              </h4>
              {message.schemes.map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  language={language}
                />
              ))}
            </div>
          )}
          
          {message.websites && message.websites.length > 0 && (
            <div className="mt-4 space-y-4">
              <h4 className="font-semibold text-gray-900">
                {language === 'hi' ? 'संबंधित वेबसाइटें:' : 'Related Websites:'}
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {message.websites.map((website) => (
                  <WebsiteCard
                    key={website.id}
                    website={website}
                    language={language}
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-1">
            <span className={`text-xs ${isBot ? 'text-gray-500' : 'text-gray-400'}`}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;