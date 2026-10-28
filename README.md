<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="55" height="55" alt="React" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="55" height="55" alt="Redux" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="55" height="55" alt="JavaScript" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="55" height="55" alt="Google Maps API" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="55" height="55" alt="Docker" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" width="55" height="55" alt="Nginx" />

  <h1>🍽️ Restaurant Finder — Google Maps & Places API</h1>

  <p>
    <img src="https://img.shields.io/badge/React-16.13.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Redux-4.1.1-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
    <img src="https://img.shields.io/badge/Styled_Components-5.3.0-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components" />
    <img src="https://img.shields.io/badge/Google_Maps_API-Places-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white" alt="Google Maps" />
    <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
    <img src="https://img.shields.io/badge/Nginx-1.25-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx" />
    <img src="https://img.shields.io/badge/Status-Concluído-10B981?style=for-the-badge" alt="Status" />
  </p>

  <p>
    <cite>"Uma plataforma interativa de geolocalização e descoberta gastronômica com integração ao Google Maps & Places API, gerenciamento de estado global com Redux e fallback inteligente de demonstração."</cite>
  </p>
</div>

---

## 📊 Status do Projeto

> ✅ **Concluído, Refatorado e Dockerizado** — Pronto para execução imediata em ambiente **Local** (`localhost:3000`) ou **Docker Compose** (`localhost:8080`) com **Modo Demonstração Inteligente** (funciona 100% mesmo sem chave de faturamento da API do Google Maps).

---

## 🏛️ Arquitetura da Solução

A aplicação adota uma arquitetura modular baseada em componentes reutilizáveis e fluxo unidirecional de dados com **Redux**:

1. **Camada de Autenticação e Sessão (`src/pages/Login` & `src/App.js`):** Gerencia perfis de acesso com preenchimento rápido em 1 clique e persistência em `localStorage`.
2. **Camada de Apresentação (`src/pages/Home` & `src/components`):** Interface dividida entre barra lateral de pesquisa, carrossel de destaques (`react-slick`), cartões de avaliação (`RestaurantCard`) e modal de detalhes com Portal React (`Modal`).
3. **Camada de Geolocalização e Fallback (`src/components/Map` & `src/mocks/restaurantsMock.js`):** Consome os serviços `nearbySearch`, `textSearch` e `getDetails` da biblioteca Google Places API quando `REACT_APP_GOOGLE_API_KEY` está configurada, ou aciona automaticamente o motor de dados simulados interativos quando executada offline/sem chave.
4. **Camada de Estado Global (`src/redux/modules/restaurants.js`):** Centraliza a lista de estabelecimentos (`restaurants`) e o restaurante inspecionado (`restaurantSelected`).
5. **Camada de Infraestrutura Containerizada (`Dockerfile` + `docker-compose.yml`):** Build multi-stage em `node:20-alpine` com artefatos servidos por **Nginx** (`8080:80`) com Gzip, cache de estáticos, endpoint `/api/health`, acompanhado de **MySQL 8.0** (`3308:3306`) e **phpMyAdmin** (`8085:80`).

---

## ⚙️ Pré-requisitos e Ambiente de Referência

| Ferramenta / Tecnologia | Versão de Referência | Finalidade |
| :--- | :--- | :--- |
| **Laragon** | `6.0.0` | Ambiente de serviços locais no Windows |
| **PHP** | `8.4.6` | Runtime de suporte do ambiente local |
| **Composer** | `2.8.12` | Gerenciador de pacotes do ecossistema local |
| **Laravel** | `13.15.0` | Framework de referência da suíte local |
| **Node.js** | `22.14.0+` | Ambiente de execução JavaScript |
| **NPM** | `11.4.2+` | Gerenciador de pacotes Node |
| **Docker & Docker Compose** | `24.0+` / `v2+` | Execução containerizada padronizada |

---

## 🚀 Tecnologias Utilizadas

- **React 16.13.1** (Hooks: `useState`, `useEffect`, `useCallback`, `useSelector`, `useDispatch`)
- **Redux 4.1.1 & React-Redux 7.2.4** (Gerenciamento de estado previsível via Duck Pattern)
- **Google Maps React 2.0.6** (Integração com Maps JavaScript API e Places Service)
- **Styled-Components 5.3.0 & Styled-Reset** (Estilização CSS-in-JS tematizada)
- **Material-UI Core & Material React Text Field / Icons** (Inputs e ícones seguidos do Material Design)
- **React Slick & Slick Carousel** (Carrossel responsivo de restaurantes próximos)
- **React Rating Stars Component** (Renderização visual da nota de avaliação de 0 a 5 estrelas)
- **React Lottie** (Animações vetoriais fluidas durante estados de carregamento)
- **Docker, Nginx 1.25 Alpine, MySQL 8.0 & phpMyAdmin** (Infraestrutura completa de containers)

