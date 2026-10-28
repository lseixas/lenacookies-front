# Task: Site Doce Mordida (showcase + contato)

- **Data**: 2026-10-28
- **Agente / sessão**: Cursor Agent
- **Status**: done
- **Áreas tocadas**: `src/`, `public/`, `index.html`, `package.json`, `AGENTS.md`, `docs/`

## Prompt / pedido do usuário

> Implementar o plano: website one-page para o negócio de cookies da prima (Doce Mordida). Sem pagamentos — vitrine com cardápio, sacolinhas e contato. Usar fotos reais de `imgs/`. Gatinho com ciclo ajeitar → dormir → espreguiçar → olhar (frames gerados a partir de `imgs/cat.png`). Stack Vite + React + TypeScript + CSS.

## O que foi feito

- Scaffold Vite + React + TS; app one-page com Header, Hero, Sabores, Sacolinhas, Encomendas, Footer
- Fotos reais copiadas para `public/imgs/`; logo e cardápio do mockup
- Frames do gato: `idle` (transparência a partir de `cat.png`) + `turn-1`, `turn-2`, `sleep`, `stretch` gerados e com fundo removido
- Componente `PixelCat` com máquina de estados em loop
- Tokens de marca, reveal on scroll, layout responsivo
- Docs/AGENTS atualizados para a marca Doce Mordida e stack real

## Decisões

- Gerar frames do mascote (não usar pack CC0 alheio) para manter o personagem de `cat.png`
- Sem checkout; WhatsApp via `wa.me/5511988795097`
- CSS por arquivo de componente + tokens, sem Tailwind

## Arquivos alterados

- `src/**` — app e componentes
- `public/imgs/**`, `public/cat/**` — assets públicos
- `index.html`, `package.json` — meta e scripts
- `AGENTS.md`, `docs/context/project-overview.md`, `docs/specs/product.md` — sync docs
- `docs/tasks/2026-10-28_1829_doce-mordida-website.md` — esta task

## Pendências / follow-ups

- [ ] Revisar visual dos frames gerados do gato (estilo pode divergir um pouco do idle original)
- [ ] Definir hospedagem / deploy
- [ ] Validar preços/copy finais com a dona do negócio

## Notas para próximos agentes

Rodar com `npm run dev`. Cardápio e contatos em `src/data/menu.ts`. Ciclo do gato em `src/components/PixelCat.tsx`.
