# Task: Bootstrap da estrutura operacional docs/ + AGENTS.md

- **Data**: 2026-10-28
- **Agente / sessão**: Cursor Agent
- **Status**: done
- **Áreas tocadas**: `AGENTS.md`, `.cursor/rules/`, `docs/`

## Prompt / pedido do usuário

> Pass-on: montar a estrutura operacional de docs + AGENTS.md neste repositório (espelhando o sistema Politiqe Front, sem copiar produto/stack). Criar árvore, templates, regra Cursor always-apply, ritual de boot/finalize; placeholders honestos onde ainda não há decisão; registrar a primeira task documentando o próprio bootstrap.

## O que foi feito

- Criadas as seis pastas sob `docs/`: `tasks/`, `context/`, `infra/`, `plans/`, `specs/`, `access/`
- Criado `AGENTS.md` na raiz (missão, pergunte em dúvida, mapa docs, commits, ritual de boot)
- Criada regra Cursor `.cursor/rules/docs-task-logging.mdc` com `alwaysApply: true`
- Populados READMEs e arquivos iniciais com placeholders `_a definir_` onde stack/produto ainda não existem
- Documentado `docs/access/aws.md` como aguardando SSO/credenciais (sem secrets)
- Registrada esta task e atualizado o índice

## Decisões

- Nome do projeto adaptado do repositório: **Lena Cookies Front** (`lenacookies-front`)
- Missão genérica de excelência + valor a clientes/operação; stack e product specs ficam `_a definir_`
- Access AWS marcado como ⏳ aguardando — nenhum secret no repo
- Repo estava vazio (só `.git`); nenhum conteúdo de produto Politiqe foi copiado

## Arquivos alterados

- `AGENTS.md` — guia global de agentes
- `.cursor/rules/docs-task-logging.mdc` — regra always-apply de logging
- `docs/README.md` — índice das pastas
- `docs/tasks/_TEMPLATE.md` — template de task
- `docs/tasks/README.md` — convenção + índice
- `docs/tasks/2026-10-28_1800_setup-docs-structure.md` — esta task
- `docs/context/README.md`, `project-overview.md`, `agent-guide.md`
- `docs/infra/README.md`, `environments.md`, `services.md`
- `docs/plans/README.md`, `ideas.md`
- `docs/specs/README.md`, `product.md`
- `docs/access/README.md`, `aws.md`

## Pendências / follow-ups

- [ ] Preencher stack e estrutura real em `docs/context/project-overview.md` quando o código existir
- [ ] Completar `docs/specs/product.md` com decisões de produto
- [ ] Configurar SSO/credenciais AWS (ou outra ferramenta) e atualizar `docs/access/` — sem gravar secrets
- [ ] Popular `docs/infra/` quando ambientes/serviços forem definidos

## Notas para próximos agentes

Repo iniciou vazio. Toda a estrutura operacional está no lugar; o próximo trabalho substantivo deve seguir o ritual de boot em `AGENTS.md` e registrar task ao finalizar. Em dúvida crítica — perguntar ao humano.