---

## ✨ Funcionalidades Reais do Sistema

- 🔐 **Login com Perfis de Demonstração em 1 Clique:** Três perfis pré-configurados (*Administrador*, *Gestor Gastronômico* e *Cliente Visitante*) que preenchem e-mail e senha automaticamente na tela de login.
- 🧭 **Barra Superior de Sessão Ativa:** Exibe o nome do usuário autenticado, e-mail, badge colorida de perfil e botão de encerramento de sessão (*Sair da Conta*).
- 🗺️ **Integração Híbrida com Google Maps & Places API:** Busca automática por raio de proximidade (`nearbySearch`), busca textual (`textSearch`) e consulta de detalhes (`getDetails`).
- 🛡️ **Fallback Inteligente para Modo Demonstração (Zero Config):** Caso `REACT_APP_GOOGLE_API_KEY` não seja informada ou falhe, o sistema carrega instantaneamente 6 restaurantes simulados realistas em São Paulo - SP, eliminando qualquer travamento de tela e permitindo testar 100% dos recursos.
- 🔍 **Pesquisa em Tempo Real:** Filtragem por nome do restaurante, endereço/bairro ou especialidade gastronômica pressionando `Enter` ou clicando no botão de busca.
- 🎠 **Carrossel "Na sua Área":** Exibição horizontal interativa com miniaturas fotográficas dos restaurantes encontrados.
- 📋 **Modal de Detalhes via React Portal:** Ao clicar em um cartão da lista lateral ou em um marcador do painel de mapa, exibe telefone formatado, endereço completo e status de funcionamento (*Aberto agora :)* / *Fechado neste momento :(*).

---

## 📖 Sobre o Projeto

Desenvolvido para resolver o desafio de localizar estabelecimentos gastronômicos próximos de forma rápida e visual, o **Restaurant Finder** combina os recursos de geolocalização do **Google Maps Places API** com uma experiência de usuário fluida em **Single Page Application (SPA)**.

Além da implementação original com Redux e Styled Components, o projeto passou por uma **refatoração de resiliência e experiência de testes**: foi adicionado um fluxo completo de sessão com perfis de demonstração e um motor de contingência que garante funcionamento imediato em qualquer avaliação técnica, acompanhado de uma stack Docker pronta para produção.

---

## 🖥️ Preview da Interface

```text
+-----------------------------------------------------------------------------------+
| Olá, Admin Sistema (admin@restaurantes.com) [Administrador]       [Sair da Conta] |
+----------------------------------+------------------------------------------------+
| [ LOGO ]                         |  Mapa Interativo de Restaurantes (São Paulo)   |
| [ Pesquisar Restaurantes    🔍 ] |  [Modo Demonstração Ativo (6 locais)]          |
|                                  |                                                |
| Na sua Área                      |  +--------------------+ +--------------------+ |
| [Foto 1]   [Foto 2]   [Foto 3]   |  | 📍 Trattoria Bella | | 📍 Sushi Leblon    | |
|                                  |  | Italiana • Massas  | | Japonesa • Omakase | |
| -------------------------------- |  | ⭐ 4.8 • 🟢 Aberto | | ⭐ 4.9 • 🟢 Aberto | |
| Trattoria Bella Napoli     [IMG] |  +--------------------+ +--------------------+ |
| ⭐⭐⭐⭐⭐ (4.8)                  |  +--------------------+ +--------------------+ |
| Av. Paulista, 1450 - Bela Vista  |  | 📍 Parrilla Don    | | 📍 Bistrô Le Jardin| |
| -------------------------------- |  | Steakhouse         | | Francesa           | |
| Sushi Leblon Imperial      [IMG] |  | ⭐ 4.7 • 🟢 Aberto | | ⭐ 4.6 • 🔴 Fechado| |
| ⭐⭐⭐⭐⭐ (4.9)                  |  +--------------------+ +--------------------+ |
+----------------------------------+------------------------------------------------+
```

---

## 📚 Documentação do Projeto

Toda a documentação operacional e de testes encontra-se organizada na pasta [`docs/`](./docs):

- 📘 [**Visão Geral de Execução (`docs/COMO_EXECUTAR.md`)**](./docs/COMO_EXECUTAR.md)
- 💻 [**Como Executar Localmente (`docs/COMO_EXECUTAR_LOCAL.md`)**](./docs/COMO_EXECUTAR_LOCAL.md)
- 🐳 [**Como Executar via Docker (`docs/COMO_EXECUTAR_DOCKER.md`)**](./docs/COMO_EXECUTAR_DOCKER.md)
- 🔐 [**Acessos, Credenciais e Roteiro de Testes (`docs/ACESSOS_TESTES.md`)**](./docs/ACESSOS_TESTES.md)

