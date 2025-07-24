#!/bin/bash

echo "🚀 Iniciando execução do Cypress"
npx cypress run

echo "📁 Verificando se o relatório foi gerado"
if [ -f cypress/reports/mochawesome.html ]; then
  cp cypress/reports/index.html /var/www/html/index.html
  echo "✅ Relatório copiado para /var/www/html/index.html"
else
  echo "⚠️  Relatório não encontrado"
fi

echo "🌐 Iniciando Nginx na porta 95"
nginx -g 'daemon off;'
