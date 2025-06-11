import React from 'react';
import { MessageSquare, Users, Shield, Smartphone, Globe, Heart, Bell, Newspaper } from 'lucide-react';
import { Language } from '../types';
import NewsUpdates from './NewsUpdates';

interface WelcomeScreenProps {
  language: Language;
  onStartChat: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ language, onStartChat }) => {
  const isHindi = language === 'hi';
  
  const quickQuestions = isHindi 
    ? [
        'मुझे कृषि योजनाओं के बारे में बताएं',
        'आवास योजनाओं की जानकारी चाहिए',
        'स्वास्थ्य बीमा योजनाएं दिखाएं',
        'व्यवसाय के लिए लोन कैसे मिलेगा?'
      ]
    : [
        'Tell me about agriculture schemes',
        'I need information about housing schemes',
        'Show me health insurance schemes',
        'How can I get a business loan?'
      ];
  
  const features = isHindi 
    ? [
        { icon: MessageSquare, title: 'AI सहायक', desc: 'स्मार्ट चैटबॉट जो आपके सवालों का जवाब देता है' },
        { icon: Globe, title: 'बहुभाषी', desc: 'हिंदी और अंग्रेजी में उपलब्ध' },
        { icon: Shield, title: 'सुरक्षित', desc: 'आपकी व्यक्तिगत जानकारी सुरक्षित रहती है' },
        { icon: Smartphone, title: 'सभी डिवाइस', desc: 'मोबाइल और कंप्यूटर दोनों पर काम करता है' },
        { icon: Bell, title: 'तत्काल अपडेट', desc: 'नई योजनाओं की तुरंत जानकारी' },
        { icon: Newspaper, title: 'ताज़ा समाचार', desc: 'सरकारी योजनाओं के नवीनतम समाचार' }
      ]
    : [
        { icon: MessageSquare, title: 'AI Assistant', desc: 'Smart chatbot that answers your questions' },
        { icon: Globe, title: 'Multilingual', desc: 'Available in Hindi and English' },
        { icon: Shield, title: 'Secure', desc: 'Your personal information remains safe' },
        { icon: Smartphone, title: 'All Devices', desc: 'Works on both mobile and computer' },
        { icon: Bell, title: 'Instant Updates', desc: 'Get notified about new schemes immediately' },
        { icon: Newspaper, title: 'Latest News', desc: 'Stay updated with government scheme news' }
      ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full shadow-lg">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {isHindi ? 'सारथी' : 'Saarthi'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {isHindi 
                ? 'आपका AI-संचालित सरकारी योजना सहायक। सरकारी योजनाओं, वेबसाइटों और वित्तीय सहायता की जानकारी पाएं।'
                : 'Your AI-powered government schemes assistant. Discover government schemes, websites, and financial aid with ease.'
              }
            </p>
            <button
              onClick={onStartChat}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {isHindi ? 'चैट शुरू करें' : 'Start Chatting'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isHindi ? 'मुख्य विशेषताएं' : 'Key Features'}
            </h2>
            <p className="text-lg text-gray-600">
              {isHindi 
                ? 'सारथी की विशेषताएं जो आपकी मदद करती हैं'
                : 'Features that make Saarthi your perfect assistant'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* News and Quick Questions Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* News Updates */}
            <NewsUpdates language={language} />
            
            {/* Quick Questions */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {isHindi ? 'आम सवाल' : 'Popular Questions'}
                </h2>
                <p className="text-blue-100">
                  {isHindi 
                    ? 'इन सवालों से शुरुआत करें'
                    : 'Get started with these common questions'
                  }
                </p>
              </div>
              <div className="space-y-3">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => onStartChat()}
                    className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-lg text-left transition-all duration-200 hover:transform hover:scale-105"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-lg text-gray-600">
                {isHindi ? 'सरकारी योजनाएं' : 'Government Schemes'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-lg text-gray-600">
                {isHindi ? 'सरकारी वेबसाइटें' : 'Government Websites'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-lg text-gray-600">
                {isHindi ? 'उपलब्ध सेवा' : 'Available Service'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-lg text-gray-600">
                {isHindi ? 'भाषाओं में' : 'Languages Supported'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;