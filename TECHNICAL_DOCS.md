# Documentação Técnica - Evolution API v2 Node

## Arquitetura do Node

### Estrutura de Arquivos
```
n8n-nodes-evolution-api-v2/
├── credentials/
│   └── EvolutionApiApi.credentials.ts
├── nodes/
│   └── EvolutionApi/
│       ├── EvolutionApi.node.ts
│       └── evolutionApi.svg
├── package.json
├── tsconfig.json
├── gulpfile.js
├── .eslintrc.js
├── .prettierrc
├── .gitignore
├── README.md
├── EXAMPLES.md
└── TECHNICAL_DOCS.md
```

### Componentes Principais

#### 1. Credenciais (EvolutionApiApi.credentials.ts)
- **Propósito**: Configurar autenticação e conexão com a Evolution API
- **Campos**:
  - `serverUrl`: URL do servidor Evolution API
  - `apiKey`: Chave da API (opcional)
  - `instanceName`: Nome da instância (opcional)
  - `timeout`: Timeout para requisições

#### 2. Node Principal (EvolutionApi.node.ts)
- **Propósito**: Implementar todas as operações da Evolution API v2
- **Recursos**:
  - Instância: Gerenciamento de instâncias
  - Mensagem: Envio de diferentes tipos de mensagens
  - Grupo: Gerenciamento de grupos
  - Chat: Operações de chat e contatos
  - Evento: Configuração de webhooks e eventos
  - Integração: Integrações com outras plataformas

## Operações Implementadas

### Instância
| Operação | Método | Endpoint | Descrição |
|----------|--------|----------|-----------|
| createInstance | POST | `/instance/create` | Criar nova instância |
| fetchInstances | GET | `/instance/fetchInstances` | Buscar todas as instâncias |
| connectInstance | GET | `/instance/connect/{instanceName}` | Conectar instância |
| restartInstance | PUT | `/instance/restart/{instanceName}` | Reiniciar instância |
| connectionState | GET | `/instance/connectionState/{instanceName}` | Estado da conexão |
| logoutInstance | DELETE | `/instance/logout/{instanceName}` | Desconectar instância |
| deleteInstance | DELETE | `/instance/delete/{instanceName}` | Deletar instância |
| setPresence | POST | `/instance/setPresence/{instanceName}` | Definir presença |

### Mensagem
| Operação | Método | Endpoint | Descrição |
|----------|--------|----------|-----------|
| sendText | POST | `/message/sendText/{instanceName}` | Enviar texto |
| sendImage | POST | `/message/sendMedia/{instanceName}` | Enviar imagem |
| sendVideo | POST | `/message/sendMedia/{instanceName}` | Enviar vídeo |
| sendAudio | POST | `/message/sendMedia/{instanceName}` | Enviar áudio |
| sendDocument | POST | `/message/sendMedia/{instanceName}` | Enviar documento |
| sendPoll | POST | `/message/sendPoll/{instanceName}` | Enviar enquete |
| sendContact | POST | `/message/sendContact/{instanceName}` | Enviar contato |
| sendList | POST | `/message/sendList/{instanceName}` | Enviar lista |
| sendButton | POST | `/message/sendButton/{instanceName}` | Enviar botão |
| sendPix | POST | `/message/sendPix/{instanceName}` | Enviar PIX |
| sendStatus | POST | `/message/sendStatus/{instanceName}` | Enviar status |
| sendReaction | POST | `/message/sendReaction/{instanceName}` | Reagir a mensagem |

### Grupo
| Operação | Método | Endpoint | Descrição |
|----------|--------|----------|-----------|
| createGroup | POST | `/group/create/{instanceName}` | Criar grupo |
| updateGroupPicture | POST | `/group/updateGroupPicture/{instanceName}` | Atualizar imagem |
| updateGroupSubject | POST | `/group/updateGroupSubject/{instanceName}` | Atualizar nome |
| updateGroupDescription | POST | `/group/updateGroupDescription/{instanceName}` | Atualizar descrição |
| updateGroupSetting | POST | `/group/updateGroupSetting/{instanceName}` | Atualizar configurações |
| updateGroupMembers | POST | `/group/updateGroupMembers/{instanceName}` | Atualizar membros |
| fetchInviteCode | GET | `/group/fetchInviteCode/{instanceName}/{groupId}` | Buscar link convite |
| revokeInviteCode | POST | `/group/revokeInviteCode/{instanceName}` | Revogar link convite |
| sendGroupInvite | POST | `/group/sendGroupInvite/{instanceName}` | Enviar convite |
| findGroupMembers | GET | `/group/findGroupMembers/{instanceName}/{groupId}` | Buscar membros |
| toggleEphemeral | POST | `/group/toggleEphemeral/{instanceName}` | Mensagens temporárias |
| leaveGroup | DELETE | `/group/leaveGroup/{instanceName}` | Sair do grupo |

