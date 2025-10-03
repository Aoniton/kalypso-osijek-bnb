import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
// Temporarily commented out - upload hero-kalypso.jpg to src/assets/ then uncomment
// import heroImage from "@/assets/hero-kalypso.jpg";
const heroImage = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920";

interface HeroProps {
  language: "en" | "hr";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      title: "Experience Luxury Wellness",
      subtitle: "in the Heart of Osijek",
      description: "Your romantic escape awaits with jacuzzi, sauna, and ultimate relaxation",
      cta: "Book Your Stay",
    },
    hr: {
      title: "Doživite Luksuzni Wellness",
      subtitle: "u Srcu Osijeka",
      description: "Vaš romantični bijeg čeka s jacuzzijem, saunom i ultimativnim opuštanjem",
      cta: "Rezerviraj Svoj Boravak",
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
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4">
            {content[language].title}
          </h1>
          <p className="font-heading text-3xl md:text-5xl text-accent mb-6">
            {content[language].subtitle}
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {content[language].description}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-12 py-6 text-lg rounded-xl shadow-luxury hover:shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = "/contact"}
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
