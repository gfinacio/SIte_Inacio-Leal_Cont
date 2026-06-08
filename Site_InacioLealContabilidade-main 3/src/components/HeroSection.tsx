import { MessageCircle, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 text-center -mt-20">
        <div className="mb-10 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground leading-tight">
            INÁCIO <span className="text-foreground/50" style={{ fontFamily: "'Times New Roman', serif" }}>&</span> LEAL
          </h2>
          <p className="font-heading text-base md:text-lg lg:text-xl tracking-[0.5em] text-foreground mt-2">
            CONTABILIDADE
          </p>
        </div>

        <h1 className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground leading-tight mb-6 mt-16 animate-fade-in-up">
          Soluções contábeis com{" "}
          <span className="text-secondary">transparência</span>,{" "}
          <span className="text-secondary">tecnologia</span> e{" "}
          <span className="text-secondary">confiança</span>.
        </h1>

        <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Atuamos nas áreas contábil, fiscal, departamento pessoal e societário,
          oferecendo suporte completo para empresas e pessoas físicas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://wa.me/5548991706163"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-sm font-medium tracking-wide flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={20} />
            Fale conosco pelo WhatsApp
          </a>
          <a
            href="https://www.instagram.com/inacioelealcontabilidade/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground/30 text-foreground px-8 py-3 rounded-sm font-medium tracking-wide flex items-center gap-2 hover:border-secondary hover:text-secondary transition-colors"
          >
            <Instagram size={20} />
            Siga no Instagram
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
