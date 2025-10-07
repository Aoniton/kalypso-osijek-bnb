import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookNowButton from "@/components/BookNowButton";
import { Card, CardContent } from "@/components/ui/card";
import livingArea from "@/assets/living-area.jpg";
import bedroom from "@/assets/bedroom.jpg";
import livingRoom from "@/assets/living-room.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const Apartment = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      title: "The Apartment",
      subtitle: "Modern Luxury in Every Detail",
      description: (
        <>
          In the very heart of Osijek lies Kalypso — a place where the everyday stays at the door, and a rare sense of calm welcomes you inside.<br /><br />
          Every detail, from the warm lighting to the carefully chosen interior touches, has been designed to create a space that feels soothing, intimate, and comfortable — like coming home, only more refined.<br /><br />
          It's more than a place to stay — It’s where you slow down, reconnect, and savor moments that linger. Whether you’re looking for a romantic escape for two or a quiet weekend for yourself, Kalypso offers a space where every second carries meaning.
        </>
      ),
      
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
      description: (
        <>
          U samom srcu Osijeka nalazi se Kalypso apartman — mjesto gdje svakodnevica prestaje čim zakoračite unutra.<br /><br />
          Svaki detalj, od toplog svjetla do pažljivo odabranih elemenata interijera, zamišljen je kako bi prostor djelovao smirujuće, toplo i ugodno — kao da ste došli kući, ali u luksuznijoj verziji.<br /><br />
          Ovdje ne dolazite samo prespavati. Ovdje dolazite usporiti, ponovno se povezati i uživati u trenucima koji ostaju u sjećanju. Bilo da ste u potrazi za romantičnim bijegom u dvoje ili mirnim vikendom za sebe, Kalypso nudi prostor u kojem svaki trenutak ima svoju težinu i značenje.
        </>
      ),
      
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
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide px-4 md:px-0 font-light">
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
      <BookNowButton language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Apartment;
