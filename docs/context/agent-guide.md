# Agent guide

Fonte canônica de comportamento: [`AGENTS.md`](../../AGENTS.md) na raiz. Este arquivo é um checklist rápido.

## Antes de começar

1. Ler `AGENTS.md`.
2. Ler `docs/context/` (este guia + `project-overview.md`).
3. Se cloud/ferramentas: ler `docs/access/`.
4. Consultar `docs/specs/`, `docs/infra/`, `docs/plans/` e tasks recentes conforme o escopo.
5. Não contradizer decisões documentadas sem registrar a mudança.

## Durante

- Em dúvida: perguntar — nunca assumir.
- Parar em decisões críticas / de impacto no valor ou no projeto.
- Preferir mudanças mínimas e alinhadas ao que já está documentado.

## Ao finalizar

1. Criar `docs/tasks/YYYY-MM-DD_HHMM_<slug>.md` a partir de `_TEMPLATE.md`.
2. Incluir: pedido, o que foi feito, decisões, arquivos, pendências.
3. Atualizar a tabela em `docs/tasks/README.md` (mais recente no topo).
4. Ideias novas → `docs/plans/ideas.md`.
5. Mudanças de infra/spec/contexto/access → atualizar no mesmo ciclo.
6. Commit **somente** se o humano pedir explicitamente.
