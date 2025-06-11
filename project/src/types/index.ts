export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  schemes?: GovernmentScheme[];
  websites?: GovernmentWebsite[];
}

export interface GovernmentScheme {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  descriptionHindi: string;
  eligibility: string[];
  eligibilityHindi: string[];
  benefits: string;
  benefitsHindi: string;
  category: string;
  categoryHindi: string;
  applicationProcess: string;
  applicationProcessHindi: string;
  documents: string[];
  documentsHindi: string[];
  website?: string;
}

export interface GovernmentWebsite {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  descriptionHindi: string;
  category: string;
  categoryHindi: string;
  url: string;
  features: string[];
  featuresHindi: string[];
  targetAudience: string;
  targetAudienceHindi: string;
  ministry: string;
  ministryHindi: string;
}

export type Language = 'en' | 'hi';