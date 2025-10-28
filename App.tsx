
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Info from './components/Info';
import Footer from './components/Footer';
import { content } from './constants/translations';
import type { Language } from './types';
import Allergens from './components/Allergens';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'ar' ? 'en' : 'ar'));
  };

  const currentContent = content[language];

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen">
      <Header
        nav={currentContent.nav}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <main>
        <Hero content={currentContent.hero} />
        <Menu content={currentContent.menu} />
        <Allergens content={currentContent.allergens} />
        <Info content={currentContent.info} />
      </main>
      <Footer content={currentContent.footer} />
    </div>
  );
};

export default App;
