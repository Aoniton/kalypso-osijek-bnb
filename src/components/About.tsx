import { Card } from "@/components/ui/card";
import livingRoomImage from "@/assets/living-room.jpg";
import romanticSetupImage from "@/assets/romantic-setup.jpg";

interface AboutProps {
  language: "en" | "hr";
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: "Welcome to Kalypso",
      subtitle: "Your Luxury Wellness Retreat",
      description: [
        "Located in the heart of Osijek, Kalypso is more than a place to stay — it's a space carefully created to make you feel like you've escaped the everyday. Every corner was designed to bring you a sense of calm, privacy, and warmth — the kind you look for when you want to slow down and simply be.",
        "At the center of it all is your private wellness area. A hydromassage jacuzzi and Finnish sauna await, ready to help you unwind at any time. Soft ambient lighting turns the space into a quiet retreat — intimate, soothing, and made for two.",
        "Kalypso was built for those who want more than just accommodation. For couples seeking a romantic getaway, or anyone craving a peaceful weekend in a city that moves at its own gentle pace — this is a place to pause, breathe, and make memories that stay with you.",
      ],
    },
    hr: {
      title: "Dobrodošli u Kalypso",
      subtitle: "Mjesto za opuštanje i uživanje",
      description: [
        "Smješten u samom srcu Osijeka, Kalypso je više od smještaja — to je prostor koji smo stvarali s pažnjom, kako biste se osjećali kao da ste pobjegli iz svakodnevice. Svaki kut apartmana oblikovan je tako da pruži mir, privatnost i toplinu koju tražite kada želite usporiti i jednostavno biti.",
        "Naš wellness kutak čini srce ovog doživljaja. Privatni hidromasažni jacuzzi i finska sauna spremni su u svakom trenutku pružiti vam potpunu relaksaciju. Uz nježno ambijentalno svjetlo, prostor se pretvara u intimno utočište, idealno za dvoje.",
        "Kalypso je stvoren za one koji žele više od običnog odmora — za parove koji traže romantični bijeg, ali i za one koji jednostavno žele vikend mira i udobnosti u gradu koji diše posebnim ritmom.",
      ],
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-elegant">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {content[language].title}
          </h2>
          <p className="text-xl text-accent font-semibold">
            {content[language].subtitle}
          </p>
        </div>

        {/* First Block: Text + Image */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12 animate-slide-in-left">
          {/* First Text Block (paragraphs 0 and 1) */}
          <div className="space-y-4">
            <p className="text-muted-foreground leading-loose">
              {content[language].description[0]}
            </p>
            <p className="text-muted-foreground leading-loose">
              {content[language].description[1]}
            </p>
          </div>

          {/* Living Room Image - visible on tablet/desktop, hidden on mobile */}
          <Card className="overflow-hidden shadow-luxury hover:shadow-glow transition-all duration-300 hidden md:block">
            <div className="aspect-[4/3] relative">
              <img
                src={livingRoomImage}
                alt="Kalypso Osijek living room interior"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>

        {/* Living Room Image - visible on mobile only, below first text block */}
        <div className="mb-12 md:hidden animate-slide-in-right">
          <Card className="overflow-hidden shadow-luxury">
            <div className="aspect-[4/3] relative">
              <img
                src={livingRoomImage}
                alt="Kalypso Osijek living room interior"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>

        {/* Second Block: Image + Text */}
        <div className="grid md:grid-cols-2 gap-8 items-start animate-slide-in-right">
          {/* Romantic Setup Image - visible on tablet/desktop, on left */}
          <Card className="overflow-hidden shadow-luxury hover:shadow-glow transition-all duration-300 hidden md:block">
            <div className="aspect-[4/3] relative">
              <img
                src={romanticSetupImage}
                alt="Kalypso Osijek romantic setup"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          {/* Third Text Block */}
          <div>
            <p className="text-muted-foreground leading-loose">
              {content[language].description[2]}
            </p>
          </div>
        </div>

        {/* Romantic Setup Image - visible on mobile only, below second text block */}
        <div className="mt-12 md:hidden animate-slide-in-left">
          <Card className="overflow-hidden shadow-luxury">
            <div className="aspect-[4/3] relative">
              <img
                src={romanticSetupImage}
                alt="Kalypso Osijek romantic setup"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;