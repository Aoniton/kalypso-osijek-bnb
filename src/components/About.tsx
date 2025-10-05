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
        "In the center of Osijek, Kalypso offers more than just a stay — it gives you a moment to breathe and connect. The apartment blends comfort, style, and privacy to create the perfect space for couples and those who simply want to relax.",
        "Our exclusive wellness apartment features a private jacuzzi, Finnish sauna, and ambient LED lighting designed to create the perfect romantic atmosphere.",
        "Whether it’s a romantic getaway or a quiet weekend for yourself, Kalypso makes every stay feel personal and special.",
      ],
    },
    hr: {
      title: "Dobrodošli u Kalypso",
      subtitle: "Mjesto za opuštanje i uživanje",
      description: [
        "U samom centru Osijeka, Kalypso nije samo smještaj — to je prilika da usporite, odmorite i povežete se. Apartman spaja udobnost, stil i privatnost, stvarajući savršen prostor za parove i sve koji žele pobjeći od svakodnevice.",
        "Naš ekskluzivni wellness apartman sadrži privatni jacuzzi, finsku saunu i ambijentalno LED osvjetljenje dizajnirano da stvori savršenu romantičnu atmosferu.",
        "Opustite se u toplom jacuzziju, uživajte u finskoj sauni i pustite da ugodna rasvjeta stvori pravi ugođaj."
        "Bilo da dolazite na romantični bijeg ili miran vikend za sebe, Kalypso čini svaki boravak posebnim.",
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
