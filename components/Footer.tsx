import React from 'react';

interface FooterProps {
  content: {
    social_title: string;
    rights_reserved: string;
  };
}

const SocialIcon: React.FC<{ href: string; 'aria-label': string; children: React.ReactNode }> = ({ href, 'aria-label': ariaLabel, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors" aria-label={ariaLabel}>
    {children}
  </a>
);

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <h4 className="text-xl font-bold mb-4">{content.social_title}</h4>
        <div className="flex justify-center items-center gap-x-4 sm:gap-x-6 mb-6">

          <SocialIcon href="https://maps.app.goo.gl/1QDtKfx4cCRrVsq79" aria-label="Google Maps">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </SocialIcon>
        </div>
        <p className="text-sm">{content.rights_reserved}</p>
      </div>
    </footer>
  );
};

export default Footer;
