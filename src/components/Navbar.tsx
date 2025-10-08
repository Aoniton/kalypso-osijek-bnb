import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Star, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
      { label: "Home", path: "/" },
      { label: "Apartment", path: "/apartment" },
      { label: "Gallery", path: "/gallery" },
      { label: "Location", path: "/location" },
      { label: "Contact", path: "/contact" },
      { label: "Wellness", path: "/wellness" },
      { label: "FAQ", path: "/faq" },
      { label: "About Us", path: "/about" },
    ],
    hr: [
      { label: "Početna", path: "/" },
      { label: "Apartman", path: "/apartment" },
      { label: "Galerija", path: "/gallery" },
      { label: "Lokacija", path: "/location" },
      { label: "Kontakt", path: "/contact" },
      { label: "Wellness", path: "/wellness" },
      { label: "ČPP", path: "/faq" },
      { label: "O nama", path: "/about" },
    ],
  };

  // First 5 items for tablet view
  const tabletItems = navItems[language].slice(0, 5);
  // Remaining items for dropdown
  const dropdownItems = navItems[language].slice(5);

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
                <span className={`text-lg font-heading font-bold transition-colors leading-tight ${
                  !isHomePage || isScrolled ? "text-primary" : "text-primary-foreground"
                }`}>Kalypso</span>
                <span className={`text-lg font-heading font-bold transition-colors leading-tight ${
                  !isHomePage || isScrolled ? "text-primary" : "text-primary"
                }`}>Osijek</span>
              </div>
              <div className="flex flex-col items-start">
                <span className={`text-xs font-medium transition-colors ${
                  !isHomePage || isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}>Wellness Apartment</span>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Full menu on large screens */}
          <div className="hidden lg:flex items-center space-x-6">
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
              {language === "en" ? "HR" : "EN"}
            </Button>
          </div>

          {/* Tablet Navigation - First 5 items + dropdown for rest */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {tabletItems.map((item) => (
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
            
            {/* Dropdown for remaining items */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`hover:bg-primary hover:text-primary-foreground ${(!isHomePage || isScrolled) ? "text-foreground" : "text-primary-foreground"}`}
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md">
                {dropdownItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`cursor-pointer ${
                        isActive(item.path) ? "text-primary font-medium" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === "en" ? "hr" : "en")}
              className={`hover:bg-primary hover:text-primary-foreground ${(!isHomePage || isScrolled) ? "text-foreground" : "text-primary-foreground"}`}
            >
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
                {language === "en" ? "HR" : "EN"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