### Chat
| Operação | Método | Endpoint | Descrição |
|----------|--------|----------|-----------|
| checkIsWhatsApp | POST | `/chat/findChat/{instanceName}` | Verificar número |
| markMessageAsRead | POST | `/chat/markMessageAsRead/{instanceName}` | Marcar como lida |
| archiveChat | POST | `/chat/archiveChat/{instanceName}` | Arquivar chat |
| markMessageAsUnread | POST | `/chat/markMessageAsUnread/{instanceName}` | Marcar como não lida |
| deleteMessage | DELETE | `/chat/deleteMessage/{instanceName}` | Deletar mensagem |
| fetchProfilePictureUrl | POST | `/chat/fetchProfilePictureUrl/{instanceName}` | Buscar foto perfil |
| getBase64 | POST | `/chat/getBase64/{instanceName}` | Obter mídia base64 |
| updateMessage | POST | `/chat/updateMessage/{instanceName}` | Editar mensagem |
| sendPresence | POST | `/chat/sendPresence/{instanceName}` | Enviar presença |
| updateBlockStatus | POST | `/chat/updateBlockStatus/{instanceName}` | Bloquear contato |
| findContacts | POST | `/chat/findContacts/{instanceName}` | Buscar contatos |
| findMessages | POST | `/chat/findMessages/{instanceName}` | Procurar mensagens |
| findStatusMessage | POST | `/chat/findStatusMessage/{instanceName}` | Procurar status |
| findChats | POST | `/chat/findChats/{instanceName}` | Procurar chats |

## Estrutura de Dados

### Parâmetros Comuns
```typescript
interface CommonParams {
  instanceName: string;
  number?: string;
  groupId?: string;
}
```

### Parâmetros de Mensagem
```typescript
interface MessageParams {
  number: string;
  textMessage?: { text: string };
  mediaMessage?: {
    mediatype: 'image' | 'video' | 'audio' | 'document';
    media: string;
    caption?: string;
    fileName?: string;
  };
  pollMessage?: {
    name: string;
    options: string[];
    selectableCount: number;
  };
  contactMessage?: {
    fullName: string;
    organization?: string;
    phones: string[];
    emails?: string[];
  };
}
```

### Parâmetros de Grupo
```typescript
interface GroupParams {
  subject: string;
  participants: string[];
  description?: string;
  picture?: string;
}
```

## Tratamento de Erros

### Tipos de Erro Comuns
1. **Erro de Conexão**: Servidor Evolution API não disponível
2. **Erro de Autenticação**: API Key inválida ou instância não autorizada
3. **Erro de Validação**: Parâmetros inválidos ou obrigatórios ausentes
4. **Erro de Rate Limiting**: Muitas requisições em pouco tempo

### Estratégias de Tratamento
```typescript
try {
  const response = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
    method: 'POST',
    url: `/message/sendText/${instanceName}`,
    body: { number, textMessage: { text: messageText } },
  });
  return response;
} catch (error) {
  if (this.continueOnFail()) {
    return { error: error.message };
  }
  throw error;
}
```

## Configuração de Build

### TypeScript
- **Target**: ES2019
- **Module**: CommonJS
- **Strict**: true
- **OutDir**: ./dist/

### Gulp Tasks
- **build:icons**: Otimiza e combina ícones SVG
- **build**: Compila TypeScript e constrói ícones

### ESLint
- **Parser**: @typescript-eslint/parser
- **Rules**: Configurações específicas para TypeScript
- **Ignore**: dist/ e node_modules/

## Testes e Validação

### Testes Manuais
1. **Configuração de Credenciais**: Verificar conexão com servidor
2. **Criação de Instância**: Testar criação e conexão
3. **Envio de Mensagens**: Validar diferentes tipos de mensagem
4. **Gerenciamento de Grupos**: Testar operações de grupo
5. **Webhooks**: Verificar recebimento de eventos

### Validação de Parâmetros
```typescript
// Validar número de telefone
const validatePhoneNumber = (number: string): boolean => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(number.replace(/\D/g, ''));
};

// Validar URL
const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
```

## Performance e Otimização

### Estratégias de Performance
1. **Reutilização de Conexões**: Manter conexões HTTP ativas
2. **Cache de Instâncias**: Cachear dados de instâncias frequentemente usadas
3. **Batch Operations**: Agrupar operações quando possível
4. **Async/Await**: Usar operações assíncronas adequadamente

### Monitoramento
- **Logs de Requisição**: Registrar todas as operações
- **Métricas de Performance**: Tempo de resposta e taxa de sucesso
- **Alertas de Erro**: Notificações para falhas críticas

## Segurança

### Boas Práticas
1. **Validação de Entrada**: Validar todos os parâmetros de entrada
2. **Sanitização**: Limpar dados antes de enviar para API
3. **Rate Limiting**: Implementar limites de requisição
4. **Logs Seguros**: Não logar informações sensíveis

### Configurações de Segurança
```typescript
// Headers de segurança
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
};
```

## Compatibilidade

### Versões Suportadas
- **Evolution API**: v2.x
- **Node.js**: >= 14.0.0
- **TypeScript**: >= 4.6.4
- **N8N**: >= 0.125.0

### Navegadores Suportados
- Chrome >= 80
- Firefox >= 75
- Safari >= 13
- Edge >= 80

## Roadmap

### Próximas Funcionalidades
1. **Suporte a Múltiplas Instâncias**: Gerenciamento simultâneo
2. **Templates de Mensagem**: Templates pré-definidos
3. **Scheduler**: Agendamento de mensagens
4. **Analytics**: Métricas e relatórios
5. **Webhook Filters**: Filtros avançados para webhooks

### Melhorias Planejadas
1. **Cache Inteligente**: Cache baseado em tempo de vida
2. **Retry Logic**: Lógica de retry automático
3. **Bulk Operations**: Operações em lote
4. **Real-time Updates**: Atualizações em tempo real
5. **Advanced Error Handling**: Tratamento de erro mais robusto 