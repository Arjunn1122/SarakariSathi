import React, { useState, useEffect } from 'react';
import { X, Bell, ExternalLink, Calendar, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Language } from '../types';

interface Notification {
  id: string;
  title: string;
  titleHindi: string;
  message: string;
  messageHindi: string;
  type: 'info' | 'warning' | 'success' | 'urgent';
  timestamp: Date;
  url?: string;
  isRead: boolean;
  category: string;
  categoryHindi: string;
}

interface NotificationPanelProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ language, isOpen, onClose }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const isHindi = language === 'hi';

  useEffect(() => {
    // Simulate fetching notifications
    const mockNotifications: Notification[] = [
      {
        id: '1',
        title: 'New Scholarship Scheme Launched',
        titleHindi: 'नई छात्रवृत्ति योजना शुरू',
        message: 'PM Scholarship for Higher Education is now accepting applications. Apply before March 31, 2025.',
        messageHindi: 'उच्च शिक्षा के लिए पीएम छात्रवृत्ति अब आवेदन स्वीकार कर रही है। 31 मार्च, 2025 से पहले आवेदन करें।',
        type: 'info',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        url: 'https://scholarships.gov.in',
        isRead: false,
        category: 'Education',
        categoryHindi: 'शिक्षा'
      },
      {
        id: '2',
        title: 'PM-KISAN Payment Released',
        titleHindi: 'पीएम-किसान भुगतान जारी',
        message: 'The 16th installment of PM-KISAN has been credited to eligible farmers\' accounts.',
        messageHindi: 'पीएम-किसान की 16वीं किस्त पात्र किसानों के खातों में जमा कर दी गई है।',
        type: 'success',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        url: 'https://pmkisan.gov.in',
        isRead: false,
        category: 'Agriculture',
        categoryHindi: 'कृषि'
      },
      {
        id: '3',
        title: 'Ayushman Bharat Card Update Required',
        titleHindi: 'आयुष्मान भारत कार्ड अपडेट आवश्यक',
        message: 'Update your Ayushman Bharat card details before February 28, 2025 to continue benefits.',
        messageHindi: 'लाभ जारी रखने के लिए 28 फरवरी, 2025 से पहले अपने आयुष्मान भारत कार्ड का विवरण अपडेट करें।',
        type: 'warning',
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
        url: 'https://pmjay.gov.in',
        isRead: true,
        category: 'Healthcare',
        categoryHindi: 'स्वास्थ्य सेवा'
      },
      {
        id: '4',
        title: 'PMAY Application Deadline Extended',
        titleHindi: 'पीएमएवाई आवेदन की अंतिम तिथि बढ़ाई गई',
        message: 'Good news! PMAY application deadline has been extended to April 15, 2025.',
        messageHindi: 'खुशखबरी! पीएमएवाई आवेदन की अंतिम तिथि 15 अप्रैल, 2025 तक बढ़ा दी गई है।',
        type: 'info',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
        url: 'https://pmaymis.gov.in',
        isRead: true,
        category: 'Housing',
        categoryHindi: 'आवास'
      },
      {
        id: '5',
        title: 'System Maintenance Alert',
        titleHindi: 'सिस्टम रखरखाव अलर्ट',
        message: 'Scheduled maintenance on Jan 25, 2025 from 2:00 AM to 6:00 AM. Services may be temporarily unavailable.',
        messageHindi: '25 जनवरी, 2025 को सुबह 2:00 बजे से 6:00 बजे तक निर्धारित रखरखाव। सेवाएं अस्थायी रूप से अनुपलब्ध हो सकती हैं।',
        type: 'urgent',
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        url: undefined,
        isRead: true,
        category: 'System',
        categoryHindi: 'सिस्टम'
      }
    ];
    
    setNotifications(mockNotifications);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'urgent':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getNotificationBg = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'urgent':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return isHindi ? `${days} दिन पहले` : `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return isHindi ? `${hours} घंटे पहले` : `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return isHindi ? 'अभी' : 'Just now';
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="h-6 w-6" />
              <div>
                <h2 className="text-lg font-semibold">
                  {isHindi ? 'सूचनाएं' : 'Notifications'}
                </h2>
                <p className="text-blue-100 text-sm">
                  {unreadCount > 0 
                    ? (isHindi ? `${unreadCount} नई सूचनाएं` : `${unreadCount} new notifications`)
                    : (isHindi ? 'सभी पढ़ी गई' : 'All caught up')
                  }
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-blue-600 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="mt-3 text-sm text-blue-100 hover:text-white underline"
            >
              {isHindi ? 'सभी को पढ़ा हुआ चिह्नित करें' : 'Mark all as read'}
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <Bell className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-lg font-medium">
                {isHindi ? 'कोई सूचना नहीं' : 'No notifications'}
              </p>
              <p className="text-sm">
                {isHindi ? 'नई सूचनाएं यहाँ दिखाई जाएंगी' : 'New notifications will appear here'}
              </p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`border rounded-lg p-4 transition-all duration-200 hover:shadow-md cursor-pointer ${
                    getNotificationBg(notification.type)
                  } ${!notification.isRead ? 'ring-2 ring-blue-200' : ''}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {isHindi ? notification.titleHindi : notification.title}
                        </h3>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 ml-2"></div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
                          {isHindi ? notification.categoryHindi : notification.category}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatTimestamp(notification.timestamp)}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-3">
                        {isHindi ? notification.messageHindi : notification.message}
                      </p>
                      
                      {notification.url && (
                        <a
                          href={notification.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>{isHindi ? 'और पढ़ें' : 'Learn more'}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;