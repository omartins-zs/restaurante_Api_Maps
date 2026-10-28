# 🔐 Guia de Acessos, Credenciais e Roteiro de Testes

Este documento reúne todas as URLs de acesso, credenciais de demonstração e o roteiro passo a passo para validar todas as funcionalidades da aplicação **Restaurant Finder (Google Maps & Places API)**, tanto em execução **Local** quanto via **Docker**.

---

## 🌐 1. URLs de Acesso aos Serviços

| Serviço | Ambiente Local | Ambiente Docker | Descrição |
| :--- | :--- | :--- | :--- |
| **Aplicação Web (Frontend)** | `http://localhost:3000` | `http://localhost:8080` | Interface React de busca de restaurantes e mapas |
| **Healthcheck HTTP (Nginx)** | N/A | `http://localhost:8080/api/health` | Verificação de saúde do servidor Nginx |
| **phpMyAdmin** | `http://localhost/phpmyadmin` | `http://localhost:8085` | Gerenciador visual do banco de dados MySQL |
| **MySQL (Porta Externa)** | `127.0.0.1:3307` | `127.0.0.1:3308` | Acesso via cliente SQL externo (DBeaver, TablePlus, etc.) |

---

## 👤 2. Perfis de Acesso (Credenciais de Demonstração)

A tela de **Login** conta com preenchimento automático em **1 clique** para facilitar a avaliação imediata sem necessidade de digitação manual:

| Perfil | Nome de Exibição | E-mail | Senha | Nível / Papel |
| :--- | :--- | :--- | :--- | :--- |
| **Administrador** | Admin Sistema | `admin@restaurantes.com` | `Password@123` | Visão administrativa completa |
| **Gestor** | Gestor Gastronômico | `gestor@restaurantes.com` | `Password@123` | Gestão de estabelecimentos parceiros |
| **Cliente** | Cliente Visitante | `cliente@restaurantes.com` | `Password@123` | Consulta de restaurantes, avaliações e horários |

---

## 🗄️ 3. Credenciais de Banco de Dados (Infraestrutura)

### Ambiente Local (Laragon)
- **Host:** `127.0.0.1`
- **Porta:** `3307`
- **Banco de Dados:** `restaurante_maps`
- **Usuário:** `root`
- **Senha:** *(em branco / vazio)*

### Ambiente Docker
- **Host Interno (entre containers):** `mysql`
- **Porta Interna:** `3306`
- **Host Externo (sua máquina):** `127.0.0.1`
- **Porta Externa:** `3308`
- **Banco de Dados:** `restaurante_maps`
- **Usuário:** `restaurante_user` (ou `root`)
- **Senha:** `secret`

---

## 🧪 4. Roteiro Completo de Testes Funcionais

### Passo 1: Autenticação e Sessão Rápida
1. Acesse a URL da aplicação (`http://localhost:3000` no modo local ou `http://localhost:8080` no Docker).
2. Na tela de **Login**, clique em qualquer um dos botões da seção **"Acesso Rápido (1 Clique - Ambiente de Testes)"** (ex.: **Gestor Gastronômico**).
3. Observe que os campos de **E-mail** e **Senha** são preenchidos instantaneamente.
4. Clique em **"Entrar na Plataforma"**.
5. Verifique no topo da tela a **Barra de Sessão**, exibindo seu nome, e-mail e a etiqueta colorida correspondente ao seu perfil.

### Passo 2: Validação do Modo Demonstração / Fallback Inteligente (Sem API Key)
1. Mesmo sem configurar uma chave `REACT_APP_GOOGLE_API_KEY` no arquivo `.env`, observe que a aplicação **não trava no carregamento**.
2. O sistema carrega automaticamente **6 restaurantes simulados realistas** em São Paulo - SP (*Trattoria Bella Napoli*, *Sushi Leblon Imperial*, *Parrilla Don Julio Brasil*, *Bistrô Le Jardin Parisien*, *Burger Lab Craft Kitchen* e *Boteco Boa Praça Vila Madalena*).
3. Verifique o carrossel **"Na sua Área"** com fotos e a listagem lateral com estrelas de avaliação (`rating`) e endereço formatado.

### Passo 3: Busca e Filtro de Restaurantes
1. No campo **"Pesquisar Restaurantes"** na barra lateral esquerda, digite `Sushi` ou `Italiana` ou `Paulista`.
2. Pressione `Enter` ou clique no ícone de lupa (`search`).
3. Verifique que tanto a lista lateral quanto os cartões do painel de mapa são filtrados instantaneamente.
4. Apague o texto do campo de busca para restaurar todos os restaurantes.

### Passo 4: Inspeção de Detalhes no Modal
1. Clique sobre qualquer restaurante na barra lateral esquerda ou em um dos marcadores do painel principal.
2. Um **Modal** será aberto exibindo:
   - Nome do estabelecimento;
   - Telefone formatado (ex.: `(11) 3251-8900`);
   - Endereço completo;
   - Status em tempo real (`Aberto agora :)` ou `Fechado neste momento :(`).
3. Clique fora do modal ou pressione `Esc` para fechá-lo.

### Passo 5: Encerramento de Sessão (Logout)
1. No canto superior direito da barra de sessão, clique no botão **"Sair da Conta"**.
2. Confirme que a sessão é limpa do `localStorage` e que você retorna imediatamente à tela de Login.
