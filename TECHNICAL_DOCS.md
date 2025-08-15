# Technical Documentation - Evolution API v2 Node

## Node Architecture

### File Structure
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

### Main Components

#### 1. Credentials (EvolutionApiApi.credentials.ts)
- **Purpose**: Configure authentication and connection with Evolution API
- **Fields**:
  - `serverUrl`: Evolution API server URL
  - `apiKey`: API key (optional)
  - `instanceName`: Instance name (optional)
  - `timeout`: Request timeout

#### 2. Main Node (EvolutionApi.node.ts)
- **Purpose**: Implement all Evolution API v2 operations
- **Resources**:
  - Instance: Instance management
  - Message: Sending different types of messages
  - Group: Group management
  - Chat: Chat and contact operations
  - Event: Webhook and event configuration
  - Integration: Integrations with other platforms

## Implemented Operations

### Instance
| Operation | Method | Endpoint | Description |
|----------|--------|----------|-----------|
| createInstance | POST | `/instance/create` | Create new instance |
| fetchInstances | GET | `/instance/fetchInstances` | Fetch all instances |
| connectInstance | GET | `/instance/connect/{instanceName}` | Connect instance |
| restartInstance | PUT | `/instance/restart/{instanceName}` | Restart instance |
| connectionState | GET | `/instance/connectionState/{instanceName}` | Connection state |
| logoutInstance | DELETE | `/instance/logout/{instanceName}` | Disconnect instance |
| deleteInstance | DELETE | `/instance/delete/{instanceName}` | Delete instance |
| setPresence | POST | `/instance/setPresence/{instanceName}` | Set presence |

### Message
| Operation | Method | Endpoint | Description |
|----------|--------|----------|-----------|
| sendText | POST | `/message/sendText/{instanceName}` | Send text |
| sendImage | POST | `/message/sendMedia/{instanceName}` | Send image |
| sendVideo | POST | `/message/sendMedia/{instanceName}` | Send video |
| sendAudio | POST | `/message/sendMedia/{instanceName}` | Send audio |
| sendDocument | POST | `/message/sendMedia/{instanceName}` | Send document |
| sendPoll | POST | `/message/sendPoll/{instanceName}` | Send poll |
| sendContact | POST | `/message/sendContact/{instanceName}` | Send contact |
| sendList | POST | `/message/sendList/{instanceName}` | Send list |
| sendButton | POST | `/message/sendButton/{instanceName}` | Send button |
| sendPix | POST | `/message/sendPix/{instanceName}` | Send PIX |
| sendStatus | POST | `/message/sendStatus/{instanceName}` | Send status |
| sendReaction | POST | `/message/sendReaction/{instanceName}` | React to message |

### Group
| Operação | Método | Endpoint | Descrição |
|----------|--------|----------|-----------|
| createGroup | POST | `/group/create/{instanceName}` | Criar grupo |
| updateGroupPicture | POST | `/group/updateGroupPicture/{instanceName}` | Atualizar imagem |
| updateGroupSubject | POST | `/group/updateGroupSubject/{instanceName}` | Update name |
| updateGroupDescription | POST | `/group/updateGroupDescription/{instanceName}` | Update description |
| updateGroupSetting | POST | `/group/updateGroupSetting/{instanceName}` | Update settings |
| updateGroupMembers | POST | `/group/updateGroupMembers/{instanceName}` | Update members |
| fetchInviteCode | GET | `/group/fetchInviteCode/{instanceName}/{groupId}` | Fetch invite link |
| revokeInviteCode | POST | `/group/revokeInviteCode/{instanceName}` | Revoke invite link |
| sendGroupInvite | POST | `/group/sendGroupInvite/{instanceName}` | Send invite |
| findGroupMembers | GET | `/group/findGroupMembers/{instanceName}/{groupId}` | Find members |
| toggleEphemeral | POST | `/group/toggleEphemeral/{instanceName}` | Temporary messages |
| leaveGroup | DELETE | `/group/leaveGroup/{instanceName}` | Leave group |

