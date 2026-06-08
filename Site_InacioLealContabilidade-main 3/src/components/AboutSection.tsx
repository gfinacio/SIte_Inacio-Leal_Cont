import sociosImg from "@/assets/socios.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-on-scroll">
            <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">
              Quem Somos
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Parceiros no crescimento do seu negócio
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                A Inácio & Leal Contabilidade nasceu com o propósito de oferecer
                um atendimento contábil personalizado, moderno e transparente.
              </p>
              <p>
                Localizada no Rio Tavares, em Florianópolis, atuamos com ética e
                comprometimento, auxiliando empresas e profissionais a manterem
                suas obrigações em dia e a tomarem decisões estratégicas com base
                em dados contábeis precisos.
              </p>
              <p>
                Nossa missão é ser parceira no crescimento dos nossos clientes,
                oferecendo soluções contábeis de excelência.
              </p>
            </div>
          </div>
          <div className="animate-on-scroll relative">
            <div className="relative overflow-hidden rounded-sm inline-block">
              <img
                src={sociosImg}
                alt="Sócios da Inácio & Leal Contabilidade"
                loading="lazy"
              />
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-secondary/40 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
