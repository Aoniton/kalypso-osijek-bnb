import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Star } from "lucide-react";
import logo from "@/assets/zvone-logo.png";

interface NavbarProps {
  language: "en" | "hr";
  onLanguageChange: (lang: "en" | "hr") => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Transition after scrolling past hero section (viewport height)
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isHomePage ? "bg-background/95 backdrop-blur-md shadow-luxury" : isScrolled ? "bg-background/95 backdrop-blur-md shadow-luxury" : "bg-secondary/40 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Kalypso Osijek Wellness Apartment logo" 
              className={`h-12 w-auto transition-all ${!isHomePage || isScrolled ? "brightness-100" : "brightness-0 invert"}`}
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <span className={`text-lg font-heading font-bold transition-colors leading-tight ${
                    !isHomePage || isScrolled ? "text-primary" : "text-primary-foreground"
                  }`}>Kalypso</span>
                  <span className={`text-lg font-heading font-bold transition-colors leading-tight ${
                    !isHomePage || isScrolled ? "text-primary" : "text-primary"
                  }`}>Osijek</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Star className={`w-2.5 h-2.5 fill-current ${
                    !isHomePage || isScrolled ? "text-accent" : "text-primary-foreground"
                  }`} />
                  <div className="flex gap-0.5">
                    <Star className={`w-2.5 h-2.5 fill-current ${
                      !isHomePage || isScrolled ? "text-accent" : "text-primary-foreground"
                    }`} />
                    <Star className={`w-2.5 h-2.5 fill-current ${
                      !isHomePage || isScrolled ? "text-accent" : "text-primary-foreground"
                    }`} />
                  </div>
                  <div className="flex gap-0.5">
                    <Star className={`w-2.5 h-2.5 fill-current ${
                      !isHomePage || isScrolled ? "text-accent" : "text-primary-foreground"
                    }`} />
                    <Star className={`w-2.5 h-2.5 fill-current ${
                      !isHomePage || isScrolled ? "text-accent" : "text-primary-foreground"
                    }`} />
                  </div>
                </div>
              </div>
              <span className={`text-xs font-medium transition-colors ${
                !isHomePage || isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>Wellness Apartment</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : (!isHomePage || isScrolled) ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === "en" ? "hr" : "en")}
              className={`hover:bg-primary hover:text-primary-foreground ${(!isHomePage || isScrolled) ? "text-foreground" : "text-primary-foreground"}`}
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === "en" ? "HR" : "EN"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden hover:text-accent transition-colors ${(!isHomePage || isScrolled) ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems[language].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : (!isHomePage || isScrolled) ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  onLanguageChange(language === "en" ? "hr" : "en");
                  setIsOpen(false);
                }}
                className={`hover:bg-primary hover:text-primary-foreground justify-start ${(!isHomePage || isScrolled) ? "text-foreground" : "text-primary-foreground"}`}
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === "en" ? "Hrvatski" : "English"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
