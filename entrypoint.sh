#!/bin/bash

set -e

echo "🚀 Iniciando execução do Cypress"
npx cypress run

echo "📁 Verificando se o relatório foi gerado"
if [ -f "$RELATORIO_ORIGEM" ]; then
  echo "📂 Verificando diretório de destino: $DIRETORIO_DESTINO"
  if [ ! -d "$DIRETORIO_DESTINO" ]; then
    echo "📁 Diretório não existe. Criando..."
    mkdir -p "$DIRETORIO_DESTINO"
  fi

