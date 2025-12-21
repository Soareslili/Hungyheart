import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  Home,
  Info,
  ImageIcon,
  Mail,
} from "lucide-react";

import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Início", href: "/", icon: Home },
  { name: "Sobre Nós", href: "/about", icon: Info },
  { name: "Galeria", href: "/gallery", icon: ImageIcon },
  { name: "Contato", href: "/contact", icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

        
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Hungyheart Restaurant & Café" className="h-20 w-auto ml-20" />
          </Link>

       
          <div className="hidden mr-20 md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-poppins text-sm text-foreground hover:text-secondary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

      
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

       
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fadeIn">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:text-secondary hover:bg-muted transition-colors duration-300"
                >
                  <Icon size={18} />
                  <span className="font-poppins text-sm">{link.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
