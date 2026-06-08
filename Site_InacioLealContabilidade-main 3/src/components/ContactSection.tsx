import { useState, FormEvent } from "react";
import { MessageCircle, Mail, MapPin, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">
            Fale Conosco
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Entre em contato e descubra como podemos ajudar sua empresa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div className="animate-on-scroll space-y-8">
            <a
              href="https://wa.me/5548991706163"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="gradient-gold p-3 rounded-sm">
                <MessageCircle size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-foreground mb-1">WhatsApp</h4>
                <p className="font-body text-sm text-muted-foreground group-hover:text-secondary transition-colors">
                  (48) 99170-6163
                </p>
              </div>
            </a>

            <a href="mailto:lealcontabilidadeadm@gmail.com" className="flex items-start gap-4 group">
              <div className="gradient-gold p-3 rounded-sm">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-foreground mb-1">E-mail</h4>
                <p className="font-body text-sm text-muted-foreground group-hover:text-secondary transition-colors">
                  lealcontabilidadeadm@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="gradient-gold p-3 rounded-sm">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-foreground mb-1">Endereço</h4>
                <p className="font-body text-sm text-muted-foreground">
                  Rodovia Francisco Magno, n.º 1880 – Rio Tavares,
                  <br />
                  Florianópolis - SC, 88063-700
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/inacioelealcontabilidade/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="gradient-gold p-3 rounded-sm">
                <Instagram size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-foreground mb-1">Instagram</h4>
                <p className="font-body text-sm text-muted-foreground group-hover:text-secondary transition-colors">
                  @inacioelealcontabilidade
                </p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="animate-on-scroll space-y-5">
            <div>
              <label htmlFor="name" className="block font-body text-sm text-foreground mb-2">
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-sm text-foreground mb-2">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-sm text-foreground mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <button
              type="submit"
              className="gradient-gold text-primary px-8 py-3 rounded-sm font-medium tracking-wide flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={18} />
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
