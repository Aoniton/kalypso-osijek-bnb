import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/jacuzzi-interior.jpg";

interface HeroProps {
  language: "en" | "hr";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      title: "The Hidden Diamond",
      titleLine2: "of Osijek, Croatia",
      subtitle: "Private Luxury. A Place Just for You.",
      description: "Sink into the jacuzzi, breathe in the sauna's warmth, and let the soft light carry the evening. Every detail is here to help you relax, connect, and enjoy the moment.",
      cta: "Book Now",
      ctaAriaLabel: "Book your stay at Kalypso Osijek",
    },
    hr: {
      title: "Skriveni dragulj",
      titleLine2: "Osijeka, Hrvatske",
      subtitle: "Privatni luksuz. Mjesto samo za vas.",
      description: "Uronite u jacuzzi, osjetite toplinu saune i prepustite se mekanom svjetlu večeri. Svaki je detalj tu da se opustite, povežete i uživate u trenutku.",
      cta: "Rezerviraj sada",
      ctaAriaLabel: "Rezerviraj boravak u Kalypso Osijeku",
    },
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex flex-col justify-end pb-20 px-4 text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-[center_70%] md:object-center brightness-[0.85] contrast-[1.1] saturate-[0.9] will-change-transform animate-hero-kenburns"
        />
        {/* Bottom-focused gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 z-[1]" />
        {/* Vignette overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)] z-[2]" />
      </div>

      {/* Content */}
      <div className="relative z-[3] max-w-[90%] mx-auto">
        <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-tight tracking-tight mb-3">
          {content[language].title}
          <br />
          {content[language].titleLine2}
        </h1>
        <p 
          className="text-lg md:text-xl leading-relaxed mb-4"
          style={{ 
            color: '#e75f91',
            filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))'
          }}
        >
          {content[language].subtitle}
        </p>
        <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-[600px] mx-auto mb-6">
          {content[language].description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center font-semibold py-3 px-8 rounded-xl shadow-lg transition hover:brightness-110"
          style={{ backgroundColor: '#e75f91', color: 'white', boxShadow: '0 4px 20px rgba(231, 95, 145, 0.3)' }}
          aria-label={content[language].ctaAriaLabel}
        >
          {content[language].cta}
        </a>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce z-[3]"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
