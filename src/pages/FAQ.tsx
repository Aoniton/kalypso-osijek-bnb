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
          question: "🕓 What are the check-in and check-out times?",
          answer: "Check-in is available from 18:00 to 19:00, and check-out is by 12:00 noon the following day.\nIf you need early check-in or late check-out, let us know in advance — we'll do our best to accommodate you."
        },
        {
          question: "🚗 Is parking available?",
          answer: "The apartment does not have private parking, but there is ample public parking right in front of the building, making it easy to find a spot at any time."
        },
        {
          question: "💰 What is the price per night?",
          answer: "The apartment is available for one-night stays only.\nFor the exact price of your desired date, please send us a message via Facebook, Instagram, or email — we respond quickly and keep the booking process smooth and personal."
        },
        {
          question: "👥 How many guests can stay in the apartment?",
          answer: "The maximum capacity is 4 guests.\nThe price increases for more guests. Each person must be registered, even if they are only visiting, in accordance with local regulations and for everyone's safety."
        },
        {
          question: "📹 Is there video surveillance?",
          answer: "Yes. For your security, there are two cameras installed:\n\n• One at the entrance door\n• One outside, overlooking the parking area\n\nThere are no cameras inside the apartment, ensuring your privacy at all times."
        },
        {
          question: "🏢 Which floor is the apartment on?",
          answer: "The apartment is located on the third floor of a residential building.\nPlease note there is no elevator in the building."
        },
        {
          question: "🚭 Is smoking allowed?",
          answer: "Smoking is not allowed inside the apartment, except in clearly marked areas:\n\n• The enclosed large balcony\n• The small open balcony"
        },
        {
          question: "⭐ How many stars does the apartment have?",
          answer: "The apartment has been rated 5 stars, reflecting our commitment to comfort, quality, and thoughtful details that make every stay special."
        }
      ]
    },
    hr: {
      title: "Često postavljana pitanja",
      subtitle: "Sve što trebate znati o Vašem boravku",
      faqs: [
        {
          question: "🕓 Kada je prijava i odjava?",
          answer: "Prijava je moguća od 18:00 do 19:00, a odjava sljedećeg dana do 12:00 sati.\nAko vam je potreban raniji dolazak ili kasniji odlazak, javite nam se unaprijed — rado ćemo vam pokušati izaći u susret."
        },
        {
          question: "🚗 Ima li apartman privatni parking?",
          answer: "Apartman nema vlastiti parking, no u neposrednoj blizini nalazi se javna parkirna zona u kojoj je uvijek moguće pronaći mjesto."
        },
        {
          question: "💰 Koja je cijena noćenja?",
          answer: "Apartman se iznajmljuje isključivo za jednodnevni boravak.\nZa točnu cijenu željenog termina, pošaljite nam upit putem Facebooka, Instagrama, e-maila ili nas jednostavno nazovite — brzo odgovaramo i sve dogovaramo jednostavno i bez stresa."
        },
        {
          question: "👥 Koliko gostiju može boraviti u apartmanu?",
          answer: "Maksimalni broj gostiju je 4 osobe.\nSvaka osoba mora biti prijavljena, čak i ako je samo u posjeti — zbog zakonskih propisa i sigurnosti svih gostiju."
        },
        {
          question: "📹 Postoji li video nadzor?",
          answer: "Da. Radi vaše sigurnosti, postavljene su dvije kamere:\n\n• Jedna kod ulaznih vrata\n• Jedna vanjska kamera koja snima parking neposredno ispred zgrade\n\nU unutrašnjosti apartmana nema kamera, tako da je vaša privatnost potpuno zaštićena."
        },
        {
          question: "🏢 Na kojem katu se nalazi apartman?",
          answer: "Apartman je smješten na trećem katu stambene zgrade.\nU zgradi nema lifta, pa vas molimo da to imate na umu pri rezervaciji."
        },
        {
          question: "🚭 Smije li se pušiti u apartmanu?",
          answer: "U apartmanu nije dopušteno pušenje, osim na jasno označenim mjestima:\n\n• Zatvoreni veliki balkon\n• Mali otvoreni balkon"
        },
        {
          question: "⭐ Koliko zvjezdica ima apartman?",
          answer: "Apartman ima 5 zvjezdica, što potvrđuje našu predanost udobnosti, kvaliteti i detaljima koji čine razliku."
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
