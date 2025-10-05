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
        { name: "City Center", distance: "1 min walk" },
        { name: "Tvrđa (Old Town)", distance: "10 min walk" },
        { name: "Drava River Promenade", distance: "3 min walk" },
      ],
      directions: "Easy Access",
      access: [
        "Free parking available",
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
        { name: "Centar Grada", distance: "1 min hoda" },
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
          <p className="text-xl text-primary">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <Card className="overflow-hidden shadow-luxury animate-slide-in-left p-0">
            <div className="w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.8397!2d18.6947!3d45.5547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7a0b3c0b0b1%3A0x0!2sVrt%20Jagode%20Truhelke%201%2C%20Osijek!5e0!3m2!1sen!2shr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kalypso Osijek Location"
              />
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
