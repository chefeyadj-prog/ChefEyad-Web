import React from 'react';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    cta_button: string;
  };
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://res.cloudinary.com/drredhvtd/image/upload/v1761919197/Edit-1_fcpifv.png')" }}>
      <div className="bg-black/60 absolute inset--1"></div>
      <div className="relative text-center text-white px-4 z-10 flex flex-col items-center">
        <video
          src="https://res.cloudinary.com/drredhvtd/video/upload/v1760800702/Untitled_design_3_r8olw7.mp4"
          className="h-48 w-auto mb-4 mix-blend-screen"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Animated Flame Logo"
        />
        <h2 className="text-5xl md:text-7xl font-black font-display mb-4 drop-shadow-lg">{content.title}</h2>
        <p className="text-xl md:text-2xl mb-8 font-light text-slate-300">{content.subtitle}</p>
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
