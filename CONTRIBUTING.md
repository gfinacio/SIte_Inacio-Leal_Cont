# 🤝 Guia de Contribuição

Primeiramente, obrigado por considerar contribuir para o projeto Inácio & Leal Contabilidade!

## 📋 Código de Conduta

Este projeto segue um [Código de Conduta](./CODE_OF_CONDUCT.md). Ao participar, você concorda em respeitar seus termos.

---

## 🚀 Como Contribuir

### Relatando Bugs

Antes de abrir uma issue de bug, verifique a [lista de issues](https://github.com/gfinacio/SIte_Inacio-Leal_Cont/issues) para evitar duplicatas.

**Ao relatar um bug, inclua:**

1. **Título descritivo** — Resuma o problema de forma clara
2. **Descrição detalhada** — Contexto e comportamento esperado
3. **Passos para reproduzir** — Instruções passo-a-passo
4. **Screenshots/Logs** — Se aplicável, adicione evidências visuais
5. **Ambiente** — Node.js versão, navegador, SO, etc.

**Exemplo:**

```markdown
## Título
Formulário de contato não envia mensagens no Safari

## Descrição
Ao clicar no botão "Enviar", o formulário de contato na seção de contato não submete.

## Passos para Reproduzir
1. Acesse https://inaciolealcontabilidade.lovable.app/
2. Role até a seção de Contato
3. Preencha o formulário
4. Clique em "Enviar"
5. Verifique o console do navegador

## Resultado Esperado
A mensagem deveria ser enviada e uma notificação de sucesso aparecer.

## Resultado Atual
Nada acontece, o formulário permanece preenchido.

## Ambiente
- Node.js: 18.17.0
- Navegador: Safari 17.0
- SO: macOS 13.5
```

### Sugerindo Melhorias

**Ao sugerir uma melhoria, descreva:**

1. **Motivação** — Por que essa melhoria seria útil?
2. **Escopo** — Qual parte do projeto afeta?
3. **Implementação Sugerida** — Como você imaginaria implementar?
4. **Contexto Adicional** — Exemplos, links, screenshots, etc.

---

## 💻 Processo de Pull Request

### 1. Fork o Repositório

```bash
gh repo fork gfinacio/SIte_Inacio-Leal_Cont --clone
```

### 2. Crie uma Branch

```bash
git checkout -b feature/sua-feature-aqui
# ou para bugfix:
git checkout -b bugfix/seu-bugfix-aqui
```

**Nomes de branch recomendados:**
- `feature/novo-componente` — Novo recurso
- `bugfix/corrigir-erro` — Correção de bug
- `docs/atualizar-readme` — Documentação
- `refactor/reorganizar-componentes` — Refatoração
- `perf/otimizar-bundle` — Otimização de performance

### 3. Faça suas Mudanças

Veja [DEVELOPMENT.md](./DEVELOPMENT.md) para instruções de setup e boas práticas.

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Execute linter e testes
npm run lint
npm run test
```

### 4. Commit suas Mudanças

**Siga o padrão de commit convencional:**

```
<tipo>(<escopo>): <assunto>

<corpo>

<rodapé>
```

**Tipos:**
- `feat:` — Nova funcionalidade
- `fix:` — Correção de bug
- `docs:` — Documentação
- `style:` — Formatação, missing semicolons, etc.
- `refactor:` — Refatoração de código sem mudança de comportamento
- `perf:` — Otimização de performance
- `test:` — Adição/atualização de testes
- `chore:` — Atualizações de dependencies, scripts, etc.

**Exemplos:**

```bash
git commit -m "feat(components): add testimonials section"

git commit -m "fix(form): validate email field correctly

fix email regex to handle all RFC 5322 formats

Closes #42"

git commit -m "docs: update deployment instructions"
```

### 5. Push para sua Fork

```bash
git push origin feature/sua-feature-aqui
```

### 6. Abra um Pull Request

**No GitHub, clique em "Compare & pull request"**

**Seu PR deve incluir:**

- ✅ Título claro e descritivo
- ✅ Descrição detalhada do que foi mudado
- ✅ Referência a issues relacionadas (se houver)
- ✅ Screenshots de mudanças visuais
- ✅ Checklist de verificação completo

**Template de PR:**

```markdown
## Descrição
Descreva as mudanças de forma clara e concisa.

## Tipo de Mudança
- [ ] Bugfix (correção de bug)
- [ ] Feature (nova funcionalidade)
- [ ] Breaking change (mudança não compatível)
- [ ] Documentação

## Como foi Testado?
Descreva os testes que você executou.

## Checklist
- [ ] Meu código segue o style guide deste projeto
- [ ] Executei `npm run lint` sem erros
- [ ] Executei `npm run test` com sucesso
- [ ] Adicionei testes para minhas mudanças (se aplicável)
- [ ] Atualizei a documentação (se aplicável)
- [ ] Não há console.logs de debug no código

## Screenshots (se aplicável)
Adicione screenshots ou GIFs de mudanças visuais.

## Issues Relacionadas
Closes #<número da issue>
```

---

## 📝 Diretrizes de Estilo

### TypeScript/JavaScript

- Use TypeScript para segurança de tipos
- Prefira `const` em vez de `let` ou `var`
- Use arrow functions `() => {}`
- Siga o eslint do projeto: `npm run lint`

### React

- Use functional components com hooks
- Props devem ser tipadas com TypeScript
- Nomes de componentes em PascalCase
- Nomes de arquivos em PascalCase para componentes

### CSS/Tailwind

- Use classes Tailwind em vez de CSS customizado quando possível
- Mantenha consistência com design tokens existentes
- Evite inline styles
- Use `@apply` com moderação em `index.css`

### Commits

- Mensagens em inglês ou português (mantenha consistência)
- Commits atômicos (1 mudança lógica por commit)
- Referencie issues quando relevante

---

## 🧪 Testes

Todos os PRs devem manter ou melhorar a cobertura de testes.

```bash
# Executar testes
npm run test

# Modo watch
npm run test:watch

# Com coverage
npm run test -- --coverage
```

---

## 📚 Recursos Úteis

- [Documentação de Desenvolvimento](./DEVELOPMENT.md)
- [Guia de Deploy](./DEPLOYMENT.md)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## ❓ Dúvidas?

- 📖 Leia a [documentação](./DEVELOPMENT.md)
- 💬 Abra uma [discussão](https://github.com/gfinacio/SIte_Inacio-Leal_Cont/discussions)
- 📧 Entre em contato: lealcontabilidadeadm@gmail.com

---

## 🎉 Obrigado!

Sua contribuição é muito apreciada! Toda mudança, grande ou pequena, ajuda a tornar este projeto melhor.
