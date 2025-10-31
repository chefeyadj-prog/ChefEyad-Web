import React, { useState, useEffect } from 'react';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    cta_button: string;
  };
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const [bgImage, setBgImage] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(
          "url('https://res.cloudinary.com/drredhvtd/image/upload/v1761944053/Image_54-4_sbpdzr.png')"
        );
      } else {
        setBgImage(
          "url('https://res.cloudinary.com/drredhvtd/image/upload/v1761921402/Edit_vebxmw.png')"
        );
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: bgImage }}
    >
      <div className="relative text-center text-white px-4 z-10 flex flex-col items-center">
        {/* 🎥 لوقو متحرك */}
        <video
          src="https://res.cloudinary.com/drredhvtd/video/upload/v1761945086/Untitled_design_3_qow27e.webm"
          className="h-32 md:h-64 w-auto mb-4 mix-blend-screen"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Chef Eyad Animated Logo"
        />

        <h2 className="text-3xl md:text-7xl font-black font-display mb-4 drop-shadow-lg">
          {content.title}
        </h2>
        <p className="text-lg md:text-2xl mb-8 font-light text-slate-300">
          {content.subtitle}
        </p>

        <a
          href="#menu"
          onClick={handleNavClick}
          className="bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-400 transition-transform transform hover:scale-105 inline-block"
        >
          {content.cta_button}
        </a>
      </div>
    </section>
  );
};

export default Hero;
