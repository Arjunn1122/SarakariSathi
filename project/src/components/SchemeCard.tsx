import React from 'react';
import { ExternalLink, CheckCircle, FileText, CreditCard } from 'lucide-react';
import { GovernmentScheme, Language } from '../types';

interface SchemeCardProps {
  scheme: GovernmentScheme;
  language: Language;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, language }) => {
  const isHindi = language === 'hi';
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {isHindi ? scheme.nameHindi : scheme.name}
          </h3>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
            {isHindi ? scheme.categoryHindi : scheme.category}
          </div>
        </div>
        {scheme.website && (
          <a
            href={scheme.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            aria-label="Visit scheme website"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>
      
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {isHindi ? scheme.descriptionHindi : scheme.description}
      </p>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <CreditCard className="h-4 w-4 text-green-600" />
            <h4 className="font-medium text-gray-900">
              {isHindi ? 'लाभ' : 'Benefits'}
            </h4>
          </div>
          <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
            {isHindi ? scheme.benefitsHindi : scheme.benefits}
          </p>
        </div>
        
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <h4 className="font-medium text-gray-900">
              {isHindi ? 'पात्रता' : 'Eligibility'}
            </h4>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            {(isHindi ? scheme.eligibilityHindi : scheme.eligibility).map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-500 font-bold text-xs mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <FileText className="h-4 w-4 text-purple-600" />
            <h4 className="font-medium text-gray-900">
              {isHindi ? 'आवश्यक दस्तावेज' : 'Required Documents'}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {(isHindi ? scheme.documentsHindi : scheme.documents).map((doc, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
              >
                {doc}
              </span>
            ))}
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-1">
            {isHindi ? 'आवेदन प्रक्रिया:' : 'Application Process:'}
          </p>
          <p className="text-sm text-gray-600">
            {isHindi ? scheme.applicationProcessHindi : scheme.applicationProcess}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchemeCard;