import { Link } from "react-router-dom";
import { Facebook, Instagram, Star } from "lucide-react";
import logo from "@/assets/zvone-logo.png";

interface FooterProps {
  language: "en" | "hr";
}

const Footer = ({ language }: FooterProps) => {
  const navItems = {
    en: [
      { label: "Apartment", path: "/apartment" },
      { label: "Wellness", path: "/wellness" },
      { label: "Gallery", path: "/gallery" },
      { label: "Location", path: "/location" },
      { label: "Contact", path: "/contact" },
      { label: "FAQ", path: "/faq" },
      { label: "About Us", path: "/about" },
    ],
    hr: [
      { label: "Apartman", path: "/apartment" },
      { label: "Wellness", path: "/wellness" },
      { label: "Galerija", path: "/gallery" },
      { label: "Lokacija", path: "/location" },
      { label: "Kontakt", path: "/contact" },
      { label: "ČPP", path: "/faq" },
      { label: "O nama", path: "/about" },
    ],
  };

  const content = {
    en: {
      rights: "All rights reserved.",
      tagline: "Luxury Wellness in the Heart of Osijek",
    },
    hr: {
      rights: "Sva prava pridržana.",
      tagline: "Luksuzni Wellness u Srcu Osijeka",
    },
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img 
                src={logo} 
                alt="Kalypso Osijek Wellness Apartment logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-heading font-bold text-primary leading-tight">
                    Kalypso
                  </h3>
                  <h3 className="text-lg font-heading font-bold text-primary leading-tight">
                    Osijek
                  </h3>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium text-secondary-foreground">Wellness Apartment</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-secondary-foreground/80">
              {content[language].tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navItems[language].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a href="tel:+385914446571" className="hover:text-accent transition-colors">
                  +385 91 444 6571
                </a>
              </li>
              <li>
                <a href="mailto:zvone098@net.hr" className="hover:text-accent transition-colors">
                  zvone098@net.hr
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/kalypso.osijek"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors group"
                >
                  <Facebook className="w-4 h-4 mr-2 group-hover:text-primary" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/wellness_apartment_kalypso/?hl=en"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors group"
                >
                  <Instagram className="w-4 h-4 mr-2 group-hover:text-primary" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Kalypso Osijek. {content[language].rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
