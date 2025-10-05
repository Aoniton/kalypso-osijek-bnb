import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import livingArea from "@/assets/living-area.jpg";
import bedroom from "@/assets/bedroom.jpg";
import livingRoom from "@/assets/living-room.jpg";

const Apartment = () => {
  const [language, setLanguage] = useState<"en" | "hr">("en");

  const content = {
    en: {
      title: "The Apartment",
      subtitle: "Modern Luxury in Every Detail",
      description: "Kalypso Osijek is a thoughtfully designed luxury wellness apartment that combines modern aesthetics with ultimate comfort. Every element has been carefully selected to create an atmosphere of sophistication and relaxation.",
      features: [
        "Spacious open-plan living area with premium furnishings",
        "King-size bedroom with luxury bedding",
        "Modern bathroom with rainfall shower",
        "Fully equipped kitchenette",
        "Climate control for year-round comfort",
        "Blackout curtains for perfect rest",
      ],
    },
    hr: {
      title: "Apartman",
      subtitle: "Moderna Luksuz u Svakom Detalju",
      description: "Kalypso Osijek je promišljeno dizajnirani luksuzni wellness apartman koji kombinira modernu estetiku s ultimativnom udobnošću. Svaki element je pažljivo odabran kako bi stvorio atmosferu sofisticiranosti i opuštanja.",
      features: [
        "Prostrani dnevni boravak otvorenog tipa s premium namještajem",
        "Spavaća soba king size s luksuznom posteljinom",
        "Moderna kupaonica s kišnim tušem",
        "Potpuno opremljena kuhinjica",
        "Klimatizacija za cjelogodišnju udobnost",
        "Zamračujuće zavjese za savršen odmor",
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-foreground">
                {content[language].title}
              </h1>
              <p className="text-xl text-accent font-semibold">
                {content[language].subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 animate-slide-in-left">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content[language].description}
                </p>
                
                <Card className="shadow-luxury">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {content[language].features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent mr-3 mt-1">✓</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 animate-slide-in-right">
                <Card className="overflow-hidden shadow-luxury">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={livingArea} 
                      alt="Kalypso Osijek luxury living area" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="overflow-hidden shadow-luxury">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={bedroom} 
                        alt="Kalypso Osijek luxury bedroom" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                  <Card className="overflow-hidden shadow-luxury">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={livingRoom} 
                        alt="Kalypso Osijek living room" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Apartment;
