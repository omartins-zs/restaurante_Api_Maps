# 🐳 Como Executar com Docker Compose

Este guia apresenta o passo a passo completo para executar o **Restaurant Finder (Google Maps & Places API)** em containers padronizados utilizando **Docker** e **Docker Compose**, com build multi-stage otimizado, servidor **Nginx** de alta performance, **MySQL 8.0** e **phpMyAdmin**.

---

## 🏗️ 1. Arquitetura dos Containers

| Container | Serviço | Porta Externa -> Interna | Função |
| :--- | :--- | :--- | :--- |
| `restaurante_maps_app` | `app` | *(Interno)* | Compila o bundle React otimizado e sincroniza os estáticos no volume compartilhado |
| `restaurante_maps_nginx` | `nginx` | `8080:80` | Servidor web Nginx com compressão Gzip, cache de assets, roteamento SPA e `/api/health` |
| `restaurante_maps_mysql` | `mysql` | `3308:3306` | Banco de dados MySQL 8.0 com volume persistente `mysql_data` e healthcheck automático |
| `restaurante_maps_phpmyadmin` | `phpmyadmin` | `8085:80` | Interface web phpMyAdmin conectada ao serviço `mysql` |

---

## 📋 2. Passo a Passo para Subir os Containers

### Passo 1: Preparar o Arquivo `.env`
Se ainda não existir o arquivo `.env`, crie-o a partir do `.env.example`:
```bash
cp .env.example .env
```

Edite o arquivo `.env`, **comente** o bloco `# LOCAL` e **descomente** o bloco `# DOCKER`:
```env
# ==============================================================================
# LOCAL (Comentado)
# ==============================================================================
# APP_URL=http://localhost:3000
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3307
# DB_DATABASE=restaurante_maps
# DB_USERNAME=root
# DB_PASSWORD=

# ==============================================================================
# DOCKER (Ativo)
# ==============================================================================
APP_URL=http://localhost:8080
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=restaurante_maps
DB_USERNAME=restaurante_user
DB_PASSWORD=secret
```

### Passo 2: Construir e Iniciar os Serviços
Execute o comando abaixo na raiz do projeto:
```bash
docker compose up -d --build
```

### Passo 3: Verificar o Status dos Containers
```bash
docker compose ps
```
Todos os serviços (`app`, `nginx`, `mysql`, `phpmyadmin`) devem estar com status `Up` (e o `mysql` como `healthy`).

---

## 🌐 3. Acessando os Serviços

- **Aplicação Web (Nginx + React SPA):** [http://localhost:8080](http://localhost:8080)
- **Healthcheck da Aplicação:** [http://localhost:8080/api/health](http://localhost:8080/api/health)
- **phpMyAdmin:** [http://localhost:8085](http://localhost:8085)
  - **Servidor:** `mysql`
  - **Utilizador:** `restaurante_user` (ou `root`)
  - **Palavra-passe:** `secret`
- **Conexão Externa ao MySQL (DBeaver / Workbench):**
  - **Host:** `127.0.0.1` | **Porta:** `3308` | **Database:** `restaurante_maps`

---

## 🛠️ 4. Comandos Úteis de Manutenção

```bash
# Visualizar logs em tempo real
docker compose logs -f

# Reiniciar apenas o servidor web Nginx
docker compose restart nginx

# Parar e remover os containers (mantendo os dados do banco)
docker compose down

# Parar e remover containers e volumes (reset completo)
docker compose down -v
```
