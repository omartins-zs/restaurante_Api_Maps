# ==============================================================================
# Stage 1: Build da Aplicação React (Create React App)
# ==============================================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Compatibilidade OpenSSL para Webpack 4 / react-scripts 3.4.1
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV GENERATE_SOURCEMAP=false

# Copia manifestos primeiro para máximo aproveitamento de cache de camadas Docker
COPY package.json yarn.lock* package-lock.json* ./

# Instala dependências com cache otimizado
RUN npm install --legacy-peer-deps --no-audit --no-fund

# Copia código-fonte e realiza o build de produção
COPY . .

ARG REACT_APP_GOOGLE_API_KEY=""
ENV REACT_APP_GOOGLE_API_KEY=${REACT_APP_GOOGLE_API_KEY}

RUN npm run build

# ==============================================================================
# Stage 2: Runtime leve para servir e compartilhar artefatos otimizados
# ==============================================================================
FROM alpine:3.19 AS app_runtime

WORKDIR /var/www/html

RUN apk add --no-cache bash tzdata

COPY --from=builder /app/build /var/www/html/build
COPY docker/scripts/start-app.sh /usr/local/bin/start-app.sh
RUN chmod +x /usr/local/bin/start-app.sh

CMD ["/usr/local/bin/start-app.sh"]
