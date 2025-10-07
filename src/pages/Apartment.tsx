import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      subtitle: (
        <>
          Modern Luxury in <br className="md:hidden" />Every Detail
        </>
      ),
      descriptionParts: [
        "In the very heart of Osijek lies Kalypso — a place where the everyday stays at the door, and a rare sense of calm welcomes you inside.",
        "Every detail, from the warm lighting to the carefully chosen interior touches, has been designed to create a space that feels soothing, intimate, and comfortable — like coming home, only more refined.",
        "It's more than a place to stay — It's where you slow down, reconnect, and savor moments that linger. Whether you're looking for a romantic escape for two or a quiet weekend for yourself, Kalypso offers a space where every second carries meaning.",
      ],
      features: [
        <>Private <strong>hydromassage jacuzzi</strong> for total relaxation</>,
        <><strong>Finnish sauna</strong> for deep, soothing warmth</>,
        <>Spacious living room with <strong>premium furnishings</strong></>,
        <>Bedroom with a <strong>king-size bed</strong> and luxury linens</>,
        <>Modern bathroom with a <strong>rainfall shower</strong></>,
        <>Fully equipped kitchenette for a carefree stay</>,
        <>Air conditioning for year-round comfort</>,
        <><strong>Blackout curtains</strong> for the perfect night's rest</>,
      ],
    },
    hr: {
      title: "Apartman",
      subtitle: (
        <>
          Moderan Luksuz u <br className="md:hidden" />Svakom Detalju
        </>
      ),
      descriptionParts: [
        "U samom srcu Osijeka nalazi se Kalypso apartman — mjesto gdje svakodnevica prestaje čim zakoračite unutra.",
        "Svaki detalj, od toplog svjetla do pažljivo odabranih elemenata interijera, zamišljen je kako bi prostor djelovao smirujuće, toplo i ugodno — kao da ste došli kući, ali u luksuznijoj verziji.",
        "Ovdje ne dolazite samo prespavati. Ovdje dolazite usporiti, ponovno se povezati i uživati u trenucima koji ostaju u sjećanju. Bilo da ste u potrazi za romantičnim bijegom u dvoje ili mirnim vikendom za sebe, Kalypso nudi prostor u kojem svaki trenutak ima svoju težinu i značenje.",
      ],
      features: [
        <>Privatni <strong>jacuzzi s hidromasažom</strong> za potpuni užitak</>,
        <><strong>Finska sauna</strong> za dubinsko opuštanje</>,
        <>Prostrani dnevni boravak s <strong>premium namještajem</strong></>,
        <>Spavaća soba s <strong>king size</strong> krevetom i luksuznom posteljinom</>,
        <>Moderna kupaonica s <strong>kišnim tušem</strong></>,
        <>Potpuno opremljena kuhinjica za bezbrižan boravak</>,
        <>Klima uređaj za udobnost u svako doba godine</>,
        <><strong>Zamračujuće zavjese</strong> za savršen san</>,
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

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden space-y-6 animate-fade-in">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide font-light">
                {content[language].descriptionParts[0]}
              </p>
              
              <Card className="overflow-hidden shadow-luxury">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={livingArea} 
                    alt="Kalypso Osijek luxury living area" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide font-light">
                {content[language].descriptionParts[1]}
              </p>

              <Card className="overflow-hidden shadow-luxury">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={bedroom} 
                    alt="Kalypso Osijek luxury bedroom" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide font-light">
                {content[language].descriptionParts[2]}
              </p>

              <Card className="overflow-hidden shadow-luxury">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={livingRoom} 
                    alt="Kalypso Osijek living room" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

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

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 animate-slide-in-left">
                {content[language].descriptionParts.map((part, index) => (
                  <p key={index} className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide font-light">
                    {part}
                  </p>
                ))}
                
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
