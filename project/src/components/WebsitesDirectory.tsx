import React, { useState } from 'react';
import { Search, Filter, Globe, ArrowLeft } from 'lucide-react';
import { GovernmentWebsite, Language } from '../types';
import { governmentWebsites } from '../data/websites';
import WebsiteCard from './WebsiteCard';

interface WebsitesDirectoryProps {
  language: Language;
  onBack: () => void;
}

const WebsitesDirectory: React.FC<WebsitesDirectoryProps> = ({ language, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const isHindi = language === 'hi';
  
  const categories = [
    { value: 'all', label: isHindi ? 'सभी' : 'All' },
    { value: 'Education & Scholarships', label: isHindi ? 'शिक्षा और छात्रवृत्ति' : 'Education & Scholarships' },
    { value: 'Healthcare', label: isHindi ? 'स्वास्थ्य सेवा' : 'Healthcare' },
    { value: 'Agriculture', label: isHindi ? 'कृषि' : 'Agriculture' },
    { value: 'Housing', label: isHindi ? 'आवास' : 'Housing' },
    { value: 'Business & Employment', label: isHindi ? 'व्यवसाय और रोजगार' : 'Business & Employment' },
    { value: 'Digital Services', label: isHindi ? 'डिजिटल सेवाएं' : 'Digital Services' },
    { value: 'Skill Development', label: isHindi ? 'कौशल विकास' : 'Skill Development' },
    { value: 'Women & Child Development', label: isHindi ? 'महिला और बाल विकास' : 'Women & Child Development' }
  ];
  
  const filteredWebsites = governmentWebsites.filter(website => {
    const matchesSearch = searchTerm === '' || 
      (isHindi ? website.nameHindi : website.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
      (isHindi ? website.descriptionHindi : website.description).toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || website.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">
                {isHindi ? 'सरकारी वेबसाइट निर्देशिका' : 'Government Websites Directory'}
              </h1>
              <p className="text-sm text-gray-500">
                {isHindi ? 'सभी सरकारी पोर्टल एक स्थान पर' : 'All government portals in one place'}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={isHindi ? 'वेबसाइट खोजें...' : 'Search websites...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isHindi ? 'उपलब्ध वेबसाइटें' : 'Available Websites'}
            </h2>
            <p className="text-gray-600">
              {filteredWebsites.length} {isHindi ? 'वेबसाइटें मिलीं' : 'websites found'}
            </p>
          </div>
          
          {filteredWebsites.length === 0 ? (
            <div className="text-center py-12">
              <Globe className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {isHindi ? 'कोई वेबसाइट नहीं मिली' : 'No websites found'}
              </h3>
              <p className="text-gray-500">
                {isHindi ? 'अपनी खोज को संशोधित करने का प्रयास करें' : 'Try modifying your search criteria'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWebsites.map((website) => (
                <WebsiteCard
                  key={website.id}
                  website={website}
                  language={language}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebsitesDirectory;