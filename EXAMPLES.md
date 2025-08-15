# Usage Examples - Evolution API v2 Node

## Initial Setup

### 1. Configure Credentials
First, configure the Evolution API credentials:
- **Server URL**: Your Evolution API server URL (e.g., `http://localhost:8080`)
- **API Key**: API key (if needed)
- **Instance Name**: Instance name (optional)
- **Timeout**: Request timeout (default: 30000ms)

### 2. Create Instance
```json
{
  "resource": "instance",
  "operation": "createInstance",
  "instanceName": "my-instance",
  "instanceData": "{\"webhook\": \"https://my-webhook.com\", \"webhookByEvents\": true}"
}
```

### 3. Connect Instance
```json
{
  "resource": "instance",
  "operation": "connectInstance",
  "instanceName": "my-instance"
}
```

## Message Sending

### Send Simple Text
```json
{
  "resource": "message",
  "operation": "sendText",
  "instanceName": "my-instance",
  "number": "5511999999999",
  "messageText": "Hello! This is a test message."
}
```

### Send Image
```json
{
  "resource": "message",
  "operation": "sendImage",
  "instanceName": "my-instance",
  "number": "5511999999999",
  "imageUrl": "https://example.com/image.jpg",
  "caption": "Image caption"
}
```

### Send Document
```json
{
  "resource": "message",
  "operation": "sendDocument",
  "instanceName": "my-instance",
  "number": "5511999999999",
  "documentUrl": "https://example.com/document.pdf",
  "fileName": "document.pdf",
  "caption": "Here is the document"
}
```

## Group Management

### Create Group
```json
{
  "resource": "group",
  "operation": "createGroup",
  "instanceName": "my-instance",
  "subject": "Group Name",
  "participants": ["5511999999999", "5511888888888"]
}
```

### Find Group Members
```json
{
  "resource": "group",
  "operation": "findGroupMembers",
  "instanceName": "my-instance",
  "groupId": "123456789@group"
}
```

## Chat Management

### Check Number
```json
{
  "resource": "chat",
  "operation": "checkIsWhatsApp",
  "instanceName": "my-instance",
  "number": "5511999999999"
}
```

### Mark Message as Read
```json
{
  "resource": "chat",
  "operation": "markMessageAsRead",
  "instanceName": "my-instance",
  "messageId": "message-id-here"
}
```

## Webhook Configuration

### Configure Webhook
```json
{
  "resource": "event",
  "operation": "webhook",
  "instanceName": "my-instance",
  "webhookUrl": "https://my-webhook.com/evolution",
  "events": ["messages.upsert", "messages.update", "groups.upsert"]
}
```

## Integrations

### Configure Chatwoot
```json
{
  "resource": "integration",
  "operation": "chatwoot",
  "instanceName": "my-instance",
  "chatwootUrl": "https://my-chatwoot.com",
  "apiToken": "your-api-token"
}
```

## Common Workflows

### 1. Customer Service Automation
1. **Webhook Trigger**: Receive messages
2. **Check Number**: Confirm if it's WhatsApp
3. **Process Message**: Business logic
4. **Send Response**: Automatic response

### 2. Message Broadcasting
1. **Number List**: Array of recipients
2. **Loop**: For each number
3. **Send Message**: Personalized sending
4. **Delay**: Wait between sends

### 3. Group Monitoring
1. **Webhook**: Group events
2. **Filter Events**: Only relevant events
3. **Notification**: Alerts for administrators

## Usage Tips

1. **Always use try-catch** to handle errors
2. **Implement delays** between operations to avoid rate limiting
3. **Validate numbers** before sending messages
4. **Use webhooks** to receive real-time events
5. **Keep logs** of operations for debugging

## Troubleshooting

### Connection Error
- Check if Evolution API server is running
- Confirm server URL in credentials
- Verify if instance is connected

### Authentication Error
- Check if API Key is correct
- Confirm if instance exists
- Verify instance permissions

### Messages Not Sent
- Check if number format is correct
- Confirm if instance is connected
- Verify if number is valid WhatsApp 