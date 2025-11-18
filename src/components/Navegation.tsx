import { useState } from "react";
import { Menu, X, Home, Info, UtensilsCrossed, Users, ImageIcon, ShoppingBag, BookOpen, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Menu", href: "#menu", icon: UtensilsCrossed },
    { name: "Team", href: "#team", icon: Users },
    { name: "Gallery", href: "#gallery", icon: ImageIcon },
    { name: "Shop", href: "#shop", icon: ShoppingBag },
    { name: "Blog", href: "#blog", icon: BookOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-sm ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Hungyheart Restaurant & Café" className="h-20 w-auto ml-20" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-poppins text-sm text-foreground hover:text-secondary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:text-secondary hover:bg-muted transition-colors duration-300"
                >
                  <Icon size={18} />
                  <span className="font-poppins text-sm">{link.name}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;