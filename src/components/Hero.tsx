import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-kalypso.jpg";

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
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-[90%] mx-auto animate-fade-in">
          <h1 className="font-extrabold tracking-tight text-4xl md:text-6xl leading-relaxed md:leading-[1.1] text-white">
            {content[language].title}
            <br />
            {content[language].titleLine2}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mt-2" style={{ color: '#e75f91' }}>
            {content[language].subtitle}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white/90 mt-3 max-w-2xl mx-auto">
            {content[language].description}
          </p>
          <Button
            size="lg"
            className="w-full max-w-[300px] mx-auto mt-5 font-semibold px-8 py-6 text-base md:text-lg rounded-xl shadow-lg hover:ring-2 hover:ring-pink-300/40 transition-all duration-300"
            style={{ backgroundColor: '#e75f91', color: 'white' }}
            onClick={() => window.location.href = "/contact"}
            aria-label={content[language].ctaAriaLabel}
          >
            {content[language].cta}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
