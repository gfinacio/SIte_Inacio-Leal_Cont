# 🔐 Política de Segurança

## Reportar Vulnerabilidades

**Não abra issues públicas para vulnerabilidades de segurança.**

Se descobrir uma falha de segurança, envie um email para:

📧 **lealcontabilidadeadm@gmail.com**

Incluir:
- Descrição da vulnerabilidade
- Passos para reproduzir
- Impacto potencial
- Versão afetada

---

## 🛡️ Práticas de Segurança

### Dependências

- ✅ Dependências verificadas regularmente
- ✅ Auditorias `npm audit` antes de cada release
- ✅ Atualizações de segurança aplicadas imediatamente

```bash
# Verificar vulnerabilidades
npm audit

# Corrigir automaticamente
npm audit fix
```

### Código

- ✅ TypeScript em modo strict para segurança de tipos
- ✅ Validação de input com Zod
- ✅ Sanitização de dados antes de renderizar
- ✅ Proteção contra XSS

```typescript
// Validação de entrada
import { z } from 'zod';

const emailSchema = z.string().email();
const email = emailSchema.parse(userInput);
```

### HTTP Headers

Headers de segurança recomendados:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### CORS

Configurado para aceitar apenas requisições autorizadas:

```typescript
// Apenas inaciolealcontabilidade.com
const allowedOrigins = ['https://inaciolealcontabilidade.com'];
```

### Proteção de Dados

- ✅ HTTPS em produção (obrigatório)
- ✅ Sem armazenamento de dados sensíveis no localStorage
- ✅ Cookies com flag `HttpOnly` e `Secure`
- ✅ Conformidade com LGPD (Lei Geral de Proteção de Dados)

---

## 🚨 Histório de Segurança

### Nenhuma vulnerabilidade pública reportada até o momento.

---

## 📋 Checklist de Segurança

Antes de cada deploy:

- [ ] Executar `npm audit`
- [ ] Verificar ESLint
- [ ] Testes passando
- [ ] Sem console.logs com dados sensíveis
- [ ] Sem hardcoded secrets
- [ ] HTTPS ativado
- [ ] Headers de segurança configurados
- [ ] CSP validado
- [ ] CORS restritivo

---

## 📚 Referências

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security](https://react.dev/learn/security)
- [Node.js Security](https://nodejs.org/en/docs/guides/security/)
- [TypeScript Security](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Zod Validation](https://zod.dev/)

---

## 📞 Contato

Para questões de segurança:

📧 lealcontabilidadeadm@gmail.com
