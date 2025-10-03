import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const GalleryPage = () => {
  const [language, setLanguage] = useState<"en" | "hr">("en");

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
