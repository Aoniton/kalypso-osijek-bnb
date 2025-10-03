import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";

interface FooterProps {
  language: "en" | "hr";
}

const Footer = ({ language }: FooterProps) => {
  const navItems = {
    en: [
      { label: "Home", path: "/" },
      { label: "Apartment", path: "/apartment" },
      { label: "Wellness", path: "/wellness" },
      { label: "Gallery", path: "/gallery" },
      { label: "Location", path: "/location" },
      { label: "Contact", path: "/contact" },
    ],
    hr: [
      { label: "Početna", path: "/" },
      { label: "Apartman", path: "/apartment" },
      { label: "Wellness", path: "/wellness" },
      { label: "Galerija", path: "/gallery" },
      { label: "Lokacija", path: "/location" },
      { label: "Kontakt", path: "/contact" },
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
            <h3 className="text-2xl font-heading font-bold mb-2">
              <span className="text-accent">KALYPSO</span> Osijek
            </h3>
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
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
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
                  href="https://facebook.com/kalypsosijek" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-accent transition-colors"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
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
