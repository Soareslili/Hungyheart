import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import Logo from '../../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
       
          <div className="space-y-4">
            <img src={Logo} alt="Hungyheart Logo" className="w-32 h-auto" />
            <p className="text-muted-foreground font-poppins">
             Onde a arte culinária encontra momentos inesquecíveis. Experimente os melhores restaurantes em um ambiente elegante.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

        
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">Links rápidos</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "Início", id: "hero" },
                { label: "Sobre Nós", id: "about" },
                { label: "Galeria", id: "gallery" },
                { label: "Contato", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300 text-left font-poppins"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">Contate-nos</h4>
            <div className="space-y-3 font-poppins">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span>Rua Gourmet 123, Distrito Culinário, CD 12345</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-secondary transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@hungyheart.com" className="hover:text-secondary transition-colors duration-300">
                  info@hungyheart.com
                </a>
              </div>
            </div>
          </div>

      
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">Horário de funcionamento</h4>
            <div className="space-y-2 font-poppins text-muted-foreground">
              <div className="flex justify-between">
                <span>Segunda - Sexta</span>
                <span className="text-foreground">11:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span className="text-foreground">10:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span className="text-foreground">10:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

    
        <div className="text-center text-muted-foreground font-poppins text-sm">
          <p>© {currentYear} Hungyheart Restaurant & Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
