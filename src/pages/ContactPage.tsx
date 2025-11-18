import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useLanguage } from "@/hooks/useLanguage";

const ContactPage = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Kalypso Osijek – Book Your Stay</title>
        <meta name="description" content="Contact Apartment Kalypso Osijek for booking and inquiries." />
        <link rel="canonical" href="https://apartmankalypso.com/contact" />
      </Helmet>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default ContactPage;
