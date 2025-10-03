import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "hr">("en");

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Features language={language} />
        <Gallery language={language} />
        <Location language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
