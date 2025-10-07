import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";

const AboutUs = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      title: "About Us",
      text: (
        <>
          Tucked right in the heart of Osijek, Kalypso Apartment was created with one thing in mind — to give you a place where the outside world simply fades away.<br /><br />
          From the moment you walk in, the soft lights, thoughtful design, and calm atmosphere make you feel at ease.<br /><br />
          It's more than a place to stay — it's a space to slow down, reconnect, and enjoy life's little luxuries.<br /><br />
          The centerpiece of the apartment is the private wellness area — your own intimate spa, ready whenever you are.<br /><br />
          The hydromassage jacuzzi melts away stress with every bubble, while the Finnish sauna wraps you in soothing warmth, perfect for unwinding after a long day or sharing a quiet moment with someone special.<br /><br />
          It's an experience usually reserved for luxury resorts, now entirely yours.<br /><br />
          Every corner of the apartment was carefully designed to offer both comfort and elegance.<br /><br />
          The open-plan living area feels spacious yet cozy, perfect for quiet evenings in or celebrating special moments.<br /><br />
          The king-size bed is dressed in soft, high-quality bedding that makes every night feel like a stay in a five-star hotel.<br /><br />
          The modern bathroom features a rainfall shower that washes away the day, while the fully equipped kitchenette lets you prepare a relaxed breakfast or a romantic dinner without ever leaving the comfort of your retreat.<br /><br />
          No matter the season, the apartment's climate control keeps the space at just the right temperature, and blackout curtains ensure a restful night's sleep.<br /><br />
          From warm lighting to the smallest decorative details, everything was chosen to make your stay as comfortable and memorable as possible.<br /><br />
          This isn't just accommodation — it's an experience.<br /><br />
          A place designed with love, care, and a passion for creating unforgettable stays.<br /><br />
          Once you've been here, you'll understand why our guests never want to leave.
        </>
      ),
    },
    hr: {
      title: "O nama",
      text: (
        <>
          U samom srcu Osijeka nalazi se Kalypso apartman — mjesto gdje svakodnevica prestaje čim zakoračite unutra.<br /><br />
          Topla rasvjeta, pažljivo osmišljen prostor i mirna atmosfera stvaraju osjećaj doma i opuštenosti.<br /><br />
          Ovo nije samo smještaj, ovo je prostor u kojem usporavate, ponovno se povezujete i uživate u sitnim luksuzima života.<br /><br />
          Središnji dio apartmana čini privatna wellness zona — vaš osobni spa, dostupan kad god poželite.<br /><br />
          Hidromasažni jacuzzi opušta svaki mišić i otpušta stres, dok vas finska sauna obavija ugodnom toplinom, savršenom za potpuno opuštanje ili intimne trenutke u dvoje.<br /><br />
          Doživljaj koji se inače veže uz luksuzne hotele, ovdje je samo vaš.<br /><br />
          Svaki detalj apartmana pažljivo je biran kako bi spojio udobnost i eleganciju.<br /><br />
          Prostrani dnevni boravak odiše toplinom i savršen je za mirne večeri ili posebne trenutke s voljenima.<br /><br />
          King size krevet s mekanom, kvalitetnom posteljinom pruža osjećaj boravka u vrhunskom hotelu — samo s više privatnosti i mira.<br /><br />
          Moderna kupaonica s kišnim tušem pruža osjećaj potpune relaksacije, dok vam potpuno opremljena kuhinjica omogućuje da bez žurbe pripremite doručak ili romantičnu večeru, bez potrebe da napuštate svoj kutak mira.<br /><br />
          Bez obzira na godišnje doba, klimatizacija održava savršenu temperaturu, a zamračujuće zavjese osiguravaju dubok i miran san.<br /><br />
          Od rasvjete do dekorativnih detalja, svaki element pažljivo je odabran kako bi vaš boravak bio što ugodniji i posebniji.<br /><br />
          Ovo nije samo još jedan apartman — ovo je doživljaj.<br /><br />
          Prostor nastao iz ljubavi, pažnje i želje da svaki gost osjeti nešto posebno.<br /><br />
          Tko jednom dođe, teško odlazi ravnodušan.
        </>
      ),
    },
  };

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <section className="py-16 px-4 bg-gradient-elegant">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
              {content[language].title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide text-left font-light">
              {content[language].text}
            </p>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default AboutUs;
