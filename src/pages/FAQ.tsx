import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything You Need to Know About Your Stay",
      faqs: [
        {
          question: "What amenities are included in the apartment?",
          answer: "The apartment features a private jacuzzi, Finnish sauna, LED ambient lighting, luxury bedroom, fully equipped kitchen, modern bathroom, high-speed WiFi, smart TV, and climate control. All amenities are included in your booking."
        },
        {
          question: "How many guests can the apartment accommodate?",
          answer: "The apartment is designed for 2 guests, making it perfect for couples seeking a romantic getaway or anyone looking for a private wellness retreat."
        },
        {
          question: "What are the check-in and check-out times?",
          answer: "Standard check-in is from 3:00 PM and check-out is until 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability."
        },
        {
          question: "Is parking available?",
          answer: "Yes, free private parking is available for guests directly at the property."
        },
        {
          question: "How do I make a reservation?",
          answer: "You can contact us directly via phone at +385 91 444 6571 or email us at zvone098@net.hr. We'll be happy to check availability and confirm your booking."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Our cancellation policy varies depending on the booking. Please contact us directly to discuss the terms for your specific reservation."
        },
        {
          question: "Are pets allowed?",
          answer: "Unfortunately, we do not allow pets in the apartment to maintain the highest standards of cleanliness and comfort for all our guests."
        },
        {
          question: "Is smoking allowed?",
          answer: "The apartment is completely non-smoking. Smoking is not permitted anywhere inside the property."
        },
        {
          question: "What attractions are nearby?",
          answer: "The apartment is located in the heart of Osijek, close to the historic Tvrđa fortress, beautiful riverside promenades, excellent restaurants, cafes, and cultural sites. Everything is within walking distance or a short drive."
        },
        {
          question: "Do you provide breakfast or other meals?",
          answer: "The apartment features a fully equipped kitchen where you can prepare your own meals. We don't provide meal service, but we're happy to recommend excellent local restaurants nearby."
        },
        {
          question: "Is the jacuzzi and sauna available 24/7?",
          answer: "Yes! The private wellness area with jacuzzi and sauna is exclusively yours during your stay and can be used at any time."
        },
        {
          question: "What should I bring?",
          answer: "We provide towels, bed linens, and basic toiletries. You may want to bring your personal items, swimwear for the jacuzzi, and any specific products you prefer."
        }
      ]
    },
    hr: {
      title: "Često Postavljana Pitanja",
      subtitle: "Sve što trebate znati o Vašem boravku",
      faqs: [
        {
          question: "Koje sadržaje uključuje apartman?",
          answer: "Apartman nudi privatni jacuzzi, finsku saunu, LED ambijentalno osvjetljenje, luksuznu spavaću sobu, potpuno opremljenu kuhinju, modernu kupaonicu, brzi WiFi, pametni TV i klimu. Svi sadržaji su uključeni u cijenu rezervacije."
        },
        {
          question: "Koliko gostiju može primiti apartman?",
          answer: "Apartman je dizajniran za 2 gosta, što ga čini savršenim za parove koji traže romantični bijeg ili bilo koga tko želi privatno wellness iskustvo."
        },
        {
          question: "Koja su vremena prijave i odjave?",
          answer: "Standardna prijava je od 15:00 sati, a odjava do 11:00 sati. Rana prijava ili kasna odjava mogu biti dostupne na zahtjev, ovisno o raspoloživosti."
        },
        {
          question: "Je li parking dostupan?",
          answer: "Da, besplatan privatni parking dostupan je gostima direktno uz objekt."
        },
        {
          question: "Kako mogu napraviti rezervaciju?",
          answer: "Možete nas kontaktirati telefonom na +385 91 444 6571 ili putem emaila na zvone098@net.hr. Rado ćemo provjeriti dostupnost i potvrditi Vašu rezervaciju."
        },
        {
          question: "Koja je politika otkazivanja?",
          answer: "Naša politika otkazivanja varira ovisno o rezervaciji. Molimo kontaktirajte nas direktno kako bismo razgovarali o uvjetima za Vašu specifičnu rezervaciju."
        },
        {
          question: "Jesu li kućni ljubimci dozvoljeni?",
          answer: "Nažalost, ne dozvoljavamo kućne ljubimce u apartmanu kako bismo održali najviše standarde čistoće i udobnosti za sve naše goste."
        },
        {
          question: "Je li pušenje dozvoljeno?",
          answer: "Apartman je u potpunosti nepušački. Pušenje nije dozvoljeno nigdje unutar objekta."
        },
        {
          question: "Koje atrakcije su u blizini?",
          answer: "Apartman se nalazi u srcu Osijeka, blizu povijesne Tvrđe, prekrasnih riječnih šetališta, izvrsnih restorana, kafića i kulturnih znamenitosti. Sve je dostupno pješice ili kratkom vožnjom."
        },
        {
          question: "Nudite li doručak ili druge obroke?",
          answer: "Apartman ima potpuno opremljenu kuhinju gdje možete pripremiti svoje obroke. Ne nudimo uslugu prehrane, ali rado ćemo preporučiti izvrsne lokalne restorane u blizini."
        },
        {
          question: "Je li jacuzzi i sauna dostupni 24/7?",
          answer: "Da! Privatni wellness prostor s jacuzzijem i saunom isključivo je Vaš tijekom boravka i možete ga koristiti u bilo koje vrijeme."
        },
        {
          question: "Što trebam ponijeti?",
          answer: "Mi osiguravamo ručnike, posteljinu i osnovne toaletne potrepštine. Možete ponijeti svoje osobne stvari, kupaći kostim za jacuzzi i proizvode koje preferirate."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <section className="py-20 px-4 bg-gradient-elegant">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {content[language].title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {content[language].subtitle}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {content[language].faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg px-6 shadow-soft border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                {language === "en" 
                  ? "Still have questions? We're here to help!" 
                  : "Još uvijek imate pitanja? Tu smo da pomognemo!"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+385914446571"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform shadow-luxury"
                >
                  {language === "en" ? "Call Us" : "Nazovite nas"}
                </a>
                <a
                  href="mailto:zvone098@net.hr"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform shadow-luxury"
                >
                  {language === "en" ? "Email Us" : "Pošaljite email"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default FAQ;
