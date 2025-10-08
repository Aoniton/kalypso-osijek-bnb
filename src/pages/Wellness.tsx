import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import jacuzziPurpleLights from "@/assets/jacuzzi-purple-lights.jpg";
import saunaPhoto from "@/assets/sauna-photo.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const Wellness = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      title: "Wellness Experience",
      subtitle: "Relax, Rejuvenate, Romance",
      introPart1: "The centerpiece of the apartment is the private wellness area — your own intimate spa, ready whenever you are.",
      introPart2: "The hydromassage jacuzzi melts away stress with every bubble, while the Finnish sauna wraps you in soothing warmth, perfect for unwinding after a long day or sharing a quiet moment with someone special. It's an experience usually reserved for luxury resorts, now entirely yours.",
    },
    hr: {
      title: "Wellness Iskustvo",
      subtitle: "Opuštanje, Podmlađivanje, Romansa",
      introPart1: "Središnji dio apartmana čini privatna wellness zona — vaš osobni spa, dostupan kad god poželite.",
      introPart2: "Hidromasažni jacuzzi opušta svaki mišić i otpušta stres, dok vas finska sauna obavija ugodnom toplinom, savršenom za potpuno opuštanje ili intimne trenutke u dvoje. Doživljaj koji se inače veže uz luksuzne hotele, ovdje je samo Vaš.",
    },
  };

  return (
    <div className="min-h-screen">
      <StructuredData type="wellness" />
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-foreground">
                {content[language].title}
              </h1>
              <p className="text-xl text-accent font-semibold mb-6">
                {content[language].subtitle}
              </p>
            </div>

            {/* Mobile Layout - Images between text */}
            <div className="md:hidden space-y-6 mb-16">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide font-light text-left">
                {content[language].introPart1}
              </p>
              
              <Card className="overflow-hidden shadow-luxury">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={jacuzziPurpleLights} 
                    alt="Kalypso Osijek jacuzzi with purple LED lights" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide font-light text-left">
                {content[language].introPart2}
              </p>

              <Card className="overflow-hidden shadow-luxury">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={saunaPhoto} 
                    alt="Kalypso Osijek Finnish sauna interior" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Tablet/Desktop Layout - Text above, images side by side */}
            <div className="hidden md:block mb-16">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-wide font-light text-left mb-8">
                {content[language].introPart1} {content[language].introPart2}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden shadow-luxury animate-slide-in-left">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={jacuzziPurpleLights} 
                      alt="Kalypso Osijek jacuzzi with purple LED lights" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
                <Card className="overflow-hidden shadow-luxury animate-slide-in-right">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={saunaPhoto} 
                      alt="Kalypso Osijek Finnish sauna interior" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Features language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Wellness;
