import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type: "home" | "apartment" | "wellness" | "location" | "privacy";
}

const StructuredData = ({ type }: StructuredDataProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.com';
  
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Kalypso Luxury Wellness Apartment Osijek",
    "description": "Private luxury wellness apartment in the heart of Osijek featuring jacuzzi, Finnish sauna, and premium amenities for romantic getaways and relaxation.",
    "image": `${baseUrl}/assets/hero-kalypso.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Osijek",
      "addressCountry": "HR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.5550,
      "longitude": 18.6955
    },
    "url": baseUrl,
    "telephone": "+385-XX-XXX-XXXX",
    "priceRange": "€€€",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Jacuzzi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Finnish Sauna",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Smart TV",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Kitchen",
        "value": true
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const getStructuredData = () => {
    switch (type) {
      case "home":
        return {
          ...baseOrganization,
          "@type": ["LodgingBusiness", "TouristAttraction"],
          "additionalType": "https://schema.org/Resort"
        };
      
      case "apartment":
        return {
          "@context": "https://schema.org",
          "@type": "Accommodation",
          "name": "Kalypso Luxury Wellness Apartment",
          "description": "Modern luxury apartment featuring king-size bed, private jacuzzi, Finnish sauna, and premium furnishings in central Osijek.",
          "image": [
            `${baseUrl}/assets/living-area.jpg`,
            `${baseUrl}/assets/bedroom.jpg`,
            `${baseUrl}/assets/living-room.jpg`
          ],
          "numberOfRooms": "2",
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": "60",
            "unitCode": "MTK"
          },
          "occupancy": {
            "@type": "QuantitativeValue",
            "value": "2"
          },
          "amenityFeature": baseOrganization.amenityFeature
        };
      
      case "wellness":
        return {
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "name": "Kalypso Wellness Experience",
          "description": "Private wellness spa featuring hydromassage jacuzzi and authentic Finnish sauna with LED ambient lighting.",
          "image": [
            `${baseUrl}/assets/jacuzzi-purple-lights.jpg`,
            `${baseUrl}/assets/sauna-photo.jpg`
          ],
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Private Jacuzzi Experience",
                "description": "Hydromassage jacuzzi with LED ambient lighting for ultimate relaxation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Finnish Sauna",
                "description": "Authentic Finnish sauna for deep relaxation and wellness"
              }
            }
          ]
        };
      
      case "location":
        return {
          "@context": "https://schema.org",
          "@type": "Place",
          "name": "Kalypso Apartment Location",
          "description": "Located in the heart of Osijek, Croatia, within walking distance to main attractions, restaurants, and cultural sites.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Osijek",
            "addressRegion": "Osječko-baranjska županija",
            "addressCountry": "HR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.5550,
            "longitude": 18.6955
          },
          "hasMap": "https://maps.google.com/?q=Osijek,Croatia"
        };
      
      case "privacy":
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy - Kalypso Luxury Wellness Apartment",
          "description": "Privacy policy and data protection information for Kalypso Luxury Wellness Apartment Osijek.",
          "url": `${baseUrl}/privacy-policy`
        };
      
      default:
        return baseOrganization;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;