### Chat
| Operation | Method | Endpoint | Description |
|----------|--------|----------|-----------|
| checkIsWhatsApp | POST | `/chat/findChat/{instanceName}` | Check number |
| markMessageAsRead | POST | `/chat/markMessageAsRead/{instanceName}` | Mark as read |
| archiveChat | POST | `/chat/archiveChat/{instanceName}` | Archive chat |
| markMessageAsUnread | POST | `/chat/markMessageAsUnread/{instanceName}` | Mark as unread |
| deleteMessage | DELETE | `/chat/deleteMessage/{instanceName}` | Delete message |
| fetchProfilePictureUrl | POST | `/chat/fetchProfilePictureUrl/{instanceName}` | Fetch profile picture |
| getBase64 | POST | `/chat/getBase64/{instanceName}` | Get media base64 |
| updateMessage | POST | `/chat/updateMessage/{instanceName}` | Edit message |
| sendPresence | POST | `/chat/sendPresence/{instanceName}` | Send presence |
| updateBlockStatus | POST | `/chat/updateBlockStatus/{instanceName}` | Block contact |
| findContacts | POST | `/chat/findContacts/{instanceName}` | Find contacts |
| findMessages | POST | `/chat/findMessages/{instanceName}` | Search messages |
| findStatusMessage | POST | `/chat/findStatusMessage/{instanceName}` | Search status |
| findChats | POST | `/chat/findChats/{instanceName}` | Search chats |

## Data Structure

### Common Parameters
```typescript
interface CommonParams {
  instanceName: string;
  number?: string;
  groupId?: string;
}
```

### Message Parameters
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

### Group Parameters
```typescript
interface GroupParams {
  subject: string;
  participants: string[];
  description?: string;
  picture?: string;
}
```

## Error Handling

### Common Error Types
1. **Connection Error**: Evolution API server not available
2. **Authentication Error**: Invalid API Key or unauthorized instance
3. **Validation Error**: Invalid or missing required parameters
4. **Rate Limiting Error**: Too many requests in short time

### Handling Strategies
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

## Build Configuration

### TypeScript
- **Target**: ES2019
- **Module**: CommonJS
- **Strict**: true
- **OutDir**: ./dist/

### Gulp Tasks
- **build:icons**: Optimizes and combines SVG icons
- **build**: Compiles TypeScript and builds icons

### ESLint
- **Parser**: @typescript-eslint/parser
- **Rules**: TypeScript-specific settings
- **Ignore**: dist/ and node_modules/

## Testing and Validation

### Manual Testing
1. **Credential Setup**: Verify server connection
2. **Instance Creation**: Test creation and connection
3. **Message Sending**: Validate different message types
4. **Group Management**: Test group operations
5. **Webhooks**: Verify event reception

### Parameter Validation
```typescript
// Validate phone number
const validatePhoneNumber = (number: string): boolean => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(number.replace(/\D/g, ''));
};

// Validate URL
const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
```

## Performance and Optimization

### Performance Strategies
1. **Connection Reuse**: Keep HTTP connections active
2. **Instance Caching**: Cache frequently used instance data
3. **Batch Operations**: Group operations when possible
4. **Async/Await**: Use asynchronous operations properly

### Monitoring
- **Request Logs**: Log all operations
- **Performance Metrics**: Response time and success rate
- **Error Alerts**: Notifications for critical failures

## Security

### Best Practices
1. **Input Validation**: Validate all input parameters
2. **Sanitization**: Clean data before sending to API
3. **Rate Limiting**: Implement request limits
4. **Secure Logs**: Don't log sensitive information

### Security Settings
```typescript
// Security headers
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
};
```

## Compatibility

### Supported Versions
- **Evolution API**: v2.x
- **Node.js**: >= 14.0.0
- **TypeScript**: >= 4.6.4
- **N8N**: >= 0.125.0

### Supported Browsers
- Chrome >= 80
- Firefox >= 75
- Safari >= 13
- Edge >= 80

## Roadmap

### Upcoming Features
1. **Multi-Instance Support**: Simultaneous management
2. **Message Templates**: Pre-defined templates
3. **Scheduler**: Message scheduling
4. **Analytics**: Metrics and reports
5. **Webhook Filters**: Advanced webhook filters

### Planned Improvements
1. **Smart Cache**: Time-based cache
2. **Retry Logic**: Automatic retry logic
3. **Bulk Operations**: Batch operations
4. **Real-time Updates**: Real-time updates
5. **Advanced Error Handling**: More robust error handling 