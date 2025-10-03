import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Car } from "lucide-react";

interface LocationProps {
  language: "en" | "hr";
}

const Location = ({ language }: LocationProps) => {
  const content = {
    en: {
      title: "Location",
      subtitle: "In the Heart of Osijek",
      address: "Vrt Jagode Truhelke 1, Osijek, Croatia",
      nearby: "Nearby Attractions",
      attractions: [
        { name: "City Center", distance: "5 min walk" },
        { name: "Tvrđa (Old Town)", distance: "10 min walk" },
        { name: "Drava River Promenade", distance: "3 min walk" },
      ],
      directions: "Easy Access",
      access: [
        "Free street parking available",
        "10 minutes from main bus station",
        "Close to all major restaurants and cafes",
      ],
    },
    hr: {
      title: "Lokacija",
      subtitle: "U Srcu Osijeka",
      address: "Vrt Jagode Truhelke 1, Osijek, Hrvatska",
      nearby: "Obližnje Atrakcije",
      attractions: [
        { name: "Centar Grada", distance: "5 min hoda" },
        { name: "Tvrđa", distance: "10 min hoda" },
        { name: "Dravska Šetnica", distance: "3 min hoda" },
      ],
      directions: "Jednostavan Pristup",
      access: [
        "Besplatan parking na ulici",
        "10 minuta od glavnog autobusnog kolodvora",
        "Blizu svih glavnih restorana i kafića",
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <Card className="overflow-hidden shadow-luxury animate-slide-in-left">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <p className="text-muted-foreground text-center px-8">
                [Google Maps embed placeholder - Vrt Jagode Truhelke 1, Osijek]
              </p>
            </div>
          </Card>

          {/* Info */}
          <div className="space-y-6 animate-slide-in-right">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                      {content[language].address}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-3 text-foreground">
                      {content[language].nearby}
                    </h3>
                    <ul className="space-y-2">
                      {content[language].attractions.map((attraction, index) => (
                        <li key={index} className="text-muted-foreground">
                          <span className="font-medium text-foreground">{attraction.name}</span> - {attraction.distance}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Car className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-3 text-foreground">
                      {content[language].directions}
                    </h3>
                    <ul className="space-y-2">
                      {content[language].access.map((item, index) => (
                        <li key={index} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
