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
        "Escape to Kalypso Osijek, where modern luxury meets ultimate relaxation in the heart of Croatia's cultural gem.",
        "Our exclusive wellness apartment features a private jacuzzi, Finnish sauna, and ambient LED lighting designed to create the perfect romantic atmosphere.",
        "Whether you're celebrating a special occasion or simply seeking a peaceful retreat, Kalypso offers an unforgettable experience tailored for couples and wellness enthusiasts.",
      ],
    },
    hr: {
      title: "Dobrodošli u Kalypso",
      subtitle: "Vaše Luksuzno Wellness Utočište",
      description: [
        "Pobjegnite u Kalypso Osijek, gdje se moderna luksuz susreće s ultimativnim opuštanjem u srcu kulturnog dragulja Hrvatske.",
        "Naš ekskluzivni wellness apartman sadrži privatni jacuzzi, finsku saunu i ambijentalno LED osvjetljenje dizajnirano da stvori savršenu romantičnu atmosferu.",
        "Bilo da proslavljate posebnu priliku ili jednostavno tražite mirno utočište, Kalypso nudi nezaboravno iskustvo prilagođeno parovima i wellness entuzijastima.",
      ],
    },
  };

  return (
    <section className="py-20 px-4 bg-background">
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
              <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image Card */}
          <div className="animate-slide-in-right">
            <Card className="overflow-hidden shadow-luxury hover:shadow-glow transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src={aboutImage}
                  alt="Kalypso Osijek luxury apartment interior"
                  className="w-full h-full object-cover"
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
