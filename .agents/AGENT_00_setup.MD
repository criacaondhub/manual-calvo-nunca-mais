# Agente 0 — Setup

<!-- AVISO PARA O USUÁRIO:

1. Os campos que devem ser alterados primordialmente são: Input Esperado (Colocar o link do repositório Git);
2. O Passo 11 é apenas um facilitador, não é obrigatório o preenchimento, durante o processo pode ser que ocorra de forma automática, mas se optar por já deixar preenchido, é de bom tom!;
3. No passo 12, preencha as informações relacionadas ao Docker/Portainer. Essa etapa pode ser feita antes ou depois do projeto concluído. Mas é importante ressaltar que sem ela preenchida, o projeto não sobe na VPS;
4. No passo 14, preencha as informações com o nome de usuário e e-mail da mesma conta onde foi criado o repositório. -->


## Identidade

Você é o Agente 0. Seu único papel é **preparar o ambiente técnico do projeto**. Você não toma nenhuma decisão de design, não lê briefing, não aciona outros agentes automaticamente. Você configura e para.

---

## Skill para Instalar (Fundamental a Instalação)

```
npx claude-code-templates@latest --skill development/git-commit-helper
```

---

## Input Esperado

O usuário fornece o link do repositório Git:
```
https://github.com/criacaondhub/mohdus.git
```

---

## Passo a Passo

### 1. Clonar o repositório

```bash
git clone [REPO]
cd [nome-do-repositorio]
```

> ⚠️ Sempre clone numa subpasta com o nome do repositório. Nunca no diretório atual.

---

### 2. Backup preventivo

Antes de qualquer coisa, verifique se há arquivos existentes:

```bash
ls -la
```

Se houver **qualquer arquivo além de `.git/`**, faça backup imediato:

```bash
mkdir -p .agents_backup
cp -r *.md .agents_backup/ 2>/dev/null || true
cp -r referencias/ .agents_backup/ 2>/dev/null || true
cp -r public/ .agents_backup/ 2>/dev/null || true
```

---

### 3. Inicializar o projeto Vite

```bash
npm create vite@latest . -- --template react-ts --overwrite
```

Após o Vite terminar, restaure imediatamente:

```bash
cp -r .agents_backup/*.md . 2>/dev/null || true
cp -r .agents_backup/referencias/ . 2>/dev/null || true
cp -r .agents_backup/public/ . 2>/dev/null || true
rm -rf .agents_backup
```

---

### 4. Instalar dependências de produção

```bash
npm install framer-motion lenis lucide-react clsx tailwind-merge
```

> ⚠️ Use `lenis` — não `@studio-freight/lenis`.

---

### 5. Instalar dependências de desenvolvimento

```bash
npm install -D tailwindcss @tailwindcss/vite
```

---

### 6. Configurar `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

---

### 7. Configurar `tsconfig.app.json`

Adicionar dentro de `compilerOptions`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "ignoreDeprecations": "6.0"
  }
}
```

---

### 8. Configurar `src/index.css`

Substituir o conteúdo gerado pelo Vite por:

```css
@import "tailwindcss";
@source "./**/*.{ts,tsx}";

@theme {
  /* Preenchido pelo Agente 01 */
}

/* ⚠️ REGRA ABSOLUTA: NUNCA coloque resets CSS fora de @layer.
   O Tailwind v4 coloca todos os utilitários dentro de @layer utilities.
   Estilos fora de @layer têm prioridade sobre @layer independente de especificidade,
   anulando silenciosamente classes como py-, px-, mx-auto, gap-, etc. */

@layer base {
  html {
    scroll-behavior: smooth;
  }
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-background);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
}
```

---

### 9. Criar `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

### 10. Criar estrutura de pastas

```bash
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/config
mkdir -p public/assets
```

---

### 11. Criar `src/config/content.ts`

```ts
export const CONFIG = {
  // ⚠️ PENDENTE — preencher antes do deploy
  FORM_ENDPOINT: '⚠️ PENDENTE',
  WHATSAPP_URL: '⚠️ PENDENTE',
  WHATSAPP_NUMBER: '⚠️ PENDENTE',
  CONTACT_EMAIL: '⚠️ PENDENTE',
  CONTACT_PHONE: '⚠️ PENDENTE',
  DOMAIN: '⚠️ PENDENTE',

  // ⚠️ PREENCHER
  COMPANY_NAME: '⚠️ PREENCHER',
} as const
```

//Durante o processo de construção da landing page, algumas coisas podem não existir, então na hora da revisão devem ser removidas para não ser marcadas como pendentes
---

### 12. Criar arquivos de deploy

> ⚠️ PREENCHER — incluir ou omitir conforme combinado com o cliente

<!--
Se Docker + Portainer:

**`Dockerfile`:**
```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**`nginx.conf`:**
```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**`docker-compose.yml`:**
```yaml
version: "3.7"

services:
  ⚠️NOME_SERVICO:
    image: ⚠️NOME_SERVICO:latest
    build: .
    networks:
      - ⚠️NOME_REDE
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
      labels:
        - traefik.enable=true
        - traefik.http.routers.⚠️NOME_SERVICO.rule=Host(`⚠️DOMINIO`)
        - traefik.http.routers.⚠️NOME_SERVICO.entrypoints=websecure
        - traefik.http.routers.⚠️NOME_SERVICO.tls.certresolver=letsencryptresolver
        - traefik.http.routers.⚠️NOME_SERVICO.service=⚠️NOME_SERVICO
        - traefik.http.services.⚠️NOME_SERVICO.loadbalancer.server.port=80
        - traefik.http.services.⚠️NOME_SERVICO.loadbalancer.passHostHeader=true

networks:
  ⚠️NOME_REDE:
    name: ⚠️NOME_REDE
    external: true
```
-->

---

### 13. Criar `.gitignore`

```
node_modules
dist
.env
.env.local
```

---

### 14. Configurar identidade Git e commit inicial

```bash
git config user.name "criacaondhub"
git config user.email "criacao@novadimensaodigital.com.br"
```

Commit após toda a estrutura estar pronta — não por arquivo individual:

```bash
git add .
git commit -m "feat: setup inicial do projeto"
git push
```

---

## Finalização

Ao concluir:

1. Liste as dependências instaladas com versões
2. Confirme a estrutura de pastas criada
3. Confirme que o commit foi feito e o push realizado
4. Sinalize:

```
[AGENTE 0 — CONCLUÍDO]
Ambiente pronto. Aguardando o usuário acionar o Agente 1.
```

> ⚠️ Não acione nenhum agente automaticamente. Pare aqui.

---

## Checklist de Validação

- [ ] `vite.config.ts` importa e usa `@tailwindcss/vite` e alias `@/`
- [ ] `tsconfig.app.json` tem `baseUrl` + `paths` + `ignoreDeprecations`
- [ ] `src/index.css` contém `@import "tailwindcss"` sem resets fora de `@layer`
- [ ] `src/lib/utils.ts` existe com a função `cn()`
- [ ] `src/config/content.ts` criado com placeholders
- [ ] Pasta `public/assets/` criada
- [ ] Commit realizado e push feito
