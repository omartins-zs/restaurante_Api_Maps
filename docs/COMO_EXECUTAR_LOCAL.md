# 💻 Como Executar Localmente (Laragon / Node.js)

Este guia detalha o passo a passo para configurar e iniciar o **Restaurant Finder (Google Maps & Places API)** diretamente no seu sistema operacional utilizando **Node.js / NPM** e o ecossistema **Laragon**.

---

## 🛠️ 1. Ambiente de Referência

A tabela abaixo apresenta as versões das ferramentas utilizadas e homologadas no ambiente de desenvolvimento padrão:

| Ferramenta / Tecnologia | Versão de Referência | Papel no Ambiente |
| :--- | :--- | :--- |
| **Laragon** | `6.0.0` | Orquestrador de serviços locais (MySQL / Apache / Nginx) |
| **PHP** | `8.4.6` | Runtime de suporte do ecossistema local |
| **Composer** | `2.8.12` | Gerenciador de pacotes backend do ambiente |
| **Laravel** | `13.15.0` | Ecossistema de referência da suíte de projetos |
| **Node.js** | `22.14.0+` | Runtime JavaScript para compilação do frontend React |
| **NPM** | `11.4.2+` | Gerenciador de dependências JavaScript |
| **MySQL (Laragon)** | `8.0+` | Banco de dados relacional local na porta `3307` |

---

## 📋 2. Passo a Passo para Execução Local

### Passo 1: Clonar o Repositório
```bash
git clone https://github.com/gabriel-martins-dev/restaurante_Api_Maps.git
cd restaurante_Api_Maps
```

### Passo 2: Configurar o Arquivo `.env`
Copie o arquivo de exemplo caso o `.env` ainda não exista:
```bash
cp .env.example .env
```

Certifique-se de que o bloco **`# LOCAL`** esteja descomentado e ativo no arquivo `.env`:
```env
APP_URL=http://localhost:3000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=restaurante_maps
DB_USERNAME=root
DB_PASSWORD=
```

*(Opcional)* Se você possuir uma chave válida do Google Maps JavaScript API + Places API, preencha:
```env
REACT_APP_GOOGLE_API_KEY=sua_chave_google_aqui
```
Caso deixe em branco, o sistema carregará automaticamente o **Modo Demonstração** com dados simulados realistas.

### Passo 3: Instalar as Dependências
Como o projeto utiliza `react-scripts 3.4.1`, execute a instalação com a flag `--legacy-peer-deps` em versões modernas do NPM (v11+):
```bash
npm install --legacy-peer-deps
```

### Passo 4: Iniciar o Servidor de Desenvolvimento
Em versões do **Node.js 17+ / 20+ / 22+**, o Webpack 4 do Create React App requer a flag `--openssl-legacy-provider`:

**No PowerShell (Windows):**
```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start
```

**No Bash / Linux / macOS / Git Bash:**
```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

### Passo 5: Acessar a Aplicação
Abra o navegador em:
- **URL Local:** [http://localhost:3000](http://localhost:3000)

Para credenciais de login em 1 clique e roteiro completo de validação, consulte [🔐 `docs/ACESSOS_TESTES.md`](./ACESSOS_TESTES.md).
