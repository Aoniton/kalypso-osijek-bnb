import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { useLanguage } from "@/hooks/useLanguage";

const GalleryPage = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Kalypso Osijek – Photo Gallery</title>
        <meta name="description" content="View photos of the Kalypso apartment, interior, exterior, and amenities." />
        <link rel="canonical" href="https://apartmankalypso.com/gallery" />
      </Helmet>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <Gallery language={language} showLoadMore={false} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default GalleryPage;
