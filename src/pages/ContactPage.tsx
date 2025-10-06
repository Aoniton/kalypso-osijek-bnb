import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import BookNowButton from "@/components/BookNowButton";
import { useLanguage } from "@/hooks/useLanguage";

const ContactPage = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <Contact language={language} />
        <div className="flex justify-center md:justify-end container mx-auto px-4 md:px-8 pb-12">
          <BookNowButton language={language} />
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default ContactPage;
