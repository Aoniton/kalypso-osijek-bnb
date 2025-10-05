import { Card } from "@/components/ui/card";
import luxuryBedroom from "@/assets/luxury-bedroom.jpg";
import romanticSetup from "@/assets/romantic-setup.jpg";
import jacuzziInterior from "@/assets/jacuzzi-interior.jpg";
import finnishSauna from "@/assets/finnish-sauna.jpg";
import ledLighting from "@/assets/LED-ambient-lighting.jpg";
import bathroomAmenities from "@/assets/bathroom-amenities.jpg";
import bedroom from "@/assets/bedroom.jpg";
import heroKalypso from "@/assets/hero-kalypso.jpg";
import jacuzziPurpleLights from "@/assets/jacuzzi-purple-lights.jpg";
import livingArea from "@/assets/living-area.jpg";
import livingRoom from "@/assets/living-room.jpg";
import saunaPhoto from "@/assets/sauna-photo.jpg";

interface GalleryProps {
  language: "en" | "hr";
} 

const Gallery = ({ language }: GalleryProps) => {
  const content = {
    en: {
      title: "Gallery",
      subtitle: "Explore Our Luxury Wellness Apartment",
    },
    hr: {
      title: "Galerija",
      subtitle: "Istražite Naš Luksuzni Wellness Apartman",
    },
  };

  const images = [
    { src: romanticSetup, alt: "Kalypso Osijek romantic setup" },
    { src: luxuryBedroom, alt: "Kalypso Osijek luxury bedroom" },
    { src: jacuzziInterior, alt: "Kalypso Osijek wellness jacuzzi interior" },
    { src: heroKalypso, alt: "Kalypso Osijek luxury wellness apartment exterior" },
    { src: finnishSauna, alt: "Kalypso Osijek Finnish sauna" },
    { src: jacuzziPurpleLights, alt: "Kalypso Osijek jacuzzi with purple ambient lights" },
    { src: livingRoom, alt: "Kalypso Osijek modern living room" },
    { src: bedroom, alt: "Kalypso Osijek comfortable bedroom" },
    { src: ledLighting, alt: "Kalypso Osijek LED ambient lighting" },
    { src: livingArea, alt: "Kalypso Osijek spacious living area" },
    { src: saunaPhoto, alt: "Kalypso Osijek relaxing sauna experience" },
    { src: bathroomAmenities, alt: "Kalypso Osijek premium bathroom amenities" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {content[language].title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-luxury transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-scale-in group p-0 border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] w-full relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
