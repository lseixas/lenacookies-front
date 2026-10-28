# Project overview — Doce Mordida

## O que é

Site one-page da **Doce Mordida** (cookies artesanais): vitrine com cardápio, sacolinhas e canal de encomendas/contato. Sem checkout/pagamentos.

Repositório GitHub: `lenacookies-front`.

## Licença

_a definir_

## Stack

| Camada | Escolha |
|--------|---------|
| Framework UI | React 19 |
| Linguagem | TypeScript |
| Build / bundler | Vite 8 |
| Estilo | CSS modules-by-file + tokens (`src/styles/`) |
| Hospedagem | _a definir_ |
| Backend / API | nenhum (estático) |

## Estrutura do repositório

```
src/                 # app React
  components/        # Header, Hero, Sabores, Sacolinhas, Encomendas, PixelCat, Footer
  data/menu.ts       # cardápio + contatos
  styles/            # tokens + global
public/imgs/         # fotos reais do produto + logo
public/cat/          # frames do mascote pixel (idle/turn/sleep/stretch)
imgs/                # fonte original das fotos (espelhada em public/imgs)
docs/                # documentação operacional
AGENTS.md
```

## Links úteis

- [`AGENTS.md`](../../AGENTS.md) — missão, mapa docs, commits, boot
- [`docs/specs/product.md`](../specs/product.md) — escopo de produto
- [`docs/`](../README.md) — índice docs
- [`docs/access/`](../access/) — acesso a ferramentas
