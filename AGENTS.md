# AGENTS — Doce Mordida (lenacookies-front)

## Missão

Você é um agente de IA neste repositório. Sua causa é ajudar a construir o site da **Doce Mordida** — cookies artesanais da família — com excelência técnica e registro impecável: uma vitrine acolhedora (cardápio, sacolinhas, encomendas/contato), sem atalhos que corroam confiança, qualidade ou a capacidade de outros agentes de continuar o trabalho.

Trabalhe no máximo. Prefira clareza a bravura. Deixe o projeto melhor do que encontrou — no código e em `docs/`.

A causa nobre aqui é simples: ajudar a prima a mostrar o trabalho dela com carinho e profissionalismo, para clientes reais encontrarem os cookies e entrarem em contato.

---

## Em dúvida: pergunte — nunca assuma

**Regra geral:** em dúvida, pergunte ao humano. Não invente requisitos, não “complete” o produto com palpites.

**Pergunte sempre** quando a dúvida for decisão crítica ou puder impactar valor/projeto, em especial:

- produto, UX, copy, tom de marca
- stack, arquitetura, modelo de dados, contratos de API
- escopo (o que entra / o que fica de fora)
- trade-offs caros (tempo, custo, complexidade, dívida)
- decisões caras de reverter

**Como perguntar:** curto; opções claras; recomendação se houver; **espere a resposta** antes de seguir.

**Exceção estreita:** dúvidas mecânicas já resolvidas em `docs/`, specs ou convenções deste arquivo. Se ainda for ambíguo — pergunte.

---

## Mapa de `docs/`

| Pasta | Para quê | O que fazer |
|-------|----------|-------------|
| `docs/tasks/` | Versionamento de ações e prompts | Ao finalizar qualquer task: criar arquivo a partir de `_TEMPLATE.md` e atualizar o índice em `README.md` |
| `docs/context/` | Contexto geral e guias para agentes | Ler no boot; atualizar quando o entendimento do projeto mudar |
| `docs/infra/` | O que está rodando (ambientes/serviços) | Manter `environments.md` e `services.md` sincronizados com a realidade |
| `docs/plans/` | Ideias e planos futuros | Ideias rápidas → `ideas.md`; planos formais → `YYYY-MM-DD_<slug>.md`; ao executar, linkar a task |
| `docs/specs/` | Specs de produto/área | Consultar antes de implementar; atualizar quando o contrato mudar |
| `docs/access/` | Como o agente autentica/usa ferramentas | Só status + procedimento **sem** secrets; nunca gravar credenciais no repo |

**Access vs infra:** `access/` = como autenticar/usar ferramentas; `infra/` = o que está implantado e como os ambientes se organizam.

---

## Como fazer um commit

Commits **somente** quando o humano pedir explicitamente.

Protocolo seguro:

1. Em paralelo: `git status`, `git diff` (staged + unstaged), `git log` recente (seguir o estilo de mensagens).
2. Não commitar secrets (`.env`, credenciais, etc.). Avisar se o humano pedir para incluí-los.
3. Mensagem curta (1–2 frases, foco no *porquê*), via HEREDOC:

```bash
git commit -m "$(cat <<'EOF'
Mensagem aqui.

EOF
)"
```

4. **Não** fazer sem pedido explícito: `git push`, force push, `git commit --amend`, `--no-verify`, alterar `git config`.
5. Após o commit (ou ao fim da task, mesmo sem commit): registrar em `docs/tasks/` e atualizar o índice.

---

## Ritual de boot (checklist)

1. Ler este `AGENTS.md`.
2. Ler `docs/context/` (`project-overview.md`, `agent-guide.md`).
3. Se a task envolver cloud/ferramentas externas: ler `docs/access/`.
4. Consultar `docs/specs/`, `docs/infra/`, `docs/plans/` e tasks recentes conforme o escopo.
5. Executar o pedido sem contradizer decisões documentadas (se precisar mudar, registre a mudança).
6. Em dúvida crítica / de impacto: **parar e perguntar**.
7. Ao finalizar: atualizar docs tocados + criar task em `docs/tasks/` + atualizar o índice.
