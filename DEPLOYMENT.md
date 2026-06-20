# 🚀 Guia de Deploy

Instruções para colocar o site em produção.

## 📋 Opções de Deploy

Este projeto pode ser deployado em várias plataformas. Escolha a que melhor se adequa:

1. **[Lovable](#lovable)** ⭐ (Atualmente em uso)
2. **[Vercel](#vercel)** (Recomendado para máxima performance)
3. **[Netlify](#netlify)**
4. **[AWS S3 + CloudFront](#aws)**
5. **[GitHub Pages](#github-pages)**

---

## 🎨 Lovable

### Deploy Automático

O Lovable oferece deploy automático a cada push:

```bash
# 1. Commitar mudanças
git add .
git commit -m "feat: adicionar novo componente"

# 2. Push para main
git push origin main

# 3. Lovable faz deploy automaticamente
# Acessível em: https://inaciolealcontabilidade.lovable.app/
```

### Visualizar Status

- Dashboard: https://lovable.dev
- Logs: Disponíveis na interface do Lovable

---

## ⚡ Vercel

### 1. Conectar Repositório

```bash
# Via CLI do Vercel
npm install -g vercel
vercel login
vercel
```

Ou via interface:

1. Acesse https://vercel.com
2. Clique em "New Project"
3. Conecte seu repositório GitHub
4. Selecione este repositório

### 2. Configurar Build

**vercel.json:**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "NODE_ENV": "production"
  }
}
```

### 3. Deploy

```bash
# Deploy manual
vercel --prod

# Deploy automático (quando conectar GitHub)
# Vercel faz deploy a cada push em main
```

### 4. Domínio Customizado

1. Vá para Settings → Domains
2. Adicione `inaciolealcontabilidade.com` (ou seu domínio)
3. Aponte DNS para Vercel

---

## 🌐 Netlify

### 1. Conectar Repositório

1. Acesse https://netlify.com
2. Clique em "Add new site" → "Connect to Git"
3. Selecione GitHub e este repositório

### 2. Configurar Build

**netlify.toml:**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Deploy

Netlify faz deploy automático a cada push em main.

---

## ☁️ AWS

### S3 + CloudFront

#### 1. Criar Bucket S3

```bash
# Via AWS CLI
aws s3 mb s3://inacio-leal-contabilidade --region us-east-1
```

#### 2. Habilitar Static Website Hosting

```bash
aws s3 website s3://inacio-leal-contabilidade \
  --index-document index.html \
  --error-document index.html
```

#### 3. Build e Upload

```bash
# Build local
npm run build

# Upload para S3
aws s3 sync dist/ s3://inacio-leal-contabilidade --delete
```

#### 4. Criar CloudFront Distribution

1. Vá para CloudFront no console AWS
2. Clique em "Create distribution"
3. Configure:
   - **Origin:** S3 bucket
   - **Default root object:** index.html
   - **Error responses:** Redirect 404 para index.html
4. Clique em "Create distribution"

---

## 📄 GitHub Pages

### 1. Configure GitHub Actions

**`.github/workflows/deploy.yml`:**

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: inaciolealcontabilidade.com
```

### 2. Configurar Repositório

1. Vá para Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages` / folder: `/ (root)`

---

## 📝 Build Otimizado

### Antes de Deploy

```bash
# 1. Verificar linting
npm run lint

# 2. Executar testes
npm run test

# 3. Build de produção
npm run build

# 4. Preview do build
npm run preview
```

### Checklist de Deploy

- ✅ Todas as mudanças commitadas
- ✅ Testes passando
- ✅ Lint sem erros
- ✅ Build executa sem warnings
- ✅ Preview funciona corretamente
- ✅ Variáveis de ambiente configuradas
- ✅ SEO meta tags OK
- ✅ Performance Lighthouse OK

---

## 🔒 Variáveis de Ambiente

### `.env.local` (desenvolvimento)

```env
VITE_API_URL=http://localhost:3000
VITE_ENV=development
```

### `.env.production` (produção)

```env
VITE_API_URL=https://api.inaciolealcontabilidade.com
VITE_ENV=production
```

### Usar no Código

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
const env = import.meta.env.VITE_ENV;

console.log(`Conectando a ${apiUrl} em modo ${env}`);
```

---

## 📊 Monitoramento

### Ferramentas Recomendadas

- **[Sentry](https://sentry.io/)** — Rastreamento de erros
- **[Vercel Analytics](https://vercel.com/analytics)** — Performance
- **[Google Analytics](https://analytics.google.com/)** — Tráfego
- **[UptimeRobot](https://uptimerobot.com/)** — Uptime

### Setup Sentry (Exemplo)

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_ENV,
  tracesSampleRate: 1.0,
});
```

---

## 🔄 Rollback

### Vercel

```bash
# Via CLI
vercel --prod --confirm
```

### Netlify

1. Vá para Deploys
2. Clique na versão anterior
3. Clique em "Publish deploy"

### AWS S3

```bash
# Re-upload da versão anterior
aws s3 sync <backup-dir> s3://bucket-name --delete
```

---

## 💡 Performance

### Otimizações

1. **Compressão GZIP** — Ativada por padrão em Vercel/Netlify
2. **Cache HTTP** — Configure headers de cache
3. **Code splitting** — Vite faz automaticamente
4. **Imagens otimizadas** — Use formatos modernos (WebP)
5. **Lazy loading** — Para componentes/rotas

### Verificar Performance

```bash
# Google PageSpeed Insights
# https://pagespeed.web.dev

# WebPageTest
# https://www.webpagetest.org

# Lighthouse (Chrome DevTools)
# F12 → Lighthouse
```

---

## 📞 Suporte

Tem dúvidas sobre deploy?

- 📧 Email: lealcontabilidadeadm@gmail.com
- 💬 GitHub Issues: https://github.com/gfinacio/SIte_Inacio-Leal_Cont/issues
- 📚 Docs: [README.md](./README.md)
