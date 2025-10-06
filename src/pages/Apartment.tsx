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
      description: [
        "Tucked right in the heart of Osijek, Kalypso Apartment was created with one thing in mind — to give you a place where the outside world simply fades away. From the moment you walk in, the soft lights, thoughtful design, and calm atmosphere make you feel at ease. It’s more than a place to stay — it’s a space to slow down, reconnect, and enjoy life’s little luxuries.",
        "The centerpiece of the apartment is the private wellness area — your own intimate spa, ready whenever you are. The hydromassage jacuzzi melts away stress with every bubble, while the Finnish sauna wraps you in soothing warmth, perfect for unwinding after a long day or sharing a quiet moment with someone special. It’s an experience usually reserved for luxury resorts, now entirely yours.",
        "Every corner of the apartment was carefully designed to offer both comfort and elegance. The open-plan living area feels spacious yet cozy, perfect for quiet evenings in or celebrating special moments. The king-size bed is dressed in soft, high-quality bedding that makes every night feel like a stay in a five-star hotel.",
        "The modern bathroom features a rainfall shower that washes away the day, while the fully equipped kitchenette lets you prepare a relaxed breakfast or a romantic dinner without ever leaving the comfort of your retreat.",
        "No matter the season, the apartment’s climate control keeps the space at just the right temperature, and blackout curtains ensure a restful night’s sleep. From warm lighting to the smallest decorative details, everything was chosen to make your stay as comfortable and memorable as possible.",
      ],
      
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
      subtitle: "Moderan Luksuz u Svakom Detalju",
      description: [
        "U samom srcu Osijeka nalazi se Kalypso apartman — mjesto gdje svakodnevica prestaje čim zakoračite unutra. Topla rasvjeta, pažljivo osmišljen prostor i mirna atmosfera stvaraju osjećaj doma i opuštenosti. Ovo nije samo smještaj, ovo je prostor u kojem usporavate, ponovno se povezujete i uživate u sitnim luksuzima života.",
        "Središnji dio apartmana čini privatna wellness zona — vaš osobni spa, dostupan kad god poželite. Hidromasažni jacuzzi opušta svaki mišić i otpušta stres, dok vas finska sauna obavija ugodnom toplinom, savršenom za potpuno opuštanje ili intimne trenutke u dvoje. Doživljaj koji se inače veže uz luksuzne hotele, ovdje je samo vaš.",
        "Svaki detalj apartmana pažljivo je biran kako bi spojio udobnost i eleganciju. Prostrani dnevni boravak odiše toplinom i savršen je za mirne večeri ili posebne trenutke s voljenima. King size krevet s mekanom, kvalitetnom posteljinom pruža osjećaj boravka u vrhunskom hotelu — samo s više privatnosti i mira.",
        "Moderna kupaonica s kišnim tušem pruža osjećaj potpune relaksacije, dok vam potpuno opremljena kuhinjica omogućuje da bez žurbe pripremite doručak ili romantičnu večeru, bez potrebe da napuštate svoj kutak mira.",
        "Bez obzira na godišnje doba, klimatizacija održava savršenu temperaturu, a zamračujuće zavjese osiguravaju dubok i miran san. Od rasvjete do dekorativnih detalja, svaki element pažljivo je odabran kako bi vaš boravak bio što ugodniji i posebniji.",
      ],
      
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
