import React from 'react';
import { ExternalLink, Globe, Building, Users } from 'lucide-react';
import { GovernmentWebsite, Language } from '../types';

interface WebsiteCardProps {
  website: GovernmentWebsite;
  language: Language;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website, language }) => {
  const isHindi = language === 'hi';
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:transform hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {isHindi ? website.nameHindi : website.name}
          </h3>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
            {isHindi ? website.categoryHindi : website.category}
          </div>
        </div>
        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200 flex-shrink-0"
          aria-label="Visit website"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {isHindi ? website.descriptionHindi : website.description}
      </p>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Globe className="h-4 w-4 text-green-600" />
            <h4 className="font-medium text-gray-900">
              {isHindi ? 'मुख्य सुविधाएं' : 'Key Features'}
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(isHindi ? website.featuresHindi : website.features).map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="text-green-500 font-bold text-xs mt-1">✓</span>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-purple-600" />
            <span className="text-sm text-gray-600">
              {isHindi ? website.targetAudienceHindi : website.targetAudience}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Building className="h-4 w-4 text-orange-600" />
          <span className="text-xs text-gray-500">
            {isHindi ? website.ministryHindi : website.ministry}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;