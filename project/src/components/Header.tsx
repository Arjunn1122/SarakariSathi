import React from 'react';
import { Languages, MessageSquare, Globe, Bell } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onWebsitesClick?: () => void;
  onNotificationsClick?: () => void;
  notificationCount?: number;
}

const Header: React.FC<HeaderProps> = ({ 
  language, 
  onLanguageChange, 
  onWebsitesClick,
  onNotificationsClick,
  notificationCount = 0
}) => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <MessageSquare className="h-6 w-6 text-blue-800" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                {language === 'hi' ? 'सारथी' : 'Saarthi'}
              </h1>
              <p className="text-blue-100 text-sm">
                {language === 'hi' ? 'सरकारी योजना सहायक' : 'Government Schemes Assistant'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Notifications Button */}
            {onNotificationsClick && (
              <button
                onClick={onNotificationsClick}
                className="relative p-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                aria-label="View notifications"
              >
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                )}
              </button>
            )}
            
            {/* Websites Directory Button */}
            {onWebsitesClick && (
              <button
                onClick={onWebsitesClick}
                className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                aria-label="View websites directory"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline font-medium">
                  {language === 'hi' ? 'वेबसाइट' : 'Websites'}
                </span>
              </button>
            )}
            
            {/* Language Toggle */}
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              aria-label="Change language"
            >
              <Languages className="h-4 w-4" />
              <span className="font-medium">
                {language === 'en' ? 'हिंदी' : 'English'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;