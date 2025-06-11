import { GovernmentScheme } from '../types';

export const governmentSchemes: GovernmentScheme[] = [
  {
    id: '1',
    name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    nameHindi: 'प्रधानमंत्री किसान सम्मान निधि',
    description: 'Direct income support to farmers providing ₹6,000 per year in three installments',
    descriptionHindi: 'किसानों को प्रत्यक्ष आय सहायता प्रदान करने वाली योजना जो तीन किस्तों में ₹6,000 प्रति वर्ष देती है',
    eligibility: [
      'Small and marginal farmers',
      'Landholding up to 2 hectares',
      'Valid Aadhaar card required'
    ],
    eligibilityHindi: [
      'छोटे और सीमांत किसान',
      '2 हेक्टेयर तक की भूमि',
      'वैध आधार कार्ड आवश्यक'
    ],
    benefits: '₹6,000 per year (₹2,000 per installment)',
    benefitsHindi: '₹6,000 प्रति वर्ष (₹2,000 प्रति किस्त)',
    category: 'Agriculture',
    categoryHindi: 'कृषि',
    applicationProcess: 'Apply online at pmkisan.gov.in or visit nearest Common Service Center',
    applicationProcessHindi: 'pmkisan.gov.in पर ऑनलाइन आवेदन करें या निकटतम सामान्य सेवा केंद्र पर जाएं',
    documents: ['Aadhaar Card', 'Bank Account Details', 'Land Records'],
    documentsHindi: ['आधार कार्ड', 'बैंक खाता विवरण', 'भूमि रिकॉर्ड'],
    website: 'https://pmkisan.gov.in'
  },
  {
    id: '2',
    name: 'Pradhan Mantri Awas Yojana (PMAY)',
    nameHindi: 'प्रधानमंत्री आवास योजना',
    description: 'Housing scheme for economically weaker sections and low-income groups',
    descriptionHindi: 'आर्थिक रूप से कमजोर वर्गों और कम आय वाले समूहों के लिए आवास योजना',
    eligibility: [
      'Annual income up to ₹18 lakh',
      'No pucca house owned by family',
      'Not availed central assistance under housing schemes'
    ],
    eligibilityHindi: [
      'वार्षिक आय ₹18 लाख तक',
      'परिवार के पास कोई पक्का मकान नहीं',
      'आवास योजनाओं के तहत केंद्रीय सहायता नहीं ली'
    ],
    benefits: 'Subsidy up to ₹2.67 lakh on home loans',
    benefitsHindi: 'होम लोन पर ₹2.67 लाख तक की सब्सिडी',
    category: 'Housing',
    categoryHindi: 'आवास',
    applicationProcess: 'Apply through PMAY portal or visit nearest bank',
    applicationProcessHindi: 'PMAY पोर्टल के माध्यम से आवेदन करें या निकटतम बैंक जाएं',
    documents: ['Income Certificate', 'Aadhaar Card', 'Bank Statements', 'Property Documents'],
    documentsHindi: ['आय प्रमाण पत्र', 'आधार कार्ड', 'बैंक स्टेटमेंट', 'संपत्ति दस्तावेज'],
    website: 'https://pmaymis.gov.in'
  },
  {
    id: '3',
    name: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana',
    nameHindi: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना',
    description: 'Health insurance scheme providing coverage up to ₹5 lakh per family per year',
    descriptionHindi: 'स्वास्थ्य बीमा योजना जो प्रति परिवार प्रति वर्ष ₹5 लाख तक का कवरेज प्रदान करती है',
    eligibility: [
      'Families listed in SECC 2011',
      'Rural and urban poor families',
      'Automatic eligibility for listed families'
    ],
    eligibilityHindi: [
      'SECC 2011 में सूचीबद्ध परिवार',
      'ग्रामीण और शहरी गरीब परिवार',
      'सूचीबद्ध परिवारों के लिए स्वचालित पात्रता'
    ],
    benefits: 'Health coverage up to ₹5 lakh per family per year',
    benefitsHindi: 'प्रति परिवार प्रति वर्ष ₹5 लाख तक का स्वास्थ्य कवरेज',
    category: 'Healthcare',
    categoryHindi: 'स्वास्थ्य सेवा',
    applicationProcess: 'Visit nearest hospital or health center with Aadhaar card',
    applicationProcessHindi: 'आधार कार्ड के साथ निकटतम अस्पताल या स्वास्थ्य केंद्र जाएं',
    documents: ['Aadhaar Card', 'Ration Card', 'Family ID'],
    documentsHindi: ['आधार कार्ड', 'राशन कार्ड', 'पारिवारिक पहचान'],
    website: 'https://pmjay.gov.in'
  },
  {
    id: '4',
    name: 'Pradhan Mantri Mudra Yojana',
    nameHindi: 'प्रधानमंत्री मुद्रा योजना',
    description: 'Micro-finance scheme for small businesses and entrepreneurs',
    descriptionHindi: 'छोटे व्यवसायों और उद्यमियों के लिए माइक्रो-फाइनेंस योजना',
    eligibility: [
      'Non-corporate, non-farm income generating activities',
      'Loan amount up to ₹10 lakh',
      'Valid business plan required'
    ],
    eligibilityHindi: [
      'गैर-कॉर्पोरेट, गैर-कृषि आय उत्पादक गतिविधियां',
      'ऋण राशि ₹10 लाख तक',
      'वैध व्यावसायिक योजना आवश्यक'
    ],
    benefits: 'Collateral-free loans up to ₹10 lakh',
    benefitsHindi: 'बिना गारंटी के ₹10 लाख तक का ऋण',
    category: 'Business & Employment',
    categoryHindi: 'व्यवसाय और रोजगार',
    applicationProcess: 'Apply at any bank, NBFC, or MFI with business plan',
    applicationProcessHindi: 'व्यावसायिक योजना के साथ किसी भी बैंक, NBFC, या MFI में आवेदन करें',
    documents: ['Aadhaar Card', 'PAN Card', 'Business Plan', 'Address Proof'],
    documentsHindi: ['आधार कार्ड', 'पैन कार्ड', 'व्यावसायिक योजना', 'पता प्रमाण'],
    website: 'https://mudra.org.in'
  }
];