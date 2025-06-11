import { GovernmentWebsite } from '../types';

export const governmentWebsites: GovernmentWebsite[] = [
  {
    id: '1',
    name: 'National Scholarship Portal',
    nameHindi: 'राष्ट्रीय छात्रवृत्ति पोर्टल',
    description: 'One-stop platform for various scholarship schemes by Central and State Governments',
    descriptionHindi: 'केंद्र और राज्य सरकारों की विभिन्न छात्रवृत्ति योजनाओं के लिए एक-स्टॉप प्लेटफॉर्म',
    category: 'Education & Scholarships',
    categoryHindi: 'शिक्षा और छात्रवृत्ति',
    url: 'https://scholarships.gov.in',
    features: [
      'Pre-matric and Post-matric scholarships',
      'Merit-based scholarships',
      'Minority scholarships',
      'Disability scholarships'
    ],
    featuresHindi: [
      'प्री-मैट्रिक और पोस्ट-मैट्रिक छात्रवृत्ति',
      'मेधा आधारित छात्रवृत्ति',
      'अल्पसंख्यक छात्रवृत्ति',
      'विकलांगता छात्रवृत्ति'
    ],
    targetAudience: 'Students from all backgrounds',
    targetAudienceHindi: 'सभी पृष्ठभूमि के छात्र',
    ministry: 'Ministry of Electronics & IT',
    ministryHindi: 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय'
  },
  {
    id: '2',
    name: 'PM-KISAN Portal',
    nameHindi: 'पीएम-किसान पोर्टल',
    description: 'Direct income support portal for farmers across India',
    descriptionHindi: 'भारत भर के किसानों के लिए प्रत्यक्ष आय सहायता पोर्टल',
    category: 'Agriculture',
    categoryHindi: 'कृषि',
    url: 'https://pmkisan.gov.in',
    features: [
      'Farmer registration',
      'Beneficiary status check',
      'Payment history',
      'Aadhaar linking'
    ],
    featuresHindi: [
      'किसान पंजीकरण',
      'लाभार्थी स्थिति जांच',
      'भुगतान इतिहास',
      'आधार लिंकिंग'
    ],
    targetAudience: 'Small and marginal farmers',
    targetAudienceHindi: 'छोटे और सीमांत किसान',
    ministry: 'Ministry of Agriculture',
    ministryHindi: 'कृषि मंत्रालय'
  },
  {
    id: '3',
    name: 'Ayushman Bharat Portal',
    nameHindi: 'आयुष्मान भारत पोर्टल',
    description: 'Health insurance scheme portal providing coverage up to ₹5 lakh',
    descriptionHindi: 'स्वास्थ्य बीमा योजना पोर्टल जो ₹5 लाख तक का कवरेज प्रदान करता है',
    category: 'Healthcare',
    categoryHindi: 'स्वास्थ्य सेवा',
    url: 'https://pmjay.gov.in',
    features: [
      'Eligibility check',
      'Hospital finder',
      'E-card download',
      'Claim status'
    ],
    featuresHindi: [
      'पात्रता जांच',
      'अस्पताल खोजक',
      'ई-कार्ड डाउनलोड',
      'दावा स्थिति'
    ],
    targetAudience: 'Economically vulnerable families',
    targetAudienceHindi: 'आर्थिक रूप से कमजोर परिवार',
    ministry: 'Ministry of Health & Family Welfare',
    ministryHindi: 'स्वास्थ्य और परिवार कल्याण मंत्रालय'
  },
  {
    id: '4',
    name: 'PMAY Portal',
    nameHindi: 'पीएमएवाई पोर्टल',
    description: 'Housing for All scheme portal for affordable housing',
    descriptionHindi: 'सभी के लिए आवास योजना पोर्टल किफायती आवास के लिए',
    category: 'Housing',
    categoryHindi: 'आवास',
    url: 'https://pmaymis.gov.in',
    features: [
      'Online application',
      'Subsidy calculator',
      'Application tracking',
      'Document upload'
    ],
    featuresHindi: [
      'ऑनलाइन आवेदन',
      'सब्सिडी कैलकुलेटर',
      'आवेदन ट्रैकिंग',
      'दस्तावेज अपलोड'
    ],
    targetAudience: 'EWS, LIG, and MIG families',
    targetAudienceHindi: 'EWS, LIG, और MIG परिवार',
    ministry: 'Ministry of Housing & Urban Affairs',
    ministryHindi: 'आवास और शहरी कार्य मंत्रालय'
  },
  {
    id: '5',
    name: 'Mudra Portal',
    nameHindi: 'मुद्रा पोर्टल',
    description: 'Micro-finance portal for small business loans',
    descriptionHindi: 'छोटे व्यावसायिक ऋण के लिए माइक्रो-फाइनेंस पोर्टल',
    category: 'Business & Employment',
    categoryHindi: 'व्यवसाय और रोजगार',
    url: 'https://mudra.org.in',
    features: [
      'Loan application',
      'Bank locator',
      'Loan calculator',
      'Success stories'
    ],
    featuresHindi: [
      'ऋण आवेदन',
      'बैंक लोकेटर',
      'ऋण कैलकुलेटर',
      'सफलता की कहानियां'
    ],
    targetAudience: 'Small entrepreneurs and businesses',
    targetAudienceHindi: 'छोटे उद्यमी और व्यवसाय',
    ministry: 'Ministry of Finance',
    ministryHindi: 'वित्त मंत्रालय'
  },
  {
    id: '6',
    name: 'Digital India Portal',
    nameHindi: 'डिजिटल इंडिया पोर्टल',
    description: 'Gateway to digital services and e-governance initiatives',
    descriptionHindi: 'डिजिटल सेवाओं और ई-गवर्नेंस पहलों का गेटवे',
    category: 'Digital Services',
    categoryHindi: 'डिजिटल सेवाएं',
    url: 'https://digitalindia.gov.in',
    features: [
      'Digital literacy programs',
      'Online services directory',
      'Mobile apps',
      'Digital payments'
    ],
    featuresHindi: [
      'डिजिटल साक्षरता कार्यक्रम',
      'ऑनलाइन सेवा निर्देशिका',
      'मोबाइल ऐप्स',
      'डिजिटल भुगतान'
    ],
    targetAudience: 'All citizens',
    targetAudienceHindi: 'सभी नागरिक',
    ministry: 'Ministry of Electronics & IT',
    ministryHindi: 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय'
  },
  {
    id: '7',
    name: 'Skill India Portal',
    nameHindi: 'स्किल इंडिया पोर्टल',
    description: 'Skill development and vocational training platform',
    descriptionHindi: 'कौशल विकास और व्यावसायिक प्रशिक्षण मंच',
    category: 'Skill Development',
    categoryHindi: 'कौशल विकास',
    url: 'https://skillindia.gov.in',
    features: [
      'Training programs',
      'Certification courses',
      'Job placement',
      'Skill assessment'
    ],
    featuresHindi: [
      'प्रशिक्षण कार्यक्रम',
      'प्रमाणन पाठ्यक्रम',
      'नौकरी प्लेसमेंट',
      'कौशल मूल्यांकन'
    ],
    targetAudience: 'Youth and job seekers',
    targetAudienceHindi: 'युवा और नौकरी चाहने वाले',
    ministry: 'Ministry of Skill Development',
    ministryHindi: 'कौशल विकास मंत्रालय'
  },
  {
    id: '8',
    name: 'Jan Aushadhi Portal',
    nameHindi: 'जन औषधि पोर्टल',
    description: 'Affordable generic medicines and healthcare products',
    descriptionHindi: 'किफायती जेनेरिक दवाएं और स्वास्थ्य उत्पाद',
    category: 'Healthcare',
    categoryHindi: 'स्वास्थ्य सेवा',
    url: 'https://janaushadhi.gov.in',
    features: [
      'Store locator',
      'Medicine catalog',
      'Price comparison',
      'Franchise opportunities'
    ],
    featuresHindi: [
      'स्टोर लोकेटर',
      'दवा कैटलॉग',
      'मूल्य तुलना',
      'फ्रेंचाइजी अवसर'
    ],
    targetAudience: 'All citizens needing medicines',
    targetAudienceHindi: 'दवाओं की जरूरत वाले सभी नागरिक',
    ministry: 'Ministry of Chemicals & Fertilizers',
    ministryHindi: 'रसायन और उर्वरक मंत्रालय'
  },
  {
    id: '9',
    name: 'Startup India Portal',
    nameHindi: 'स्टार्टअप इंडिया पोर्टल',
    description: 'Platform for startup registration and support',
    descriptionHindi: 'स्टार्टअप पंजीकरण और सहायता के लिए मंच',
    category: 'Business & Employment',
    categoryHindi: 'व्यवसाय और रोजगार',
    url: 'https://startupindia.gov.in',
    features: [
      'Startup registration',
      'Funding opportunities',
      'Incubator network',
      'Tax benefits'
    ],
    featuresHindi: [
      'स्टार्टअप पंजीकरण',
      'फंडिंग अवसर',
      'इनक्यूबेटर नेटवर्क',
      'कर लाभ'
    ],
    targetAudience: 'Entrepreneurs and startups',
    targetAudienceHindi: 'उद्यमी और स्टार्टअप',
    ministry: 'Ministry of Commerce & Industry',
    ministryHindi: 'वाणिज्य और उद्योग मंत्रालय'
  },
  {
    id: '10',
    name: 'Beti Bachao Beti Padhao Portal',
    nameHindi: 'बेटी बचाओ बेटी पढ़ाओ पोर्टल',
    description: 'Initiative for girl child welfare and education',
    descriptionHindi: 'बालिका कल्याण और शिक्षा के लिए पहल',
    category: 'Women & Child Development',
    categoryHindi: 'महिला और बाल विकास',
    url: 'https://wcd.nic.in/bbbp-scheme',
    features: [
      'Awareness campaigns',
      'Educational support',
      'Health initiatives',
      'Success stories'
    ],
    featuresHindi: [
      'जागरूकता अभियान',
      'शैक्षिक सहायता',
      'स्वास्थ्य पहल',
      'सफलता की कहानियां'
    ],
    targetAudience: 'Families with girl children',
    targetAudienceHindi: 'बालिकाओं वाले परिवार',
    ministry: 'Ministry of Women & Child Development',
    ministryHindi: 'महिला और बाल विकास मंत्रालय'
  }
];