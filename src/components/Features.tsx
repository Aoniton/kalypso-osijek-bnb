import { Card, CardContent } from "@/components/ui/card";
import { Waves, Flame, Lightbulb, Wifi, Heart, Star } from "lucide-react";

interface FeaturesProps {
  language: "en" | "hr";
}

const Features = ({ language }: FeaturesProps) => {
  const content = {
    en: {
      title: "Wellness Experience",
      subtitle: "Everything You Need For The Perfect Stay",
      features: [
        {
          icon: Waves,
          title: "Private Jacuzzi",
          description: "End the day together in warm, bubbling water made for long talks and quiet smiles",
        },
        {
          icon: Flame,
          title: "Finnish Sauna",
          description: "Step into the heat, leave the world outside, and share a moment that feels timeless",
        },
        {
          icon: Lightbulb,
          title: "LED Ambiance",
          description: "Soft lights set the scene — romantic, calm, and just the way you want it",
        },
        {
          icon: Wifi,
          title: "Smart TV & WiFi",
          description: "Cozy nights in, your favorite film, and nothing else on the schedule",
        },
        {
          icon: Heart,
          title: "Romantic Setups",
          description: "Candles, details, and little surprises that turn a simple evening into something unforgettable",
        },
        {
          icon: Star,
          title: "Premium Amenities",
          description: "Everything you need — and more — to make your time together feel truly special",
        },
      ],
    },
    hr: {
      title: "Wellness Doživljaj",
      subtitle: "Sve Što Vam Je Potrebno Za Savršeni Boravak",
      features: [
        {
          icon: Waves,
          title: "Privatni Jacuzzi",
          description: "Završite dan zajedno u toplim mjehurićima, uz duge razgovore i tihe osmijehe",
        },
        {
          icon: Flame,
          title: "Finska Sauna",
          description: "Uđite u toplinu, ostavite svijet vani i podijelite trenutak koji ostaje u sjećanju",
        },
        {
          icon: Lightbulb,
          title: "LED Ambijent",
          description: "Nježno svjetlo stvara savršenu atmosferu — romantičnu, mirnu i baš po Vašoj mjeri",
        },
        {
          icon: Wifi,
          title: "Smart TV & WiFi",
          description: "Udobna večer, omiljeni film i ništa drugo na rasporedu",
        },
        {
          icon: Heart,
          title: "Romantični Aranžmani",
          description: "Svijeće, detalji i mala iznenađenja koja običnu večer pretvaraju u posebnu uspomenu",
        },
        {
          icon: Star,
          title: "Premium Sadržaji",
          description: "Sve što Vam treba — i više — kako bi zajednički trenuci bili nezaboravni",
        },
      ],
    },
  };

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {content[language].title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content[language].features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 animate-scale-in border shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 shadow-soft">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
