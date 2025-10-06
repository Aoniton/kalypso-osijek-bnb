import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import { useLanguage } from "@/hooks/useLanguage";

const LocationPage = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <Location language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default LocationPage;
