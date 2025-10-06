import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/about-kalypso.jpg";

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
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {content[language].title}
            </h2>
            <p className="text-xl text-accent font-semibold mb-6">
              {content[language].subtitle}
            </p>
            {content[language].description.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-4 leading-loose">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image Card */}
          <div className="animate-slide-in-right">
            <Card className="overflow-hidden shadow-luxury hover:shadow-glow transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <img
                  src={aboutImage}
                  alt="Kalypso Osijek luxury apartment interior"
                  className="w-full h-full object-cover filter brightness-95 saturate-90 sepia-[0.1]"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;