---

## ⚡ Comandos Rápidos

> ⚠️ **AVISO IMPORTANTE:** Antes de iniciar a aplicação, verifique no arquivo `.env` qual bloco está descomentado (`# LOCAL` para rodar nativamente na porta `3000` ou `# DOCKER` para rodar via containers na porta `8080`).

### Execução Local (Node.js)
```bash
# 1. Copiar variáveis de ambiente (bloco # LOCAL já vem ativo por padrão)
cp .env.example .env

# 2. Instalar dependências
npm install --legacy-peer-deps

# 3. Iniciar servidor de desenvolvimento (Node 18/20/22+)
NODE_OPTIONS=--openssl-legacy-provider npm start
```

### Execução via Docker Compose
```bash
# 1. Subir todos os containers em background realizando o build otimizado
docker compose up -d --build

# 2. Verificar status dos containers (app, nginx, mysql, phpmyadmin)
docker compose ps

# 3. Encerrar os containers
docker compose down
```

---

## 📂 Estrutura do Projeto

```text
restaurante_Api_Maps/
├── docker/
│   ├── nginx/
│   │   └── default.conf          # Configuração Nginx (Gzip, cache, SPA, /api/health)
│   └── scripts/
│       └── start-app.sh          # Script de sincronização do build React com Nginx
├── docs/
│   ├── ACESSOS_TESTES.md         # Credenciais de login, portas e roteiro de testes
│   ├── COMO_EXECUTAR.md          # Índice geral de execução (Local vs Docker)
│   ├── COMO_EXECUTAR_DOCKER.md   # Guia detalhado de execução com Docker Compose
│   └── COMO_EXECUTAR_LOCAL.md    # Guia detalhado de execução local (Laragon / Node)
├── public/
│   ├── index.html                # Template HTML principal e portal do modal (#modal-root)
│   └── manifest.json             # Manifesto da aplicação web
├── src/
│   ├── assets/                   # Logotipo, imagem padrão e animação Lottie
│   ├── components/
│   │   ├── ImageCard/            # Cartão fotográfico exibido no carrossel
│   │   ├── ImageSkeleton/        # Placeholder animado durante carregamento de imagens
│   │   ├── Loader/               # Animação Lottie de carregamento
│   │   ├── Map/                  # Integração Google Maps + Fallback Inteligente
│   │   ├── Modal/                # Modal de detalhes renderizado via React Portal
│   │   ├── RestaurantCard/       # Cartão lateral com estrelas de avaliação e foto
│   │   └── Text/                 # Tipografia padronizada com Styled Components
│   ├── mocks/
│   │   └── restaurantsMock.js    # Perfis de demonstração e restaurantes simulados
│   ├── pages/
│   │   ├── Home/                 # Tela principal (Barra de sessão, busca, lista e mapa)
│   │   └── Login/                # Tela de autenticação com preenchimento em 1 clique
│   ├── redux/
│   │   ├── modules/              # Duck pattern (actions + reducer de restaurantes)
│   │   ├── reducers/             # CombineReducers global
│   │   └── store.js              # Store do Redux
│   ├── App.js                    # Controle de sessão e ThemeProvider global
│   ├── index.js                  # Ponto de entrada React + Provider Redux
│   └── theme.js                  # Paleta de cores e tipografia do tema
├── .dockerignore                 # Exclusão de arquivos desnecessários no build Docker
├── .env.example                  # Modelo de variáveis com blocos # LOCAL e # DOCKER
├── Dockerfile                    # Build multi-stage (node:20-alpine -> alpine runtime)
├── docker-compose.yml            # Orquestração (app, nginx, mysql, phpmyadmin)
├── package.json                  # Dependências e scripts NPM/Yarn
└── README.md                     # Documentação principal do projeto
```

---

## 🔮 Melhorias Futuras

- [ ] Favoritar restaurantes por perfil de usuário com sincronização em banco de dados MySQL via API REST.
- [ ] Filtro avançado por faixa de preço, nota mínima (ex.: acima de 4.5 estrelas) e distância máxima.
- [ ] Traçar rota direta entre a localização atual do usuário e o restaurante selecionado utilizando a Google Directions API.
- [ ] Alternância de tema Claro / Escuro (*Dark Mode*) persistida nas preferências da sessão.

---

<div align="center">
  <p>Feito com ❤️ por <strong>Gabriel Martins</strong> 🚀</p>
</div>
