import { Card, CardContent } from "@/components/ui/card";
import { Waves, Flame, Lightbulb, Wifi, Heart, Star } from "lucide-react";

interface FeaturesProps {
  language: "en" | "hr";
}

const Features = ({ language }: FeaturesProps) => {
  const content = {
    en: {
      title: "Wellness & Features",
      subtitle: "Everything You Need for the Perfect Stay",
      features: [
        {
          icon: Waves,
          title: "Private Jacuzzi",
          description: "Luxurious hot tub with hydro-massage jets and chromotherapy lighting",
        },
        {
          icon: Flame,
          title: "Finnish Sauna",
          description: "Traditional dry sauna for deep relaxation and detoxification",
        },
        {
          icon: Lightbulb,
          title: "LED Ambiance",
          description: "Customizable mood lighting to create your perfect atmosphere",
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
          description: "Luxury toiletries, plush towels, and premium bedding",
        },
      ],
    },
    hr: {
      title: "Wellness & Sadržaji",
      subtitle: "Sve Što Vam Je Potrebno za Savršeni Boravak",
      features: [
        {
          icon: Waves,
          title: "Privatni Jacuzzi",
          description: "Luksuzna hidromasažna kada s mlaznicama i kromoterapijskim osvjetljenjem",
        },
        {
          icon: Flame,
          title: "Finska Sauna",
          description: "Tradicionalna suha sauna za duboko opuštanje i detoksikaciju",
        },
        {
          icon: Lightbulb,
          title: "LED Ambijent",
          description: "Prilagodljivo raspoloženjsko osvjetljenje za vašu savršenu atmosferu",
        },
        {
          icon: Wifi,
          title: "Smart TV & WiFi",
          description: "Brzi internet i premium zabavne opcije",
        },
        {
          icon: Heart,
          title: "Romantični Aranžmani",
          description: "Besplatni romantični aranžmani za posebne prilike",
        },
        {
          icon: Star,
          title: "Premium Sadržaji",
          description: "Luksuzni toaletni pribor, mekani ručnici i premium posteljina",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 shadow-glow">
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
