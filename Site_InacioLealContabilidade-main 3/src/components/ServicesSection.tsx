import {
  FileText, Building2, ShieldCheck, Calculator,
  BookOpen, Users, Briefcase, CheckCircle2
} from "lucide-react";

const services = [
  { icon: FileText, title: "Folha de Pagamento", desc: "Elaboração da folha de pagamento e encargos trabalhistas." },
  { icon: Building2, title: "Abertura e Regularização de Empresas", desc: "Abertura, alteração, regularização e baixa de empresas." },
  { icon: ShieldCheck, title: "Certificado Digital", desc: "Emissão e renovação de certificados digitais para pessoa física e jurídica." },
  { icon: Calculator, title: "Imposto de Renda PF", desc: "Declaração de imposto de renda para pessoa física." },
  { icon: BookOpen, title: "Carnê-Leão", desc: "Apuração e declaração mensal de carnê-leão para profissionais autônomos." },
  { icon: Users, title: "Atendimento a MEIs", desc: "Suporte especializado para microempreendedores individuais." },
];

const areas = [
  "Simples Nacional",
  "Lucro Presumido",
  "Associações, ONGs, Conselhos Comunitários e Igrejas",
  "MEI – Microempreendedor Individual",
  "Condomínios",
  "Empregadores Domésticos",
  "Pessoa Física – Autônomos",
  "Imposto de Renda",
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">
            Nossos Serviços
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Soluções completas para empresas e pessoas físicas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="animate-on-scroll bg-card p-8 rounded-sm border border-border hover:border-secondary/40 hover:shadow-lg transition-all duration-300 group"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <service.icon
                className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300"
                size={32}
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Áreas de atuação */}
        <div className="animate-on-scroll bg-primary rounded-sm p-8 md:p-12">
          <h3 className="font-heading text-2xl text-primary-foreground mb-6 text-center">
            Áreas de Atuação
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {areas.map((area) => (
              <div key={area} className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-secondary mt-1 shrink-0" />
                <span className="font-body text-xl text-primary-foreground/80">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
