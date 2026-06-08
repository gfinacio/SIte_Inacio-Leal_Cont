import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#inicio" onClick={() => handleNavClick("#inicio")} className="font-heading text-[10px] md:text-[11px] tracking-widest text-foreground whitespace-nowrap">
          INÁCIO <span style={{ fontFamily: "'Times New Roman', serif" }} className="text-foreground/50 italic">&</span> LEAL CONTABILIDADE
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm tracking-wide text-foreground/80 hover:text-secondary transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/5548991706163"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary-foreground px-5 py-2 rounded-sm text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-left py-2 text-foreground/80 hover:text-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/5548991706163"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold text-primary-foreground px-5 py-2 rounded-sm text-sm font-medium tracking-wide text-center"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
