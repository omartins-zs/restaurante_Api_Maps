#!/usr/bin/env bash
set -e

echo "============================================================"
echo " Restaurant Finder Maps - Container App Inicializado"
echo "============================================================"

mkdir -p /var/www/shared_public
if [ -d "/var/www/html/build" ]; then
  cp -rf /var/www/html/build/* /var/www/shared_public/ 2>/dev/null || true
  echo "[OK] Artefatos estáticos de produção sincronizados com Nginx."
fi

echo "[OK] Aplicação pronta em http://localhost:8080"
tail -f /dev/null
