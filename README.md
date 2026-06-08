[README.md](https://github.com/user-attachments/files/28692884/README.md)
# Inácio & Leal Contabilidade — Site Institucional

Site institucional da **Inácio & Leal Contabilidade**, escritório de contabilidade localizado em Florianópolis, SC. Desenvolvido com React, TypeScript, Vite e Tailwind CSS.

🔗 **Site publicado:** https://inaciolealcontabilidade.lovable.app/

---

## Tecnologias utilizadas

- [React 18](https://react.dev/) — biblioteca de interface
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Vite](https://vitejs.dev/) — bundler e servidor de desenvolvimento
- [Tailwind CSS](https://tailwindcss.com/) — estilização utilitária
- [shadcn/ui](https://ui.shadcn.com/) — componentes de UI (Sonner, Toaster, Tooltip)
- [Lucide React](https://lucide.dev/) — ícones
- [React Router DOM](https://reactrouter.com/) — roteamento

---

## Estrutura do projeto

```
src/
├── assets/              # Imagens (logo, foto dos sócios, hero)
├── components/
│   ├── ui/              # Componentes base (shadcn/ui)
│   ├── Header.tsx       # Cabeçalho com navegação responsiva
│   ├── HeroSection.tsx  # Seção principal (hero)
│   ├── AboutSection.tsx # Seção "Quem Somos"
│   ├── ServicesSection.tsx # Serviços e áreas de atuação
│   ├── ContactSection.tsx  # Formulário e informações de contato
│   ├── Footer.tsx       # Rodapé
│   └── FloatingButtons.tsx # Botões flutuantes (WhatsApp e Instagram)
├── hooks/
│   ├── use-toast.ts     # Hook de notificações toast
│   └── useScrollAnimation.ts # Animações ao rolar a página
├── lib/
│   └── utils.ts         # Utilitários (cn)
├── pages/
│   ├── Index.tsx        # Página principal
│   └── NotFound.tsx     # Página 404
├── App.tsx              # Roteamento e providers
├── main.tsx             # Ponto de entrada
└── index.css            # Estilos globais e variáveis CSS
```

---

## Como executar localmente

**Pré-requisitos:** Node.js 18+ e npm (ou bun)

```bash
# Clonar o repositório
git clone https://github.com/gfinacio/Site_InacioLealContabilidade.git
cd Site_InacioLealContabilidade

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção na pasta `dist/` |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` | Executa o ESLint |

---

## Seções do site

- **Início** — apresentação com slogan e links para WhatsApp e Instagram
- **Sobre** — história, localização e missão da empresa
- **Serviços** — cards com os serviços oferecidos e áreas de atuação
- **Contato** — informações de contato e formulário de mensagem

---

## Contato da empresa

- 📱 WhatsApp: [(48) 99170-6163](https://wa.me/5548991706163)
- 📧 E-mail: lealcontabilidadeadm@gmail.com
- 📍 Rodovia Francisco Magno, n.º 1880 – Rio Tavares, Florianópolis – SC, 88063-700
- 📸 Instagram: [@inacioelealcontabilidade](https://www.instagram.com/inacioelealcontabilidade/)

---

## Licença

Projeto de uso exclusivo da Inácio & Leal Contabilidade. Todos os direitos reservados.
