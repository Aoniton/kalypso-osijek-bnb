import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  language: "en" | "hr";
}

const Contact = ({ language }: ContactProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in Touch - We're Here to Help",
      form: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Your Message",
        submit: "Send Message",
        success: "Message sent successfully! We'll get back to you soon.",
      },
      info: {
        phone: "Phone",
        email: "Email",
        address: "Address",
        social: "Follow Us",
      },
    },
    hr: {
      title: "Kontaktirajte Nas",
      subtitle: "Javite Se - Tu Smo Da Pomognemo",
      form: {
        name: "Vaše Ime",
        email: "Email Adresa",
        phone: "Broj Telefona",
        message: "Vaša Poruka",
        submit: "Pošalji Poruku",
        success: "Poruka uspješno poslana! Javit ćemo vam se uskoro.",
      },
      info: {
        phone: "Telefon",
        email: "Email",
        address: "Adresa",
        social: "Pratite Nas",
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: content[language].form.success,
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4 bg-gradient-elegant">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {content[language].title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content[language].subtitle}
          </p>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-luxury animate-slide-in-left">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder={content[language].form.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={content[language].form.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder={content[language].form.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={content[language].form.message}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-lg"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold py-6 rounded-lg shadow-luxury transition-all duration-300 hover:scale-105"
                >
                  {content[language].form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="shadow-soft transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shadow-soft">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{content[language].info.phone}</h3>
                    <a href="tel:+385914446571" className="text-muted-foreground hover:text-accent transition-colors">
                      +385 91 444 6571
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shadow-soft">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{content[language].info.email}</h3>
                    <a href="mailto:zvone098@net.hr" className="text-muted-foreground hover:text-accent transition-colors">
                      zvone098@net.hr
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shadow-soft">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{content[language].info.address}</h3>
                    <p className="text-muted-foreground">
                      Vrt Jagode Truhelke 1<br />
                      Osijek, Croatia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shadow-soft">
                    <Facebook className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{content[language].info.social}</h3>
                  <a 
                    href="https://www.facebook.com/kalypso.osijek"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shadow-soft">
                    <Instagram className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{content[language].info.social}</h3>
                    <a 
                      href="https://www.instagram.com/wellness_apartment_kalypso/?hl=en"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
