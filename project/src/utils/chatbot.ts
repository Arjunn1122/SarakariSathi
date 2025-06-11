import { GovernmentScheme, GovernmentWebsite } from '../types';
import { governmentSchemes } from '../data/schemes';
import { governmentWebsites } from '../data/websites';

export const generateBotResponse = (userMessage: string, language: 'en' | 'hi'): { text: string; schemes?: GovernmentScheme[]; websites?: GovernmentWebsite[] } => {
  const message = userMessage.toLowerCase();
  
  // Website/Portal related queries
  if (message.includes('website') || message.includes('portal') || message.includes('online') ||
      message.includes('वेबसाइट') || message.includes('पोर्टल') || message.includes('ऑनलाइन')) {
    return {
      text: language === 'hi' 
        ? 'मैंने आपके लिए सरकारी वेबसाइटों की सूची तैयार की है। यहाँ हैं मुख्य पोर्टल:' 
        : "I've compiled a list of government websites for you. Here are the main portals:",
      websites: governmentWebsites.slice(0, 6) // Show first 6 websites
    };
  }
  
  // Scholarship related queries
  if (message.includes('scholarship') || message.includes('education') || message.includes('study') ||
      message.includes('छात्रवृत्ति') || message.includes('शिक्षा') || message.includes('पढ़ाई')) {
    const educationWebsites = governmentWebsites.filter(site => 
      site.category === 'Education & Scholarships' || site.category === 'Skill Development'
    );
    return {
      text: language === 'hi'
        ? 'मैंने आपके लिए शिक्षा और छात्रवृत्ति संबंधी वेबसाइटें खोजी हैं:' 
        : "I found education and scholarship related websites for you:",
      websites: educationWebsites
    };
  }
  
  // Agriculture related queries
  if (message.includes('farmer') || message.includes('agriculture') || message.includes('farming') || 
      message.includes('किसान') || message.includes('कृषि') || message.includes('खेती')) {
    const schemes = governmentSchemes.filter(scheme => scheme.category === 'Agriculture');
    const websites = governmentWebsites.filter(site => site.category === 'Agriculture');
    return {
      text: language === 'hi' 
        ? 'मैंने आपके लिए कृषि संबंधी योजनाएं और वेबसाइटें खोजी हैं:' 
        : "I found agriculture-related schemes and websites for you:",
      schemes,
      websites
    };
  }
  
  // Housing related queries
  if (message.includes('house') || message.includes('home') || message.includes('housing') ||
      message.includes('घर') || message.includes('आवास') || message.includes('मकान')) {
    const schemes = governmentSchemes.filter(scheme => scheme.category === 'Housing');
    const websites = governmentWebsites.filter(site => site.category === 'Housing');
    return {
      text: language === 'hi'
        ? 'मैंने आपके लिए आवास योजनाएं और संबंधित वेबसाइटें खोजी हैं:' 
        : "I found housing schemes and related websites for you:",
      schemes,
      websites
    };
  }
  
  // Healthcare related queries
  if (message.includes('health') || message.includes('medical') || message.includes('insurance') ||
      message.includes('स्वास्थ्य') || message.includes('बीमा') || message.includes('चिकित्सा')) {
    const schemes = governmentSchemes.filter(scheme => scheme.category === 'Healthcare');
    const websites = governmentWebsites.filter(site => site.category === 'Healthcare');
    return {
      text: language === 'hi'
        ? 'मैंने आपके लिए स्वास्थ्य योजनाएं और संबंधित वेबसाइटें खोजी हैं:' 
        : "I found healthcare schemes and related websites for you:",
      schemes,
      websites
    };
  }
  
  // Business related queries
  if (message.includes('business') || message.includes('loan') || message.includes('mudra') || message.includes('startup') ||
      message.includes('व्यवसाय') || message.includes('लोन') || message.includes('ऋण') || message.includes('स्टार्टअप')) {
    const schemes = governmentSchemes.filter(scheme => scheme.category === 'Business & Employment');
    const websites = governmentWebsites.filter(site => site.category === 'Business & Employment');
    return {
      text: language === 'hi'
        ? 'मैंने आपके लिए व्यवसाय और रोजगार योजनाएं तथा संबंधित वेबसाइटें खोजी हैं:' 
        : "I found business and employment schemes and related websites for you:",
      schemes,
      websites
    };
  }
  
  // Skill development queries
  if (message.includes('skill') || message.includes('training') || message.includes('course') ||
      message.includes('कौशल') || message.includes('प्रशिक्षण') || message.includes('कोर्स')) {
    const websites = governmentWebsites.filter(site => site.category === 'Skill Development');
    return {
      text: language === 'hi'
        ? 'मैंने आपके लिए कौशल विकास संबंधी वेबसाइटें खोजी हैं:' 
        : "I found skill development related websites for you:",
      websites
    };
  }
  
  // Digital services queries
  if (message.includes('digital') || message.includes('online service') || message.includes('e-governance') ||
      message.includes('डिजिटल') || message.includes('ऑनलाइन सेवा') || message.includes('ई-गवर्नेंस')) {
    const websites = governmentWebsites.filter(site => site.category === 'Digital Services');
    return {
      text: language === 'hi'
        ? 'मैंने आपके लिए डिजिटल सेवाओं की वेबसाइटें खोजी हैं:' 
        : "I found digital services websites for you:",
      websites
    };
  }
  
  // General greeting
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') ||
      message.includes('नमस्ते') || message.includes('हैलो')) {
    return {
      text: language === 'hi'
        ? 'नमस्ते! मैं सारथी हूँ, आपकी सरकारी योजनाओं की सहायक। मैं आपकी मदद कर सकता हूँ। आप मुझसे कृषि, आवास, स्वास्थ्य, व्यवसाय संबंधी योजनाओं के बारे में पूछ सकते हैं या सरकारी वेबसाइटों की जानकारी ले सकते हैं।'
        : "Hello! I'm Saarthi, your government schemes assistant. I can help you find relevant schemes and government websites. You can ask me about agriculture, housing, healthcare, business schemes, or government portals."
    };
  }
  
  // Help or general query
  if (message.includes('help') || message.includes('scheme') || message.includes('योजना') || message.includes('सहायता')) {
    return {
      text: language === 'hi'
        ? 'मैं आपकी सरकारी योजनाओं और वेबसाइटों की जानकारी में मदद कर सकता हूँ। आप मुझसे निम्नलिखित के बारे में पूछ सकते हैं:\n\n• कृषि योजनाएं और पोर्टल\n• आवास योजनाएं और वेबसाइट\n• स्वास्थ्य योजनाएं और पोर्टल\n• व्यवसाय योजनाएं और वेबसाइट\n• छात्रवृत्ति और शिक्षा पोर्टल\n• कौशल विकास वेबसाइट\n• डिजिटल सेवाएं\n\nकृपया बताएं कि आप किस प्रकार की सहायता चाहते हैं?'
        : "I can help you with information about government schemes and websites. You can ask me about:\n\n• Agriculture schemes and portals\n• Housing schemes and websites\n• Healthcare schemes and portals\n• Business schemes and websites\n• Scholarship and education portals\n• Skill development websites\n• Digital services\n\nWhat kind of assistance are you looking for?"
    };
  }
  
  // Default response
  return {
    text: language === 'hi'
      ? 'मुझे खुशी होगी आपकी मदद करने में! कृपया अपना प्रश्न स्पष्ट करें या बताएं कि आप किस प्रकार की योजना या वेबसाइट की तलाश में हैं - कृषि, आवास, स्वास्थ्य, व्यवसाय, शिक्षा, या कौशल विकास?'
      : "I'd be happy to help you! Please clarify your question or let me know what type of scheme or website you're looking for - agriculture, housing, healthcare, business, education, or skill development?"
  };
};