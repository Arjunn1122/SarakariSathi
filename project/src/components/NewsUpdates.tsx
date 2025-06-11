import React, { useState, useEffect } from 'react';
import { Newspaper, Calendar, ExternalLink, TrendingUp, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface NewsItem {
  id: string;
  title: string;
  titleHindi: string;
  summary: string;
  summaryHindi: string;
  category: string;
  categoryHindi: string;
  publishedAt: Date;
  url: string;
  isBreaking: boolean;
  ministry: string;
  ministryHindi: string;
}

interface NewsUpdatesProps {
  language: Language;
}

const NewsUpdates: React.FC<NewsUpdatesProps> = ({ language }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const isHindi = language === 'hi';

  useEffect(() => {
    // Simulate fetching news
    setTimeout(() => {
      const mockNews: NewsItem[] = [
        {
          id: '1',
          title: 'New Digital India Initiative Launched for Rural Areas',
          titleHindi: 'ग्रामीण क्षेत्रों के लिए नई डिजिटल इंडिया पहल शुरू',
          summary: 'Government launches comprehensive digital literacy program targeting 10 million rural citizens with free internet access and digital training.',
          summaryHindi: 'सरकार ने मुफ्त इंटरनेट पहुंच और डिजिटल प्रशिक्षण के साथ 1 करोड़ ग्रामीण नागरिकों को लक्षित करते हुए व्यापक डिजिटल साक्षरता कार्यक्रम शुरू किया।',
          category: 'Digital Services',
          categoryHindi: 'डिजिटल सेवाएं',
          publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          url: 'https://digitalindia.gov.in',
          isBreaking: true,
          ministry: 'Ministry of Electronics & IT',
          ministryHindi: 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय'
        },
        {
          id: '2',
          title: 'PM-KISAN Beneficiaries Cross 12 Crore Mark',
          titleHindi: 'पीएम-किसान लाभार्थी 12 करोड़ का आंकड़ा पार',
          summary: 'The PM-KISAN scheme has successfully enrolled over 12 crore farmers, with total disbursement exceeding ₹2.8 lakh crore.',
          summaryHindi: 'पीएम-किसान योजना ने सफलतापूर्वक 12 करोड़ से अधिक किसानों को नामांकित किया है, कुल वितरण ₹2.8 लाख करोड़ से अधिक है।',
          category: 'Agriculture',
          categoryHindi: 'कृषि',
          publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
          url: 'https://pmkisan.gov.in',
          isBreaking: false,
          ministry: 'Ministry of Agriculture',
          ministryHindi: 'कृषि मंत्रालय'
        },
        {
          id: '3',
          title: 'Ayushman Bharat Expands Coverage to Include Mental Health',
          titleHindi: 'आयुष्मान भारत में मानसिक स्वास्थ्य कवरेज का विस्तार',
          summary: 'Mental health services are now covered under Ayushman Bharat, providing comprehensive healthcare to beneficiaries.',
          summaryHindi: 'मानसिक स्वास्थ्य सेवाएं अब आयुष्मान भारत के तहत कवर हैं, जो लाभार्थियों को व्यापक स्वास्थ्य सेवा प्रदान करती हैं।',
          category: 'Healthcare',
          categoryHindi: 'स्वास्थ्य सेवा',
          publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
          url: 'https://pmjay.gov.in',
          isBreaking: false,
          ministry: 'Ministry of Health & Family Welfare',
          ministryHindi: 'स्वास्थ्य और परिवार कल्याण मंत्रालय'
        },
        {
          id: '4',
          title: 'New Skill Development Centers Open in 100 Districts',
          titleHindi: '100 जिलों में नए कौशल विकास केंद्र खुले',
          summary: 'Government inaugurates 100 new skill development centers focusing on emerging technologies and traditional crafts.',
          summaryHindi: 'सरकार ने उभरती प्रौद्योगिकियों और पारंपरिक शिल्प पर ध्यान देने वाले 100 नए कौशल विकास केंद्रों का उद्घाटन किया।',
          category: 'Skill Development',
          categoryHindi: 'कौशल विकास',
          publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
          url: 'https://skillindia.gov.in',
          isBreaking: false,
          ministry: 'Ministry of Skill Development',
          ministryHindi: 'कौशल विकास मंत्रालय'
        }
      ];
      
      setNews(mockNews);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) {
      return isHindi ? 'अभी' : 'Just now';
    } else if (hours < 24) {
      return isHindi ? `${hours} घंटे पहले` : `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(hours / 24);
      return isHindi ? `${days} दिन पहले` : `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="h-6 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-red-100 p-2 rounded-full">
          <Newspaper className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {isHindi ? 'ताज़ा समाचार' : 'Latest News'}
          </h2>
          <p className="text-sm text-gray-500">
            {isHindi ? 'सरकारी योजनाओं की नवीनतम जानकारी' : 'Latest updates on government schemes'}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                {item.isBreaking && (
                  <div className="flex items-center space-x-1 bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    <TrendingUp className="h-3 w-3" />
                    <span>{isHindi ? 'ब्रेकिंग' : 'Breaking'}</span>
                  </div>
                )}
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {isHindi ? item.categoryHindi : item.category}
                </span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                {formatDate(item.publishedAt)}
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
              {isHindi ? item.titleHindi : item.title}
            </h3>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {isHindi ? item.summaryHindi : item.summary}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {isHindi ? item.ministryHindi : item.ministry}
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                <span>{isHindi ? 'पूरा पढ़ें' : 'Read more'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full text-center text-blue-600 hover:text-blue-800 font-medium text-sm">
          {isHindi ? 'सभी समाचार देखें' : 'View all news'}
        </button>
      </div>
    </div>
  );
};

export default NewsUpdates;