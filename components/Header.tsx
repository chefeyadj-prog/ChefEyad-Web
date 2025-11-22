import React from 'react';
import type { Language } from '../types';

interface HeaderProps {
  nav: {
    home: string;
    menu: string;
    allergens: string;
    contact: string;
    language_switch: string;
  };
  language: Language;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ nav, language, toggleLanguage }) => {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header id="home" className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        
        {/* الشعار */}
        <div className="flex items-center flex-shrink-0">
          <img 
            src="https://ik.imagekit.io/ckmv7berw/chef%20Log%20.png?updatedAt=1763843995406" 
            alt="Chef Eyad Jeddah Logo" 
            className="h-12 w-auto" 
          />
        </div>

        {/* شريط الروابط في المنتصف */}
        <nav className="hidden md:flex flex-1 justify-center items-center font-semibold tracking-wide text-lg text-slate-200">
          <a href="#home" onClick={handleNavClick} className="hover:text-amber-500 transition-colors">
            {nav.home}
          </a>
          <span className="mx-4 text-slate-500">|</span>
          <a href="#menu" onClick={handleNavClick} className="hover:text-amber-500 transition-colors">
            {nav.menu}
          </a>
          <span className="mx-4 text-slate-500">|</span>
           <a href="#allergens" onClick={handleNavClick} className="hover:text-amber-500 transition-colors">
            {nav.allergens}
          </a>
          <span className="mx-4 text-slate-500">|</span>
          <a href="#info" onClick={handleNavClick} className="hover:text-amber-500 transition-colors">
            {nav.contact}
          </a>
        </nav>

        {/* زر اللغة */}
        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="border border-amber-500 text-amber-500 px-3 py-1 rounded-md hover:bg-amber-500 hover:text-slate-900 transition-colors font-semibold"
          >
            {nav.language_switch}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
