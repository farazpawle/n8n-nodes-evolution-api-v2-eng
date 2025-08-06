# Exemplos de Uso - Evolution API v2 Node

## Configuração Inicial

### 1. Configurar Credenciais
Primeiro, configure as credenciais da Evolution API:
- **Server URL**: URL do seu servidor Evolution API (ex: `http://localhost:8080`)
- **API Key**: Chave da API (se necessário)
- **Instance Name**: Nome da instância (opcional)
- **Timeout**: Timeout para requisições (padrão: 30000ms)

### 2. Criar Instância
```json
{
  "resource": "instance",
  "operation": "createInstance",
  "instanceName": "minha-instancia",
  "instanceData": "{\"webhook\": \"https://meu-webhook.com\", \"webhookByEvents\": true}"
}
```

### 3. Conectar Instância
```json
{
  "resource": "instance",
  "operation": "connectInstance",
  "instanceName": "minha-instancia"
}
```

## Envio de Mensagens

### Enviar Texto Simples
```json
{
  "resource": "message",
  "operation": "sendText",
  "instanceName": "minha-instancia",
  "number": "5511999999999",
  "messageText": "Olá! Esta é uma mensagem de teste."
}
```

### Enviar Imagem
```json
{
  "resource": "message",
  "operation": "sendImage",
  "instanceName": "minha-instancia",
  "number": "5511999999999",
  "imageUrl": "https://exemplo.com/imagem.jpg",
  "caption": "Legenda da imagem"
}
```

### Enviar Documento
```json
{
  "resource": "message",
  "operation": "sendDocument",
  "instanceName": "minha-instancia",
  "number": "5511999999999",
  "documentUrl": "https://exemplo.com/documento.pdf",
  "fileName": "documento.pdf",
  "caption": "Aqui está o documento"
}
```

## Gerenciamento de Grupos

### Criar Grupo
```json
{
  "resource": "group",
  "operation": "createGroup",
  "instanceName": "minha-instancia",
  "subject": "Nome do Grupo",
  "participants": ["5511999999999", "5511888888888"]
}
```

### Buscar Membros do Grupo
```json
{
  "resource": "group",
  "operation": "findGroupMembers",
  "instanceName": "minha-instancia",
  "groupId": "123456789@group"
}
```

## Gerenciamento de Chat

### Verificar Número
```json
{
  "resource": "chat",
  "operation": "checkIsWhatsApp",
  "instanceName": "minha-instancia",
  "number": "5511999999999"
}
```

### Marcar Mensagem como Lida
```json
{
  "resource": "chat",
  "operation": "markMessageAsRead",
  "instanceName": "minha-instancia",
  "messageId": "message-id-here"
}
```

## Configuração de Webhooks

### Configurar Webhook
```json
{
  "resource": "event",
  "operation": "webhook",
  "instanceName": "minha-instancia",
  "webhookUrl": "https://meu-webhook.com/evolution",
  "events": ["messages.upsert", "messages.update", "groups.upsert"]
}
```

## Integrações

### Configurar Chatwoot
```json
{
  "resource": "integration",
  "operation": "chatwoot",
  "instanceName": "minha-instancia",
  "chatwootUrl": "https://meu-chatwoot.com",
  "apiToken": "seu-api-token"
}
```

## Fluxos de Trabalho Comuns

### 1. Automação de Atendimento
1. **Webhook Trigger**: Receber mensagens
2. **Verificar Número**: Confirmar se é WhatsApp
3. **Processar Mensagem**: Lógica de negócio
4. **Enviar Resposta**: Resposta automática

### 2. Broadcast de Mensagens
1. **Lista de Números**: Array de destinatários
2. **Loop**: Para cada número
3. **Enviar Mensagem**: Envio personalizado
4. **Delay**: Aguardar entre envios

### 3. Monitoramento de Grupos
1. **Webhook**: Eventos de grupo
2. **Filtrar Eventos**: Apenas eventos relevantes
3. **Notificação**: Alertas para administradores

## Dicas de Uso

1. **Sempre use try-catch** para tratar erros
2. **Implemente delays** entre operações para evitar rate limiting
3. **Valide números** antes de enviar mensagens
4. **Use webhooks** para receber eventos em tempo real
5. **Mantenha logs** das operações para debug

## Troubleshooting

### Erro de Conexão
- Verifique se o servidor Evolution API está rodando
- Confirme a URL do servidor nas credenciais
- Verifique se a instância está conectada

### Erro de Autenticação
- Verifique se a API Key está correta
- Confirme se a instância existe
- Verifique permissões da instância

### Mensagens não Enviadas
- Verifique se o número está no formato correto
- Confirme se a instância está conectada
- Verifique se o número é WhatsApp válido 