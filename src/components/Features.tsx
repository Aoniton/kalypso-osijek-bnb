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
          description: "Your own quiet corner to relax and recharge",
        },
        {
          icon: Flame,
          title: "Finnish Sauna",
          description: "Gentle heat, calm mind and pure comfort",
        },
        {
          icon: Lightbulb,
          title: "LED Ambiance",
          description: "Soft lights set the mood for any moment",
        },
        {
          icon: Wifi,
          title: "Smart TV & WiFi",
          description: "High-speed internet and premium entertainment options",
        },
        {
          icon: Heart,
          title: "Romantic Setups",
          description: "Complimentary romantic arrangements for special occasions",
        },
        {
          icon: Star,
          title: "Premium Amenities",
          description: "All the little things that make a big difference",
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
          description: "Topla kupka, prigušena svjetla i trenutak samo za Vas",
        },
        {
          icon: Flame,
          title: "Finska Sauna",
          description: "Mir, tišina i ugodna toplina — za Vas",
        },
        {
          icon: Lightbulb,
          title: "LED Ambijent",
          description: "Svjetlo koje prati Vaš trenutak i stvara poseban ugođaj",
        },
        {
          icon: Wifi,
          title: "Smart TV & WiFi",
          description: "Brzi internet i premium zabavne opcije",
        },
        {
          icon: Heart,
          title: "Romantični Aranžmani",
          description: "Dodatni romantični aranžmani za posebne prilike",
        },
        {
          icon: Star,
          title: "Premium Sadržaji",
          description: "Sve male stvari koje čine veliku razliku",
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
