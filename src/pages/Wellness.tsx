import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import { Card } from "@/components/ui/card";

const Wellness = () => {
  const [language, setLanguage] = useState<"en" | "hr">("en");

  const content = {
    en: {
      title: "Wellness Experience",
      subtitle: "Relax, Rejuvenate, Romance",
      intro: "Immerse yourself in a world of luxury wellness designed for ultimate relaxation and romantic moments.",
    },
    hr: {
      title: "Wellness Iskustvo",
      subtitle: "Opustite Se, Podmlađivanje, Romansa",
      intro: "Uronite u svijet luksuznog wellnessa dizajniranog za ultimativno opuštanje i romantične trenutke.",
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
              <p className="text-xl text-accent font-semibold mb-6">
                {content[language].subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {content[language].intro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="overflow-hidden shadow-luxury animate-slide-in-left">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-8">
                    [Jacuzzi with purple LED lights photo]
                  </p>
                </div>
              </Card>
              <Card className="overflow-hidden shadow-luxury animate-slide-in-right">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-8">
                    [Finnish sauna interior photo]
                  </p>
                </div>
              </Card>
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
