import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { useLanguage } from "@/hooks/useLanguage";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 2025",
      intro: {
        title: "Introduction",
        text: "Kalypso Luxury Wellness Apartment Osijek ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services or visit our website."
      },
      collection: {
        title: "Information We Collect",
        items: [
          "Personal identification information (name, email address, phone number)",
          "Booking details and reservation information",
          "Payment information (processed securely through third-party payment providers)",
          "Communication records and preferences",
          "Video surveillance footage from common areas for security purposes"
        ]
      },
      usage: {
        title: "How We Use Your Information",
        items: [
          "To process and manage your apartment bookings",
          "To communicate with you about your reservation",
          "To provide customer support and respond to inquiries",
          "To ensure security of our property and guests",
          "To comply with legal obligations and guest registration requirements",
          "To improve our services and guest experience"
        ]
      },
      security: {
        title: "Data Security",
        text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment information is processed through secure, encrypted connections."
      },
      thirdParty: {
        title: "Third-Party Services",
        text: "We may use third-party services for:",
        items: [
          "Payment processing",
          "Email communications",
          "Booking management systems",
          "Analytics and website optimization"
        ],
        note: "These service providers are carefully selected and bound by data protection agreements."
      },
      cookies: {
        title: "Cookies",
        text: "Our website uses cookies to enhance your browsing experience and remember your language preferences. You can control cookie settings through your browser preferences."
      },
      rights: {
        title: "Your Rights (GDPR)",
        intro: "Under the General Data Protection Regulation (GDPR), you have the right to:",
        items: [
          "Access your personal data",
          "Request correction of inaccurate data",
          "Request deletion of your data",
          "Object to processing of your data",
          "Request data portability",
          "Withdraw consent at any time"
        ]
      },
      contact: {
        title: "Contact Us",
        text: "If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:",
        phone: "+385 91 444 6571",
        email: "zvone098@net.hr"
      }
    },
    hr: {
      title: "Politika Privatnosti",
      lastUpdated: "Posljednje ažuriranje: Siječanj 2025.",
      intro: {
        title: "Uvod",
        text: "Kalypso Luxury Wellness Apartment Osijek ('mi', 'naš' ili 'nas') obvezuje se štititi vašu privatnost. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše osobne podatke kada koristite naše usluge ili posjetite našu web stranicu."
      },
      collection: {
        title: "Informacije koje Prikupljamo",
        items: [
          "Osobne identifikacijske informacije (ime, email adresa, broj telefona)",
          "Detalji rezervacije i informacije o smještaju",
          "Informacije o plaćanju (obrađuju se sigurno kroz treće strane)",
          "Zapisi o komunikaciji i preferencije",
          "Video nadzor iz zajedničkih prostora u sigurnosne svrhe"
        ]
      },
      usage: {
        title: "Kako Koristimo Vaše Informacije",
        items: [
          "Za obradu i upravljanje vašim rezervacijama apartmana",
          "Za komunikaciju s vama o vašoj rezervaciji",
          "Za pružanje korisničke podrške i odgovaranje na upite",
          "Za osiguranje sigurnosti naše imovine i gostiju",
          "Za ispunjavanje zakonskih obveza i zahtjeva prijave gostiju",
          "Za poboljšanje naših usluga i iskustva gostiju"
        ]
      },
      security: {
        title: "Sigurnost Podataka",
        text: "Provodimo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših osobnih podataka od neovlaštenog pristupa, izmjene, otkrivanja ili uništenja. Sve informacije o plaćanju obrađuju se putem sigurnih, šifriranih veza."
      },
      thirdParty: {
        title: "Usluge Trećih Strana",
        text: "Možemo koristiti usluge trećih strana za:",
        items: [
          "Obradu plaćanja",
          "Email komunikaciju",
          "Sustave upravljanja rezervacijama",
          "Analitiku i optimizaciju web stranice"
        ],
        note: "Ovi pružatelji usluga pažljivo su odabrani i vezani sporazumima o zaštiti podataka."
      },
      cookies: {
        title: "Kolačići",
        text: "Naša web stranica koristi kolačiće kako bi poboljšala vaše iskustvo pregledavanja i zapamtila vaše jezične preferencije. Postavke kolačića možete kontrolirati kroz postavke svog preglednika."
      },
      rights: {
        title: "Vaša Prava (GDPR)",
        intro: "Prema Općoj uredbi o zaštiti podataka (GDPR), imate pravo na:",
        items: [
          "Pristup svojim osobnim podacima",
          "Zahtijevanje ispravka netočnih podataka",
          "Zahtijevanje brisanja svojih podataka",
          "Prigovor na obradu vaših podataka",
          "Zahtijevanje prijenosivosti podataka",
          "Povlačenje privole u bilo kojem trenutku"
        ]
      },
      contact: {
        title: "Kontaktirajte Nas",
        text: "Ako imate bilo kakvih pitanja o ovoj Politici privatnosti ili želite ostvariti svoja prava zaštite podataka, molimo kontaktirajte nas:",
        phone: "+385 91 444 6571",
        email: "zvone098@net.hr"
      }
    }
  };

  const t = content[language];

  return (
    <>
      <Helmet>
        <title>{t.title} | Kalypso Luxury Wellness Apartment Osijek</title>
        <meta name="description" content={t.intro.text} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <StructuredData type="privacy" />
      <div className="min-h-screen bg-background">
        <Navbar language={language} onLanguageChange={setLanguage} />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4 text-foreground">
            {t.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-8 sm:mb-12">{t.lastUpdated}</p>

          {/* Introduction */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-3 sm:mb-4 text-foreground">
              {t.intro.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {t.intro.text}
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-3 sm:mb-4 text-foreground">
              {t.collection.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
              {t.collection.items.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>

          {/* Usage */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-3 sm:mb-4 text-foreground">
              {t.usage.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
              {t.usage.items.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>

          {/* Security */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-3 sm:mb-4 text-foreground">
              {t.security.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {t.security.text}
            </p>
          </section>

          {/* Third Party */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-3 sm:mb-4 text-foreground">
              {t.thirdParty.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
              {t.thirdParty.text}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 text-sm sm:text-base">
              {t.thirdParty.items.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed italic text-sm sm:text-base">
              {t.thirdParty.note}
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-3 sm:mb-4 text-foreground">
              {t.cookies.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {t.cookies.text}
            </p>
          </section>

          {/* Rights */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-3 sm:mb-4 text-foreground">
              {t.rights.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
              {t.rights.intro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
              {t.rights.items.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>
        </main>

        <Footer language={language} />
      </div>
    </>
  );
};

export default PrivacyPolicy;