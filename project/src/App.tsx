import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import ChatInterface from './components/ChatInterface';
import WebsitesDirectory from './components/WebsitesDirectory';
import NotificationPanel from './components/NotificationPanel';

type AppView = 'welcome' | 'chat' | 'websites';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<AppView>('welcome');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleStartChat = () => {
    setCurrentView('chat');
  };

  const handleBackToWelcome = () => {
    setCurrentView('welcome');
  };

  const handleShowWebsites = () => {
    setCurrentView('websites');
  };

  const handleShowNotifications = () => {
    setShowNotifications(true);
    // Reset notification count when opened
    setNotificationCount(0);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  // Simulate receiving new notifications
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly add notifications (for demo purposes)
      if (Math.random() > 0.8 && notificationCount < 9) {
        setNotificationCount(prev => prev + 1);
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [notificationCount]);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'chat':
        return <ChatInterface language={language} onBack={handleBackToWelcome} />;
      case 'websites':
        return <WebsitesDirectory language={language} onBack={handleBackToWelcome} />;
      default:
        return <WelcomeScreen language={language} onStartChat={handleStartChat} />;
    }
  };

  return (
    <>
      <Header 
        language={language} 
        onLanguageChange={handleLanguageChange}
        onWebsitesClick={currentView !== 'welcome' ? handleShowWebsites : undefined}
        onNotificationsClick={handleShowNotifications}
        notificationCount={notificationCount}
      />
      {renderCurrentView()}
      <NotificationPanel
        language={language}
        isOpen={showNotifications}
        onClose={handleCloseNotifications}
      />
    </>
  );
}

export default App;