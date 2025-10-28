import React from 'react';

interface InfoProps {
  content: {
    hours_title: string;
    hours: string[];
    hours_note?: string;
    location_title: string;
    location: string;
    follow_us_title: string;
  };
}

const Info: React.FC<InfoProps> = ({ content }) => {
  return (
    <section id="info" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-start">
          
          {/* أوقات العمل */}
          <div>
            <h3 className="text-3xl font-display font-bold text-amber-500 mb-4">
              {content.hours_title}
            </h3>
            <div className="space-y-2 text-lg text-slate-300">
              {content.hours.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {content.hours_note && (
              <div className="mt-4 flex items-start gap-x-2 rtl:gap-x-reverse text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 mt-1 text-amber-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-base">{content.hours_note}</p>
              </div>
            )}

            <div className="mt-10">
              <h4 className="text-2xl font-display font-bold text-amber-500 mb-4">
                {content.follow_us_title}
              </h4>
              <div className="flex justify-center md:justify-start items-center gap-x-6">
                <a href="https://www.instagram.com/chefeyad.jeddah/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
                  <img src="https://res.cloudinary.com/drredhvtd/image/upload/v1761617972/Untitled-1_lrmmil.png" alt="Instagram" className="h-12 w-12" />
                </a>
                <a href="https://www.tiktok.com/@chefeyadjeddah" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:scale-110 transition-transform">
                  <img src="https://res.cloudinary.com/drredhvtd/image/upload/v1761618269/pngwing.com_rotzz4.png" alt="TikTok" className="h-12 w-12" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=9660552218833" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:scale-110 transition-transform">
                  <img src="https://res.cloudinary.com/drredhvtd/image/upload/v1761618810/27-273312_whatsapp-png-transparent-png_jp4317.png" alt="WhatsApp" className="h-12 w-12" />
                </a>
              </div>
            </div>
          </div>

          {/* الموقع */}
          <div>
            <h3 className="text-3xl font-display font-bold text-amber-500 mb-4">
              {content.location_title}
            </h3>
            <a
              href="https://maps.app.goo.gl/FNoLxvzKAwqnpL7CA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-slate-300 hover:text-amber-500 transition-colors"
            >
              {content.location}
            </a>

            <div className="mt-4 h-64 bg-slate-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14838.72972412891!2d39.164214!3d21.600022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d9a16f55555d%3A0x4a9b4f9c5d18b8f!2sSmoked%20House!5e0!3m2!1sen!2sus!4v1722378939767!5m2!1sen!2sus"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chef Eyad Location Map"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Info;