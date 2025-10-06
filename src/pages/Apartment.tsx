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
        "🛋️ An airy living room with elegant details and soft furnishings, designed for shared moments of calm, connection, and unhurried enjoyment.",
        "🛏️ A spacious king-size bed wrapped in soft linens offers complete privacy and deep rest.",
        "🚿 A modern bathroom with a rainfall shower brings the feeling of a spa retreat — without ever leaving your apartment.",
        "🧖‍♀️ Your private jacuzzi and Finnish sauna create a personal sanctuary for two — a space for closeness, quiet, and total relaxation.",
        "✨ Ambient LED lighting lets you shape the atmosphere — from romantic evenings to peaceful escapes where time seems to slow down.",
        "🍳 A fully equipped kitchenette gives you the freedom to enjoy breakfast or dinner at your own pace, just the way you like it.",
        "🌡️ Perfect climate control year-round keeps everything just right, no matter the season.",
        "🌙 Blackout curtains and thoughtful design ensure restful nights and slow, easy mornings.",
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
        "🛋️ Prozračan dnevni boravak s elegantnim detaljima i udobnim namještajem stvoren je za zajedničke trenutke mira, razgovora i uživanja bez žurbe.",
        "🛏️ Prostrani king size krevet obavijen mekom posteljinom pruža osjećaj potpune privatnosti i odmora.",
        "🚿 Kupaonica s kišnim tušem donosi doživljaj modernog wellness centra — bez da napustite svoj apartman.",
        "🧖‍♀️ Privatni jacuzzi i finska sauna nude prostor samo za vas dvoje — za trenutke bliskosti, tišine i dubokog opuštanja.",
        "✨ Ambijentalno LED osvjetljenje nježno oblikuje atmosferu — od romantičnih večeri do intimnog utočišta gdje vrijeme staje.",
        "🍳 Potpuno opremljena kuhinja omogućuje vam da bez žurbe uživate u doručku ili večeri, baš onako kako želite.",
        "🌡️ Ugodna klima tijekom cijele godine čini svaki boravak savršeno ugodnim, neovisno o sezoni.",
        "🌙 Zamračujuće zavjese i pažljivo osmišljen prostor jamče mirne noći i spora, bezbrižna jutra.",
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
