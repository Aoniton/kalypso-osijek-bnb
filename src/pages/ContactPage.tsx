import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  const [language, setLanguage] = useState<"en" | "hr">("en");

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-16">
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default ContactPage;
