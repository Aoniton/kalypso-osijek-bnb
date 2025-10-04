import { Button } from "@/components/ui/button";
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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt=""
          className="object-cover w-full h-full brightness-[0.9] contrast-[1.05] saturate-[0.9] object-center md:object-center"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 z-[1]" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-[2]">
        <div className="max-w-[90%] mx-auto animate-fade-in">
          <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-tight tracking-tight text-center">
            {content[language].title}
            <br />
            {content[language].titleLine2}
          </h1>
          <p 
            className="mt-2 text-lg md:text-xl leading-relaxed text-center"
            style={{ 
              color: '#e75f91',
              filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))'
            }}
          >
            {content[language].subtitle}
          </p>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-white/90 text-center max-w-[600px] mx-auto">
            {content[language].description}
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="#contact"
              className="w-full max-w-[280px] inline-flex items-center justify-center font-semibold py-3 rounded-xl shadow-lg shadow-pink-300/30 transition hover:brightness-110"
              style={{ backgroundColor: '#e75f91', color: 'white' }}
              aria-label={content[language].ctaAriaLabel}
            >
              {content[language].cta}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce z-[2]"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
