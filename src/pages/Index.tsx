import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { useLanguage } from "@/hooks/useLanguage";


const Index = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      <StructuredData type="home" />
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Features language={language} />
        <Gallery language={language} excludeTextBlockImages={true} />
        <Location language={language} />
        <Contact language={language} />
        <Reviews language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
