# Inácio & Leal Contabilidade — Site Institucional

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript)
![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38b2ac?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

**Soluções contábeis com transparência, tecnologia e confiança.**

[🌐 Acesse o site](https://inaciolealcontabilidade.lovable.app/) • [📧 Contato](#contato) • [📖 Documentação](#documentação)

</div>

---

## 📌 Sobre

Site institucional da **Inácio & Leal Contabilidade**, escritório de contabilidade localizado em Florianópolis, SC. Desenvolvido com tecnologias modernas para oferecer uma experiência responsiva, performática e profissional.

### 🎯 Características

- ✨ **Design Responsivo** — Perfeito em desktop, tablet e mobile
- ⚡ **Performance Otimizada** — Carregamento rápido com Vite
- 🎨 **UI/UX Profissional** — Componentes shadcn/ui + Tailwind CSS
- 🔍 **SEO Ready** — Meta tags otimizadas e estrutura semântica
- 📱 **Integração Social** — Links diretos para WhatsApp e Instagram
- ♿ **Acessibilidade** — Práticas WCAG em desenvolvimento

---

## 🚀 Quick Start

### Pré-requisitos

- **Node.js** 18.0 ou superior
- **npm** ou **bun** (recomendado: bun)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/gfinacio/SIte_Inacio-Leal_Cont.git
cd SIte_Inacio-Leal_Cont

# 2. Instale as dependências
npm install
# ou
bun install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou
bun run dev
```

O site estará disponível em `http://localhost:5173`

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|------|
| `npm run dev` | Inicia servidor de desenvolvimento com HMR |
| `npm run build` | Gera build de produção otimizado |
| `npm run build:dev` | Build em modo desenvolvimento (debug) |
| `npm run preview` | Pré-visualiza build de produção localmente |
| `npm run lint` | Executa ESLint para validar código |
| `npm run test` | Executa testes com Vitest |
| `npm run test:watch` | Executa testes em modo watch |

---

## 🏗️ Estrutura do Projeto

```
SIte_Inacio-Leal_Cont/
├── .github/                    # Configurações do GitHub
│   ├── ISSUE_TEMPLATE/
│   └── pull_request_template.md
├── src/
│   ├── assets/                 # Imagens, ícones e mídia estática
│   ├── components/             # Componentes React reutilizáveis
│   │   ├── ui/                 # Componentes base (shadcn/ui)
│   │   ├── Header.tsx          # Navegação principal
│   │   ├── HeroSection.tsx     # Seção destaque
│   │   ├── AboutSection.tsx    # Sobre a empresa
│   │   ├── ServicesSection.tsx # Serviços oferecidos
│   │   ├── ContactSection.tsx  # Formulário de contato
│   │   ├── Footer.tsx          # Rodapé
│   │   └── FloatingButtons.tsx # Botões WhatsApp/Instagram
│   ├── hooks/                  # Custom React Hooks
│   │   ├── use-toast.ts
│   │   └── useScrollAnimation.ts
│   ├── lib/                    # Utilitários e helpers
│   │   └── utils.ts
│   ├── pages/                  # Páginas da aplicação
│   │   ├── Index.tsx           # Página inicial
│   │   └── NotFound.tsx        # Página 404
│   ├── App.tsx                 # Componente raiz e roteamento
│   ├── main.tsx                # Ponto de entrada
│   ├── vite-env.d.ts           # Tipos Vite
│   └── index.css               # Estilos globais
├── public/                     # Assets estáticos públicos
├── .gitignore
├── .eslintrc.js
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
├── vitest.config.ts
├── postcss.config.js
├── components.json             # Configuração shadcn/ui
├── README.md                   # Este arquivo
├── CONTRIBUTING.md             # Guia de contribuição
├── DEVELOPMENT.md              # Guia de desenvolvimento
├── DEPLOYMENT.md               # Guia de deploy
├── SECURITY.md                 # Política de segurança
└── LICENSE                     # Licença MIT
```

---

## 🛠️ Tecnologias

### Core
- **[React 18](https://react.dev/)** — Biblioteca de interface
- **[TypeScript 5.8](https://www.typescriptlang.org/)** — Tipagem estática
- **[Vite 5.4](https://vitejs.dev/)** — Build tool e dev server ultra-rápido

### Styling
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — Utilitários CSS
- **[Tailwind Animate](https://www.npmjs.com/package/tailwindcss-animate)** — Animações pré-construídas
- **[PostCSS](https://postcss.org/)** — Processador CSS

### Componentes & UI
- **[shadcn/ui](https://ui.shadcn.com/)** — Componentes React de alta qualidade
- **[Radix UI](https://www.radix-ui.com/)** — Primitivos sem estilo
- **[Lucide React](https://lucide.dev/)** — Ícones SVG
- **[Sonner](https://sonner.emilkowal.ski/)** — Toast notifications

### Formulários & Estado
- **[React Hook Form](https://react-hook-form.com/)** — Formulários com performance
- **[Zod](https://zod.dev/)** — Validação TypeScript-first
- **[React Query](https://tanstack.com/query)** — State management de dados

### Roteamento
- **[React Router DOM 6](https://reactrouter.com/)** — Roteamento client-side

### Desenvolvimento
- **[ESLint 9](https://eslint.org/)** — Linting de código
- **[Vitest 3.2](https://vitest.dev/)** — Framework de testes
- **[Playwright](https://playwright.dev/)** — Testes E2E

---

## 📖 Documentação

- **[DEVELOPMENT.md](./DEVELOPMENT.md)** — Guia de desenvolvimento local
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — Instruções de deploy para produção
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** — Como contribuir com o projeto
- **[SECURITY.md](./SECURITY.md)** — Política de segurança

---

## 🌐 Seções do Site

### 🏠 Início
Apresentação da empresa com chamada para ação (CTA) e links diretos para redes sociais.

### 👥 Sobre
História, valores, localização e missão da Inácio & Leal Contabilidade.

### 💼 Serviços
Cards informativos com os serviços oferecidos:
- Contabilidade Geral
- Consultoria Fiscal
- Departamento Pessoal
- Societário
- E mais...

### 📞 Contato
Formulário de contato + informações de localização e canais diretos.

---

## 📱 Contato da Empresa

| Canal | Contato |
|-------|----------|
| 📱 WhatsApp | [(48) 99170-6163](https://wa.me/5548991706163) |
| 📧 E-mail | [lealcontabilidadeadm@gmail.com](mailto:lealcontabilidadeadm@gmail.com) |
| 📍 Endereço | Rodovia Francisco Magno, n.º 1880 – Rio Tavares, Florianópolis – SC, 88063-700 |
| 📸 Instagram | [@inacioelealcontabilidade](https://www.instagram.com/inacioelealcontabilidade/) |
| 🌐 Website | [inaciolealcontabilidade.lovable.app](https://inaciolealcontabilidade.lovable.app/) |

---

## 📊 Performance

- ⚡ **Vite** garante build times incríveis
- 🎯 **Code Splitting** automático do React Router
- 🖼️ **Otimização de imagens** com ferramentas modernas
- 📦 **Tree-shaking** de dependências não utilizadas
- 🔄 **Hot Module Replacement (HMR)** para desenvolvimento ágil

---

## 🔐 Segurança

Este projeto segue as melhores práticas de segurança:

- ✅ Dependências regularmente auditadas
- ✅ Input validation com Zod
- ✅ TypeScript strict mode habilitado
- ✅ CSP headers configurados
- ✅ CORS policy implementado

Veja [SECURITY.md](./SECURITY.md) para mais detalhes.

---

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE).

Todos os direitos reservados © 2024 Inácio & Leal Contabilidade

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes sobre nosso código de conduta e processo de submissão de pull requests.

### Desenvolvimento

Veja [DEVELOPMENT.md](./DEVELOPMENT.md) para instruções de setup local e boas práticas.

---

## 📞 Suporte

Tem dúvidas ou encontrou um bug? Abra uma [issue no GitHub](https://github.com/gfinacio/SIte_Inacio-Leal_Cont/issues).

---

<div align="center">

**[⬆ Voltar ao topo](#inácio--leal-contabilidade--site-institucional)**

Desenvolvido com ❤️ usando React, TypeScript e Vite

</div>
