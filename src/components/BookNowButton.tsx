import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface BookNowButtonProps {
  language: "en" | "hr";
}

const BookNowButton = ({ language }: BookNowButtonProps) => {
  const content = {
    en: "Book Now",
    hr: "Rezerviraj Sada",
  };

  const handleBookNow = () => {
    window.open("https://www.booking.com", "_blank");
  };

  return (
    <div className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <Button
          onClick={handleBookNow}
          size="lg"
          className="bg-primary text-primary-foreground font-semibold px-12 py-6 text-lg rounded-lg shadow-luxury transition-all duration-300 hover:scale-105"
        >
          <Calendar className="w-5 h-5 mr-2" />
          {content[language]}
        </Button>
      </div>
    </div>
  );
};

export default BookNowButton;
