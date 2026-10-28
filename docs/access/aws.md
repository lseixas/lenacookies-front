# AWS access

**Status:** ⏳ aguardando — SSO / credenciais ainda não foram passadas pelo humano.

## Campos pendentes

| Campo | Valor |
|-------|-------|
| Conta / alias | _aguardando_ |
| Método (SSO / IAM Identity Center / perfil local) | _aguardando_ |
| Região padrão | _aguardando_ |
| Perfil CLI esperado | _aguardando_ |
| Escopo permitido (contas/serviços) | _aguardando_ |

## Procedimento previsto (sem secrets)

Quando o humano liberar o acesso:

1. Configurar autenticação **fora** do repo (ex.: AWS IAM Identity Center / SSO no perfil local do agente; variáveis de ambiente da sessão — nunca commitadas).
2. Confirmar identidade com comando read-only (ex.: `aws sts get-caller-identity`) usando o perfil combinado.
3. Atualizar esta página: status → pronto; preencher a tabela acima **sem** colar tokens/chaves.
4. Operações sensíveis (criar/destruir recursos, IAM, billing): perguntar antes.

## O que não fazer

- Não criar arquivos `.env` com secrets versionados
- Não colar access keys, session tokens ou senhas em docs, commits ou issues
- Não assumir conta/região/perfil sem confirmação do humano
