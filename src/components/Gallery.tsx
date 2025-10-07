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
import aboutKalypso from "@/assets/about-kalypso.jpg";
import balcony from "@/assets/balcony.jpg";
import bedroom1 from "@/assets/bedroom1.jpg";
import bedroom2 from "@/assets/bedroom2.jpg";
import dinning from "@/assets/dinning.jpg";
import entrance from "@/assets/entrance.jpg";
import girls from "@/assets/girls.jpg";
import girlsdrink from "@/assets/girlsdrink.jpg";
import girlsinbed from "@/assets/girlsinbed.jpg";
import girlwithbook from "@/assets/girlwithbook.jpg";
import jacuzzi from "@/assets/jacuzzi.jpg";
import jacuzzi1 from "@/assets/jacuzzi1.jpg";
import kitchen from "@/assets/kitchen.jpg";
import kitchen1 from "@/assets/kitchen1.jpg";
import kitchen2 from "@/assets/kitchen2.jpg";
import lounge from "@/assets/lounge.jpg";
import pinkroom from "@/assets/pinkroom.jpg";
import sauna from "@/assets/sauna.jpg";
import shower from "@/assets/shower.jpg";
import view from "@/assets/view.jpg";
import womanSauna from "@/assets/woman-sauna.jpg";

interface GalleryProps {
  language: "en" | "hr";
  excludeTextBlockImages?: boolean;
}

const Gallery = ({ language, excludeTextBlockImages = false }: GalleryProps) => {
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

  const allImages = [
    { src: romanticSetup, alt: "Kalypso Osijek romantic setup", usedInText: true },
    { src: luxuryBedroom, alt: "Kalypso Osijek luxury bedroom", usedInText: true },
    { src: jacuzziInterior, alt: "Kalypso Osijek wellness jacuzzi interior", usedInText: false },
    { src: livingRoom, alt: "Kalypso Osijek modern living room", usedInText: true },
    { src: finnishSauna, alt: "Kalypso Osijek Finnish sauna", usedInText: false },
    { src: jacuzziPurpleLights, alt: "Kalypso Osijek jacuzzi with purple ambient lights", usedInText: true },
    { src: heroKalypso, alt: "Kalypso Osijek luxury wellness apartment exterior", usedInText: false },
    { src: bedroom, alt: "Kalypso Osijek comfortable bedroom", usedInText: true },
    { src: ledLighting, alt: "Kalypso Osijek LED ambient lighting", usedInText: false },
    { src: livingArea, alt: "Kalypso Osijek spacious living area", usedInText: true },
    { src: saunaPhoto, alt: "Kalypso Osijek relaxing sauna experience", usedInText: true },
    { src: bathroomAmenities, alt: "Kalypso Osijek premium bathroom amenities", usedInText: false },
    { src: aboutKalypso, alt: "Kalypso Osijek luxury wellness apartment", usedInText: false },
    { src: balcony, alt: "Kalypso Osijek balcony view", usedInText: false },
    { src: bedroom1, alt: "Kalypso Osijek bedroom interior", usedInText: false },
    { src: bedroom2, alt: "Kalypso Osijek elegant bedroom", usedInText: false },
    { src: dinning, alt: "Kalypso Osijek dining area", usedInText: false },
    { src: entrance, alt: "Kalypso Osijek apartment entrance", usedInText: false },
    { src: girls, alt: "Kalypso Osijek guests enjoying the apartment", usedInText: false },
    { src: girlsdrink, alt: "Kalypso Osijek relaxing with drinks", usedInText: false },
    { src: girlsinbed, alt: "Kalypso Osijek comfortable bedroom experience", usedInText: false },
    { src: girlwithbook, alt: "Kalypso Osijek relaxing reading area", usedInText: false },
    { src: jacuzzi, alt: "Kalypso Osijek luxury jacuzzi", usedInText: false },
    { src: jacuzzi1, alt: "Kalypso Osijek jacuzzi wellness area", usedInText: false },
    { src: kitchen, alt: "Kalypso Osijek modern kitchen", usedInText: false },
    { src: kitchen1, alt: "Kalypso Osijek kitchen interior", usedInText: false },
    { src: kitchen2, alt: "Kalypso Osijek fully equipped kitchen", usedInText: false },
    { src: lounge, alt: "Kalypso Osijek lounge area", usedInText: false },
    { src: pinkroom, alt: "Kalypso Osijek pink themed room", usedInText: false },
    { src: sauna, alt: "Kalypso Osijek sauna interior", usedInText: false },
    { src: shower, alt: "Kalypso Osijek modern shower", usedInText: false },
    { src: view, alt: "Kalypso Osijek scenic view", usedInText: false },
    { src: womanSauna, alt: "Kalypso Osijek sauna relaxation", usedInText: false },
  ];

  const images = excludeTextBlockImages 
    ? allImages.filter(img => !img.usedInText)
    : allImages;

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
