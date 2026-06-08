import logoDark from "@/assets/logo-dark-bg.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <img src={logoDark} alt="Inácio & Leal Contabilidade" className="h-16" />

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-body text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="w-full max-w-md h-px bg-primary-foreground/10" />

          <p className="font-body text-xs text-primary-foreground/50 text-center">
            © 2026 Inácio & Leal Contabilidade — Todos os direitos reservados.
            <br />
            Desenvolvido com tecnologia e confiança.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
