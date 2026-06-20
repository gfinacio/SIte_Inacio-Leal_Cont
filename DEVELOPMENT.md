# 🛠️ Guia de Desenvolvimento

Instruções completas para configurar o ambiente de desenvolvimento local.

## 📋 Pré-requisitos

- **Node.js** 18.0 ou superior ([Download](https://nodejs.org/))
- **npm** 9.0+ ou **bun** 1.0+ (recomendado: [bun](https://bun.sh))
- **Git** 2.37+ ([Download](https://git-scm.com/))
- Editor de código: [VS Code](https://code.visualstudio.com/) recomendado

### Verificar Versões

```bash
node --version    # v18.0.0 ou superior
npm --version     # 9.0.0 ou superior
bun --version     # opcional
```

---

## 🚀 Setup Inicial

### 1. Clone o Repositório

```bash
git clone https://github.com/gfinacio/SIte_Inacio-Leal_Cont.git
cd SIte_Inacio-Leal_Cont
```

### 2. Instale as Dependências

**Com npm:**
```bash
npm install
```

**Com bun (mais rápido):**
```bash
bun install
```

### 3. Inicie o Servidor de Desenvolvimento

**Com npm:**
```bash
npm run dev
```

**Com bun:**
```bash
bun run dev
```

O site estará disponível em `http://localhost:5173`

---

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev           # Inicia servidor com HMR
npm run preview       # Preview do build de produção

# Build
npm run build         # Build otimizado para produção
npm run build:dev     # Build em modo debug

# Qualidade de Código
npm run lint          # Executa ESLint
npm run lint --fix    # Corrige problemas automaticamente

# Testes
npm run test          # Executa testes uma vez
npm run test:watch    # Modo watch para testes
```

---

## 🏗️ Estrutura do Projeto

```
src/
├── assets/              # Imagens, ícones, fuentes
├── components/
│   ├── ui/              # Componentes shadcn/ui base
│   │   └── *.tsx        # Ex: Button.tsx, Input.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── FloatingButtons.tsx
├── hooks/               # Custom React Hooks
│   ├── use-toast.ts
│   └── useScrollAnimation.ts
├── lib/                 # Utilitários
│   └── utils.ts
├── pages/
│   ├── Index.tsx        # Página principal
│   └── NotFound.tsx     # Página 404
├── App.tsx              # Root component e roteamento
├── main.tsx             # Entry point
├── vite-env.d.ts        # Tipos Vite
└── index.css            # Estilos globais
```

---

## 💻 Convenções de Código

### Componentes React

**Padrão de arquivo:** `src/components/NomeComponente.tsx`

```typescript
import { FC } from 'react';

interface NomeComponenteProps {
  title: string;
  onClose?: () => void;
}

const NomeComponente: FC<NomeComponenteProps> = ({ title, onClose }) => {
  return (
    <div className="space-y-4">
      <h1>{title}</h1>
      {onClose && <button onClick={onClose}>Fechar</button>}
    </div>
  );
};

export default NomeComponente;
```

### Custom Hooks

**Padrão de arquivo:** `src/hooks/useMeuHook.ts`

```typescript
import { useState, useCallback } from 'react';

export function useMeuHook() {
  const [state, setState] = useState<string>('');

  const handleChange = useCallback((value: string) => {
    setState(value);
  }, []);

  return { state, handleChange };
}
```

### Tipos TypeScript

Sempre defina tipos para props:

```typescript
// ✅ Bom
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

// ❌ Evitar
const Button = (props: any) => {};
```

### Imports

```typescript
// 1. React e bibliotecas externas
import { FC, useState } from 'react';
import { useRouter } from 'react-router-dom';

// 2. Componentes locais
import Button from '@/components/Button';
import Header from '@/components/Header';

// 3. Hooks
import { useToast } from '@/hooks/use-toast';

// 4. Utilitários
import { cn } from '@/lib/utils';
```

### Styling com Tailwind

```typescript
// ✅ Bom - Use classes Tailwind
<div className="flex items-center justify-between gap-4 p-4 bg-gray-50">
  <h2 className="text-lg font-semibold">Título</h2>
</div>

// ⚠️ Moderadamente - Use cn() para lógica condicional
const buttonClasses = cn(
  'px-4 py-2 rounded font-medium',
  variant === 'primary' && 'bg-blue-600 text-white',
  variant === 'secondary' && 'bg-gray-200 text-gray-900',
  disabled && 'opacity-50 cursor-not-allowed'
);

// ❌ Evitar - Inline styles
<div style={{ padding: '16px', backgroundColor: '#f9fafb' }}>
```

---

## 🎯 Fluxo de Desenvolvimento

### Criar um Novo Componente

```bash
# 1. Crie o arquivo
touch src/components/MeuComponente.tsx

# 2. Exporte o componente em um barril (index se houver)
# ou importe diretamente

# 3. Use o componente
import MeuComponente from '@/components/MeuComponente';
```

### Adicionar Novo Hook

```bash
# 1. Crie o hook
touch src/hooks/useMeuHook.ts

# 2. Use em um componente
import { useMeuHook } from '@/hooks/useMeuHook';
```

### Modificar Estilos

1. Prefira Tailwind CSS classes
2. Se necessário CSS customizado, edite `src/index.css`
3. Para temas, edite `tailwind.config.ts`

---

## 🧪 Testes

### Executar Testes

```bash
# Rodar uma vez
npm run test

# Modo watch (re-executa ao salvar)
npm run test:watch

# Com coverage
npm run test -- --coverage
```

### Estrutura de Testes

```typescript
// src/components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    await userEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

---

## 🔍 Linting e Formatting

### ESLint

```bash
# Verificar erros
npm run lint

# Corrigir automaticamente
npm run lint -- --fix
```

**Configuração:** `.eslintrc.js`

### Prettier (opcional)

Para formatação automática ao salvar, instale a extensão Prettier no VS Code:

1. Instale: `code --install-extension esbenp.prettier-vscode`
2. Configure em `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

---

## 🐛 Debug

### VS Code Debug

**Arquivo:** `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverride": {
        "/vite:///": "${workspaceFolder}/"
      }
    }
  ]
}
```

### Console Logs

```typescript
// ✅ Use para debug
console.log('Estado atual:', state);

// ❌ Remova antes de commitar
console.log('DEBUG'); // ← ESLint vai reclamar
```

---

## 📚 Recursos Úteis

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev/guide/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [Vitest](https://vitest.dev/)

---

## 💡 Dicas

1. **Use o devtools do React:** [React DevTools](https://react-devtools.io/)
2. **Aproveite HMR:** Alterações são refletidas em tempo real
3. **Organize imports:** Use o path alias `@/` para imports relativos
4. **Reutilize componentes:** Antes de criar novo, veja se existe similar
5. **Documente tipos:** TypeScript é sua documentação viva

---

## ❓ Problemas Comuns

### Porta 5173 já em uso

```bash
# Escolha outra porta
npm run dev -- --port 3000
```

### Dependências desatualizadas

```bash
# Atualizar todas
npm update

# Atualizar específica
npm update react
```

### Cache do Vite causando problemas

```bash
# Limpar cache
rm -rf node_modules/.vite

# Ou: limpar build
rm -rf dist
```

---

## 📞 Suporte

Tem dúvidas? Abra uma [discussão](https://github.com/gfinacio/SIte_Inacio-Leal_Cont/discussions) ou [issue](https://github.com/gfinacio/SIte_Inacio-Leal_Cont/issues).
