import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { useLanguage } from "@/hooks/useLanguage";

const GalleryPage = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <Gallery language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default GalleryPage;
