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
          question: "How many stars does the apartment have?",
          answer: "The apartment has a 5-star rating."
        },
        {
          question: "What are the check-in and check-out times?",
          answer: "Check-in is from 18:00 to 19:00, and check-out is the next day by 12:00."
        },
        {
          question: "Is parking available?",
          answer: "There is no private parking, but public zone parking is available nearby."
        },
        {
          question: "What is the price?",
          answer: "The apartment is rented exclusively for one-day rentals. For the price of your desired date, please send an inquiry via Facebook, Instagram, or email."
        },
        {
          question: "What is the maximum number of guests allowed in the apartment?",
          answer: "Maximum 4 people. The rental price is higher for more guests. Every person must be registered, even if they are just a guest."
        },
        {
          question: "Is there video surveillance in the apartment?",
          answer: "Yes. There is one camera at the entrance door and one external camera recording the parking area directly in front of the apartment."
        },
        {
          question: "Which floor is the apartment on?",
          answer: "The apartment is on the third floor of a residential building. There is no elevator in the building."
        },
        {
          question: "Is smoking allowed in the apartment?",
          answer: "Smoking is not allowed in the apartment, except in designated areas that are clearly marked: the enclosed large balcony and one small open balcony."
        },
        {
          question: "What amenities are included in the apartment?",
          answer: "The apartment features a private jacuzzi, Finnish sauna, LED ambient lighting, luxury bedroom, fully equipped kitchen, modern bathroom, high-speed WiFi, smart TV, and climate control. All amenities are included in your booking."
        },
        {
          question: "How do I make a reservation?",
          answer: "You can contact us directly via phone at +385 91 444 6571 or email us at zvone098@net.hr. We'll be happy to check availability and confirm your booking."
        },
        {
          question: "What attractions are nearby?",
          answer: "The apartment is located in the heart of Osijek, close to the historic Tvrđa fortress, beautiful riverside promenades, excellent restaurants, cafes, and cultural sites. Everything is within walking distance or a short drive."
        },
        {
          question: "Is the jacuzzi and sauna available 24/7?",
          answer: "Yes! The private wellness area with jacuzzi and sauna is exclusively yours during your stay and can be used at any time."
        },
        {
          question: "What should I bring?",
          answer: "We provide towels, bed linens, and basic toiletries. You may want to bring your personal items, swimwear for the jacuzzi, and any specific products you prefer."
        },
        {
          question: "Are pets allowed?",
          answer: "Unfortunately, we do not allow pets in the apartment to maintain the highest standards of cleanliness and comfort for all our guests."
        }
      ]
    },
    hr: {
      title: "Često Postavljana Pitanja",
      subtitle: "Sve što trebate znati o Vašem boravku",
      faqs: [
        {
          question: "Koliko zvjezdica ima apartman?",
          answer: "Apartman ima 5 zvjezdica."
        },
        {
          question: "Koja su vremena prijave i odjave?",
          answer: "Check-in je od 18:00 do 19:00, a check-out je drugi dan do 12:00."
        },
        {
          question: "Je li parking dostupan?",
          answer: "Nema privatni parking, ali ima u javnoj zoni parkinga u blizini."
        },
        {
          question: "Koja je cijena?",
          answer: "Apartman se iznajmljuje isključivo za jednodnevni najam. Za cijenu Vašeg željenog datuma pošaljite upit na Facebook, Instagram ili na email."
        },
        {
          question: "Koliki je maksimalni broj gostiju dopušten u apartmanu?",
          answer: "Maksimalno 4 osobe. Cijena najma je veća za više osoba. Svaka osoba mora biti prijavljena, čak i u slučaju da je samo gost."
        },
        {
          question: "Ima li u apartmanu video nadzor?",
          answer: "Ima. Jedna kamera na ulaznim vratima i jedna vanjska kamera koja snima parking neposredno ispred apartmana."
        },
        {
          question: "Na kojem katu je apartman?",
          answer: "Apartman je na trećem katu stambene zgrade. U zgradi nema lifta."
        },
        {
          question: "Smije li se u apartmanu pušiti?",
          answer: "U apartmanu nije dopušteno pušenje, osim na za to predviđenim mjestima koja su jasno označena, a ta su: zatvoreni veliki balkon i jedan mali otvoreni balkon."
        },
        {
          question: "Koje sadržaje uključuje apartman?",
          answer: "Apartman nudi privatni jacuzzi, finsku saunu, LED ambijentalno osvjetljenje, luksuznu spavaću sobu, potpuno opremljenu kuhinju, modernu kupaonicu, brzi WiFi, pametni TV i klimu. Svi sadržaji su uključeni u cijenu rezervacije."
        },
        {
          question: "Kako mogu napraviti rezervaciju?",
          answer: "Možete nas kontaktirati telefonom na +385 91 444 6571 ili putem emaila na zvone098@net.hr. Rado ćemo provjeriti dostupnost i potvrditi Vašu rezervaciju."
        },
        {
          question: "Koje atrakcije su u blizini?",
          answer: "Apartman se nalazi u srcu Osijeka, blizu povijesne Tvrđe, prekrasnih riječnih šetališta, izvrsnih restorana, kafića i kulturnih znamenitosti. Sve je dostupno pješice ili kratkom vožnjom."
        },
        {
          question: "Je li jacuzzi i sauna dostupni 24/7?",
          answer: "Da! Privatni wellness prostor s jacuzzijem i saunom isključivo je Vaš tijekom boravka i možete ga koristiti u bilo koje vrijeme."
        },
        {
          question: "Što trebam ponijeti?",
          answer: "Mi osiguravamo ručnike, posteljinu i osnovne toaletne potrepštine. Možete ponijeti svoje osobne stvari, kupaći kostim za jacuzzi i proizvode koje preferirate."
        },
        {
          question: "Jesu li kućni ljubimci dozvoljeni?",
          answer: "Nažalost, ne dozvoljavamo kućne ljubimce u apartmanu kako bismo održali najviše standarde čistoće i udobnosti za sve naše goste."
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
