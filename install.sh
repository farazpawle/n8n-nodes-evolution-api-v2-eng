#!/bin/bash

echo "🚀 Instalando N8N Community Node - Evolution API v2"

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale o Node.js primeiro."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado. Por favor, instale o npm primeiro."
    exit 1
fi

echo "📦 Instalando dependências..."
npm install

echo "🔨 Compilando o projeto..."
npm run build

echo "✅ Instalação concluída!"
echo ""
echo "📋 Próximos passos:"
echo "1. Copie a pasta 'dist' para o diretório de community nodes do seu N8N"
echo "2. Reinicie o N8N"
echo "3. Configure as credenciais da Evolution API"
echo "4. Comece a usar o node!"
echo ""
echo "📖 Para mais informações, consulte o README.md" 