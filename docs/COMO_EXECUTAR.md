# 🚀 Como Executar o Projeto — Visão Geral

Bem-vindo ao guia central de execução do **Restaurant Finder (Google Maps & Places API)**. Este projeto foi estruturado para oferecer **duas formas padronizadas de execução**, permitindo que você escolha entre rodar diretamente na sua máquina local ou em containers isolados via Docker.

---

## 🧭 Escolha seu Modo de Execução

| Modo de Execução | Porta Principal | Indicado Para | Guia Detalhado |
| :--- | :--- | :--- | :--- |
| 💻 **Execução Local (Laragon / Node.js)** | `http://localhost:3000` | Desenvolvimento diário, depuração rápida e hot-reload | [📄 Ler `COMO_EXECUTAR_LOCAL.md`](./COMO_EXECUTAR_LOCAL.md) |
| 🐳 **Execução via Docker Compose** | `http://localhost:8080` | Ambiente padronizado de produção com Nginx, MySQL e phpMyAdmin | [📄 Ler `COMO_EXECUTAR_DOCKER.md`](./COMO_EXECUTAR_DOCKER.md) |

---

## ⚙️ Alternância Rápida no Arquivo `.env`

O arquivo `.env` na raiz do projeto controla qual ambiente está ativo através de dois blocos claramente identificados:

1. **Bloco `# LOCAL` (Ativo por padrão):**
   - Configurado para `APP_URL=http://localhost:3000`, `DB_HOST=127.0.0.1` e `DB_PORT=3307`.
2. **Bloco `# DOCKER` (Comentado por padrão):**
   - Configurado para `APP_URL=http://localhost:8080`, `DB_HOST=mysql` e `DB_PORT=3306`.

> 💡 **Nota sobre a API do Google Maps:** A variável `REACT_APP_GOOGLE_API_KEY` é opcional para testes. Caso esteja vazia, a aplicação ativa automaticamente o **Modo Demonstração Inteligente**, exibindo restaurantes simulados completos com busca funcional, avaliações e modal de detalhes.

---

## 🔗 Documentação Complementar

- [💻 Guia Passo a Passo — Ambiente Local](./COMO_EXECUTAR_LOCAL.md)
- [🐳 Guia Passo a Passo — Ambiente Docker](./COMO_EXECUTAR_DOCKER.md)
- [🔐 Credenciais de Acesso e Roteiro de Testes](./ACESSOS_TESTES.md)
