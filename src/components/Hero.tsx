import heroImage from "@/assets/hero-kalypso.jpg";

interface HeroProps {
  language: "en" | "hr";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      title: "The Hidden Diamond",
      titleLine2: "of Osijek",
      subtitle: "Private Luxury. A Place Just for You.",
      description: "Sink into the jacuzzi, breathe in the sauna's warmth, and let the soft light carry the evening. Every detail is here to help you relax, connect, and enjoy the moment.",
      cta: "Book Now",
      ctaAriaLabel: "Book your stay at Kalypso Osijek",
    },
    hr: {
      title: "Skriveni dragulj",
      titleLine2: "Osijeka",
      subtitle: "Privatni luksuz. Mjesto samo za Vas.",
      description: "Uronite u jacuzzi, osjetite toplinu saune i prepustite se ugodnom svjetlu večeri. Svaki je detalj tu da se opustite, povežete i uživate u trenutku.",
      cta: "Rezerviraj sada",
      ctaAriaLabel: "Rezerviraj boravak u Kalypso Osijeku",
    },
  };


  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Cinematic Treatment */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt=""
          className="object-cover w-full h-full brightness-[0.85] contrast-[1.1] saturate-[0.95] will-change-transform animate-hero-kenburns object-[center_70%] md:object-center"
          loading="eager"
        />
        {/* Bottom gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 z-[1]" />
        {/* Vignette overlay for cinematic framing */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)] z-[2]" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-[3]">
        <div className="max-w-[90%] mx-auto">
          <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-tight tracking-wide mb-3 animate-[fade-in_0.8s_ease-out_0.2s_both]">
            {content[language].title}
            <br />
            {content[language].titleLine2}
          </h1>
          <p 
            className="text-lg md:text-xl leading-relaxed mb-4 animate-[fade-in_0.8s_ease-out_0.4s_both]"
            style={{ 
              color: '#e75f91',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
            }}
          >
            {content[language].subtitle}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-[650px] mx-auto mb-6 animate-[fade-in_0.8s_ease-out_0.6s_both]">
            {content[language].description}
          </p>
          <div className="flex justify-center animate-[fade-in_0.8s_ease-out_0.8s_both]">
            <a
              href="#contact"
              className="w-full max-w-[280px] inline-flex items-center justify-center font-medium py-3 rounded-xl shadow-lg shadow-pink-500/30 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/40 active:scale-95 transition-all duration-300 ease-out"
              style={{ backgroundColor: '#e75f91', color: 'white' }}
              aria-label={content[language].ctaAriaLabel}
            >
              {content[language].cta}
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
