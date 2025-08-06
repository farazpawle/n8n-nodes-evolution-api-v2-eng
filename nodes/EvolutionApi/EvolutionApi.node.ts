import { IExecuteFunctions } from 'n8n-core';
import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

export class EvolutionApi implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Evolution API',
        name: 'evolutionApi',
        icon: 'file:evolutionApi.svg',
        group: ['transform'],
        version: 2,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interagir com a Evolution API v2',
        defaults: {
            name: 'Evolution API',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'evolutionApiApi',
                required: true,
            },
        ],

        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Instância',
                        value: 'instance',
                    },
                    {
                        name: 'Mensagem',
                        value: 'message',
                    },
                    {
                        name: 'Grupo',
                        value: 'group',
                    },
                    {
                        name: 'Chat',
                        value: 'chat',
                    },
                    {
                        name: 'Evento',
                        value: 'event',
                    },
                    {
                        name: 'Integração',
                        value: 'integration',
                    },
                ],
                default: 'instance',
            },
            // Instância Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['instance'],
                    },
                },
                options: [
                    {
                        name: 'Criar Instância',
                        value: 'createInstance',
                        description: 'Criar uma nova instância',
                        action: 'Criar uma nova instância',
                    },
                    {
                        name: 'Buscar Instâncias',
                        value: 'fetchInstances',
                        description: 'Buscar todas as instâncias',
                        action: 'Buscar todas as instâncias',
                    },
                    {
                        name: 'Conectar Instância',
                        value: 'connectInstance',
                        description: 'Conectar a uma instância',
                        action: 'Conectar a uma instância',
                    },
                    {
                        name: 'Reiniciar Instância',
                        value: 'restartInstance',
                        description: 'Reiniciar uma instância',
                        action: 'Reiniciar uma instância',
                    },
                    {
                        name: 'Estado da Conexão',
                        value: 'connectionState',
                        description: 'Verificar estado da conexão',
                        action: 'Verificar estado da conexão',
                    },
                    {
                        name: 'Desconectar Instância',
                        value: 'logoutInstance',
                        description: 'Desconectar uma instância',
                        action: 'Desconectar uma instância',
                    },
                    {
                        name: 'Deletar Instância',
                        value: 'deleteInstance',
                        description: 'Deletar uma instância',
                        action: 'Deletar uma instância',
                    },
                    {
                        name: 'Definir Presença',
                        value: 'setPresence',
                        description: 'Definir presença da instância',
                        action: 'Definir presença da instância',
                    },
                ],
                default: 'createInstance',
            },
            // Mensagem Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['message'],
                    },
                },
                options: [
                    {
                        name: 'Enviar Texto',
                        value: 'sendText',
                        description: 'Enviar mensagem de texto',
                        action: 'Enviar mensagem de texto',
                    },
                    {
                        name: 'Enviar Imagem',
                        value: 'sendImage',
                        description: 'Enviar imagem',
                        action: 'Enviar imagem',
                    },
                    {
                        name: 'Enviar Vídeo',
                        value: 'sendVideo',
                        description: 'Enviar vídeo',
                        action: 'Enviar vídeo',
                    },
                    {
                        name: 'Enviar Áudio',
                        value: 'sendAudio',
                        description: 'Enviar áudio',
                        action: 'Enviar áudio',
                    },
                    {
                        name: 'Enviar Documento',
                        value: 'sendDocument',
                        description: 'Enviar documento',
                        action: 'Enviar documento',
                    },
                    {
                        name: 'Enviar Enquete',
                        value: 'sendPoll',
                        description: 'Enviar enquete',
                        action: 'Enviar enquete',
                    },
                    {
                        name: 'Enviar Contato',
                        value: 'sendContact',
                        description: 'Enviar contato',
                        action: 'Enviar contato',
                    },
                    {
                        name: 'Enviar Lista',
                        value: 'sendList',
                        description: 'Enviar lista',
                        action: 'Enviar lista',
                    },
                    {
                        name: 'Enviar Botão',
                        value: 'sendButton',
                        description: 'Enviar botão',
                        action: 'Enviar botão',
                    },
                    {
                        name: 'Enviar Pix',
                        value: 'sendPix',
                        description: 'Enviar PIX',
                        action: 'Enviar PIX',
                    },
                    {
                        name: 'Enviar Status',
                        value: 'sendStatus',
                        description: 'Enviar status',
                        action: 'Enviar status',
                    },
                    {
                        name: 'Reagir a Mensagem',
                        value: 'sendReaction',
                        description: 'Reagir a uma mensagem',
                        action: 'Reagir a uma mensagem',
                    },
                ],
                default: 'sendText',
            },
            // Grupo Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['group'],
                    },
                },
                options: [
                    {
                        name: 'Criar Grupo',
                        value: 'createGroup',
                        description: 'Criar um novo grupo',
                        action: 'Criar um novo grupo',
                    },
                    {
                        name: 'Atualizar Imagem do Grupo',
                        value: 'updateGroupPicture',
                        description: 'Atualizar imagem do grupo',
                        action: 'Atualizar imagem do grupo',
                    },
                    {
                        name: 'Atualizar Nome do Grupo',
                        value: 'updateGroupSubject',
                        description: 'Atualizar nome do grupo',
                        action: 'Atualizar nome do grupo',
                    },
                    {
                        name: 'Atualizar Descrição do Grupo',
                        value: 'updateGroupDescription',
                        description: 'Atualizar descrição do grupo',
                        action: 'Atualizar descrição do grupo',
                    },
                    {
                        name: 'Atualizar Configurações do Grupo',
                        value: 'updateGroupSetting',
                        description: 'Atualizar configurações do grupo',
                        action: 'Atualizar configurações do grupo',
                    },
                    {
                        name: 'Atualizar Membros',
                        value: 'updateGroupMembers',
                        description: 'Atualizar membros do grupo',
                        action: 'Atualizar membros do grupo',
                    },
                    {
                        name: 'Buscar Link de convite do Grupo',
                        value: 'fetchInviteCode',
                        description: 'Buscar link de convite do grupo',
                        action: 'Buscar link de convite do grupo',
                    },
                    {
                        name: 'Revogar Link de convite do Grupo',
                        value: 'revokeInviteCode',
                        description: 'Revogar link de convite do grupo',
                        action: 'Revogar link de convite do grupo',
                    },
                    {
                        name: 'Enviar Link de Convite do Grupo',
                        value: 'sendGroupInvite',
                        description: 'Enviar link de convite do grupo',
                        action: 'Enviar link de convite do grupo',
                    },
                    {
                        name: 'Encontrar Participantes',
                        value: 'findGroupMembers',
                        description: 'Encontrar participantes do grupo',
                        action: 'Encontrar participantes do grupo',
                    },
                    {
                        name: 'Mensagens Temporárias',
                        value: 'toggleEphemeral',
                        description: 'Alternar mensagens temporárias',
                        action: 'Alternar mensagens temporárias',
                    },
                    {
                        name: 'Sair do Grupo',
                        value: 'leaveGroup',
                        description: 'Sair do grupo',
                        action: 'Sair do grupo',
                    },
                ],
                default: 'createGroup',
            },
            // Chat Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['chat'],
                    },
                },
                options: [
                    {
                        name: 'Verificar Número',
                        value: 'checkIsWhatsApp',
                        description: 'Verificar se número é WhatsApp',
                        action: 'Verificar se número é WhatsApp',
                    },
                    {
                        name: 'Ler Mensagem',
                        value: 'markMessageAsRead',
                        description: 'Marcar mensagem como lida',
                        action: 'Marcar mensagem como lida',
                    },
                    {
                        name: 'Gerenciar Arquivo',
                        value: 'archiveChat',
                        description: 'Arquivar chat',
                        action: 'Arquivar chat',
                    },
                    {
                        name: 'Marcar como Não lido',
                        value: 'markMessageAsUnread',
                        description: 'Marcar mensagem como não lida',
                        action: 'Marcar mensagem como não lida',
                    },
                    {
                        name: 'Deletar Mensagem',
                        value: 'deleteMessage',
                        description: 'Deletar mensagem para todos',
                        action: 'Deletar mensagem para todos',
                    },
                    {
                        name: 'Buscar Foto de Perfil',
                        value: 'fetchProfilePictureUrl',
                        description: 'Buscar foto de perfil',
                        action: 'Buscar foto de perfil',
                    },
                    {
                        name: 'Obter Mídia em Base64',
                        value: 'getBase64',
                        description: 'Obter mídia em base64',
                        action: 'Obter mídia em base64',
                    },
                    {
                        name: 'Editar Mensagem',
                        value: 'updateMessage',
                        description: 'Editar mensagem',
                        action: 'Editar mensagem',
                    },
                    {
                        name: 'Enviar Presença',
                        value: 'sendPresence',
                        description: 'Enviar presença',
                        action: 'Enviar presença',
                    },
                    {
                        name: 'Bloquear Contato',
                        value: 'updateBlockStatus',
                        description: 'Atualizar status de bloqueio',
                        action: 'Atualizar status de bloqueio',
                    },
                    {
                        name: 'Buscar Contatos',
                        value: 'findContacts',
                        description: 'Buscar contatos',
                        action: 'Buscar contatos',
                    },
                    {
                        name: 'Procurar Mensagens',
                        value: 'findMessages',
                        description: 'Procurar mensagens',
                        action: 'Procurar mensagens',
                    },
                    {
                        name: 'Procurar Status',
                        value: 'findStatusMessage',
                        description: 'Procurar mensagens de status',
                        action: 'Procurar mensagens de status',
                    },
                    {
                        name: 'Procurar Chats',
                        value: 'findChats',
                        description: 'Procurar chats',
                        action: 'Procurar chats',
                    },
                ],
                default: 'checkIsWhatsApp',
            },
            // Evento Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['event'],
                    },
                },
                options: [
                    {
                        name: 'Webhook',
                        value: 'webhook',
                        description: 'Configurar webhook',
                        action: 'Configurar webhook',
                    },
                    {
                        name: 'RabbitMQ',
                        value: 'rabbitmq',
                        description: 'Configurar RabbitMQ',
                        action: 'Configurar RabbitMQ',
                    },
                ],
                default: 'webhook',
            },
            // Integração Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['integration'],
                    },
                },
                options: [
                    {
                        name: 'Chatwoot',
                        value: 'chatwoot',
                        description: 'Configurar Chatwoot',
                        action: 'Configurar Chatwoot',
                    },
                    {
                        name: 'Evolution Bot',
                        value: 'evolutionBot',
                        description: 'Configurar Evolution Bot',
                        action: 'Configurar Evolution Bot',
                    },
                    {
                        name: 'Typebot',
                        value: 'typebot',
                        description: 'Configurar Typebot',
                        action: 'Configurar Typebot',
                    },
                    {
                        name: 'Dify',
                        value: 'dify',
                        description: 'Configurar Dify',
                        action: 'Configurar Dify',
                    },
                    {
                        name: 'Flowise',
                        value: 'flowise',
                        description: 'Configurar Flowise',
                        action: 'Configurar Flowise',
                    },
                ],
                default: 'chatwoot',
            },
            // Common Fields
            {
                displayName: 'Instance Name',
                name: 'instanceName',
                type: 'string',
                default: '',
                description: 'Nome da instância',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['instance', 'message', 'group', 'chat', 'event', 'integration'],
                    },
                },
            },
            // Instance specific fields
            {
                displayName: 'Instance Data',
                name: 'instanceData',
                type: 'json',
                default: '{}',
                description: 'Dados da instância (JSON)',
                displayOptions: {
                    show: {
                        resource: ['instance'],
                        operation: ['createInstance'],
                    },
                },
            },
            // Message specific fields
            {
                displayName: 'Number',
                name: 'number',
                type: 'string',
                default: '',
                description: 'Número do destinatário',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['message'],
                    },
                },
            },
            {
                displayName: 'Message Text',
                name: 'messageText',
                type: 'string',
                default: '',
                description: 'Texto da mensagem',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendText'],
                    },
                },
            },
            {
                displayName: 'Image URL',
                name: 'imageUrl',
                type: 'string',
                default: '',
                description: 'URL da imagem',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendImage'],
                    },
                },
            },
            {
                displayName: 'Caption',
                name: 'caption',
                type: 'string',
                default: '',
                description: 'Legenda da imagem',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendImage'],
                    },
                },
            },
            {
                displayName: 'Video URL',
                name: 'videoUrl',
                type: 'string',
                default: '',
                description: 'URL do vídeo',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendVideo'],
                    },
                },
            },
            {
                displayName: 'Audio URL',
                name: 'audioUrl',
                type: 'string',
                default: '',
                description: 'URL do áudio',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendAudio'],
                    },
                },
            },
            {
                displayName: 'Document URL',
                name: 'documentUrl',
                type: 'string',
                default: '',
                description: 'URL do documento',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendDocument'],
                    },
                },
            },
            {
                displayName: 'Document Name',
                name: 'documentName',
                type: 'string',
                default: '',
                description: 'Nome do documento',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendDocument'],
                    },
                },
            },
            // List specific fields
            {
                displayName: 'List Title',
                name: 'listTitle',
                type: 'string',
                default: '',
                description: 'Título da lista',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendList'],
                    },
                },
            },
            {
                displayName: 'List Description',
                name: 'listDescription',
                type: 'string',
                default: '',
                description: 'Descrição da lista',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendList'],
                    },
                },
            },
            {
                displayName: 'List Button Text',
                name: 'listButtonText',
                type: 'string',
                default: 'Ver opções',
                description: 'Texto do botão da lista',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendList'],
                    },
                },
            },
            {
                displayName: 'List Sections',
                name: 'listSections',
                type: 'fixedCollection',
                typeOptions: {
                    multipleValues: true,
                },
                default: {},
                description: 'Seções da lista',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendList'],
                    },
                },
                options: [
                    {
                        displayName: 'Section',
                        name: 'section',
                        values: [
                            {
                                displayName: 'Title',
                                name: 'title',
                                type: 'string',
                                default: '',
                                description: 'Título da seção',
                            },
                            {
                                displayName: 'Rows',
                                name: 'rows',
                                type: 'fixedCollection',
                                typeOptions: {
                                    multipleValues: true,
                                },
                                default: {},
                                description: 'Linhas da seção',
                                options: [
                                    {
                                        displayName: 'Row',
                                        name: 'row',
                                        values: [
                                            {
                                                displayName: 'Title',
                                                name: 'title',
                                                type: 'string',
                                                default: '',
                                                description: 'Título da linha',
                                            },
                                            {
                                                displayName: 'Description',
                                                name: 'description',
                                                type: 'string',
                                                default: '',
                                                description: 'Descrição da linha',
                                            },
                                            {
                                                displayName: 'Row ID',
                                                name: 'rowId',
                                                type: 'string',
                                                default: '',
                                                description: 'ID da linha',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            // Button specific fields
            {
                displayName: 'Button Title',
                name: 'buttonTitle',
                type: 'string',
                default: '',
                description: 'Título dos botões',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendButton'],
                    },
                },
            },
            {
                displayName: 'Button Description',
                name: 'buttonDescription',
                type: 'string',
                default: '',
                description: 'Descrição dos botões',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendButton'],
                    },
                },
            },
            {
                displayName: 'Buttons',
                name: 'buttons',
                type: 'fixedCollection',
                typeOptions: {
                    multipleValues: true,
                },
                default: {},
                description: 'Botões',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendButton'],
                    },
                },
                options: [
                    {
                        displayName: 'Button',
                        name: 'button',
                        values: [
                            {
                                displayName: 'Button Text',
                                name: 'buttonText',
                                type: 'string',
                                default: '',
                                description: 'Texto do botão',
                            },
                            {
                                displayName: 'Button ID',
                                name: 'buttonId',
                                type: 'string',
                                default: '',
                                description: 'ID do botão',
                            },
                        ],
                    },
                ],
            },
            // Group specific fields
            {
                displayName: 'Group ID',
                name: 'groupId',
                type: 'string',
                default: '',
                description: 'ID do grupo',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['group'],
                    },
                },
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: IDataObject[] = [];

        const resource = this.getNodeParameter('resource', 0) as string;
        const operation = this.getNodeParameter('operation', 0) as string;

        for (let i = 0; i < items.length; i++) {
            try {
                let responseData: IDataObject = {};

                if (resource === 'instance') {
                    if (operation === 'createInstance') {
                        const instanceName = this.getNodeParameter('instanceName', i) as string;
                        const instanceData = this.getNodeParameter('instanceData', i) as string;

                        const body = {
                            instanceName,
                            ...JSON.parse(instanceData),
                        };

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: '/instance/create',
                            body,
                        });
                    } else if (operation === 'fetchInstances') {
                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'GET',
                            uri: '/instance/fetchInstances',
                        });
                    } else if (operation === 'connectInstance') {
                        const instanceName = this.getNodeParameter('instanceName', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'GET',
                            uri: `/instance/connect/${instanceName}`,
                        });
                    } else if (operation === 'restartInstance') {
                        const instanceName = this.getNodeParameter('instanceName', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'PUT',
                            uri: `/instance/restart/${instanceName}`,
                        });
                    } else if (operation === 'connectionState') {
                        const instanceName = this.getNodeParameter('instanceName', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'GET',
                            uri: `/instance/connectionState/${instanceName}`,
                        });
                    } else if (operation === 'logoutInstance') {
                        const instanceName = this.getNodeParameter('instanceName', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'DELETE',
                            uri: `/instance/logout/${instanceName}`,
                        });
                    } else if (operation === 'deleteInstance') {
                        const instanceName = this.getNodeParameter('instanceName', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'DELETE',
                            uri: `/instance/delete/${instanceName}`,
                        });
                    } else if (operation === 'setPresence') {
                        const instanceName = this.getNodeParameter('instanceName', i) as string;
                        const presence = this.getNodeParameter('presence', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/instance/setPresence/${instanceName}`,
                            body: { presence },
                        });
                    }
                } else if (resource === 'message') {
                    const instanceName = this.getNodeParameter('instanceName', i) as string;
                    const number = this.getNodeParameter('number', i) as string;

                    if (operation === 'sendText') {
                        const messageText = this.getNodeParameter('messageText', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/message/sendText/${instanceName}`,
                            body: {
                                number,
                                text: messageText,
                            },
                        });
                    } else if (operation === 'sendImage') {
                        const imageUrl = this.getNodeParameter('imageUrl', i) as string;
                        const caption = this.getNodeParameter('caption', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/message/sendMedia/${instanceName}`,
                            body: {
                                number,
                                mediatype: 'image',
                                media: imageUrl,
                                caption,
                            },
                        });
                    } else if (operation === 'sendVideo') {
                        const videoUrl = this.getNodeParameter('videoUrl', i) as string;
                        const caption = this.getNodeParameter('caption', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/message/sendMedia/${instanceName}`,
                            body: {
                                number,
                                mediatype: 'video',
                                media: videoUrl,
                                caption,
                            },
                        });
                    } else if (operation === 'sendAudio') {
                        const audioUrl = this.getNodeParameter('audioUrl', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/message/sendWhatsAppAudio/${instanceName}`,
                            body: {
                                number,
                                audio: audioUrl,
                            },
                        });
                    } else if (operation === 'sendDocument') {
                        const documentUrl = this.getNodeParameter('documentUrl', i) as string;
                        const documentName = this.getNodeParameter('documentName', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/message/sendMedia/${instanceName}`,
                            body: {
                                number,
                                mediatype: 'document',
                                media: documentUrl,
                                fileName: documentName,
                            },
                        });
                    } else if (operation === 'sendList') {
                        const listTitle = this.getNodeParameter('listTitle', i) as string;
                        const listDescription = this.getNodeParameter('listDescription', i) as string;
                        const listButtonText = this.getNodeParameter('listButtonText', i) as string;
                        const listSections = this.getNodeParameter('listSections', i) as any;

                        // Processar seções da lista
                        const sections = [];
                        if (listSections.section) {
                            for (const section of listSections.section) {
                                const processedSection: any = {
                                    title: section.title,
                                    rows: [],
                                };

                                if (section.rows && section.rows.row) {
                                    for (const row of section.rows.row) {
                                        processedSection.rows.push({
                                            title: row.title,
                                            description: row.description,
                                            rowId: row.rowId,
                                        });
                                    }
                                }

                                sections.push(processedSection);
                            }
                        }

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/message/sendList/${instanceName}`,
                            body: {
                                number,
                                listMessage: {
                                    title: listTitle,
                                    description: listDescription,
                                    buttonText: listButtonText,
                                    sections,
                                },
                            },
                        });
                    } else if (operation === 'sendButton') {
                        const buttonTitle = this.getNodeParameter('buttonTitle', i) as string;
                        const buttonDescription = this.getNodeParameter('buttonDescription', i) as string;
                        const buttons = this.getNodeParameter('buttons', i) as any;

                        // Processar botões
                        const processedButtons = [];
                        if (buttons.button) {
                            for (const button of buttons.button) {
                                processedButtons.push({
                                    buttonText: button.buttonText,
                                    buttonId: button.buttonId,
                                });
                            }
                        }

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/message/sendButtons/${instanceName}`,
                            body: {
                                number,
                                buttonMessage: {
                                    title: buttonTitle,
                                    description: buttonDescription,
                                    buttons: processedButtons,
                                },
                            },
                        });
                    }
                    // Adicione mais operações de mensagem conforme necessário
                } else if (resource === 'group') {
                    const instanceName = this.getNodeParameter('instanceName', i) as string;
                    const groupId = this.getNodeParameter('groupId', i) as string;

                    if (operation === 'createGroup') {
                        const subject = this.getNodeParameter('subject', i) as string;
                        const participants = this.getNodeParameter('participants', i) as string[];

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/group/create/${instanceName}`,
                            body: {
                                subject,
                                participants,
                            },
                        });
                    } else if (operation === 'findGroupMembers') {
                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'GET',
                            uri: `/group/findGroupMembers/${instanceName}/${groupId}`,
                        });
                    }
                    // Adicione mais operações de grupo conforme necessário
                } else if (resource === 'chat') {
                    const instanceName = this.getNodeParameter('instanceName', i) as string;

                    if (operation === 'checkIsWhatsApp') {
                        const number = this.getNodeParameter('number', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/chat/findChat/${instanceName}`,
                            body: { number },
                        });
                    }
                    // Adicione mais operações de chat conforme necessário
                } else if (resource === 'event') {
                    const instanceName = this.getNodeParameter('instanceName', i) as string;

                    if (operation === 'webhook') {
                        const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;
                        const events = this.getNodeParameter('events', i) as string[];

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/webhook/set/${instanceName}`,
                            body: {
                                url: webhookUrl,
                                events,
                            },
                        });
                    }
                    // Adicione mais operações de evento conforme necessário
                } else if (resource === 'integration') {
                    const instanceName = this.getNodeParameter('instanceName', i) as string;

                    if (operation === 'chatwoot') {
                        const chatwootUrl = this.getNodeParameter('chatwootUrl', i) as string;
                        const apiToken = this.getNodeParameter('apiToken', i) as string;

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/chatwoot/set/${instanceName}`,
                            body: {
                                url: chatwootUrl,
                                apiToken,
                            },
                        });
                    }
                    // Adicione mais operações de integração conforme necessário
                }

                // Processar a resposta para remover JSON stringificado
                let processedResponse: IDataObject = responseData as IDataObject;
                
                // Se a resposta for uma string JSON, tentar fazer parse
                if (typeof responseData === 'string') {
                    try {
                        processedResponse = JSON.parse(responseData);
                    } catch (e) {
                        // Se não conseguir fazer parse, manter como string
                        processedResponse = { value: responseData };
                    }
                }
                
                // Se a resposta for um array com JSON stringificado, processar
                if (Array.isArray(processedResponse) && processedResponse.length > 0) {
                    const processedArray: IDataObject[] = [];
                    for (const item of processedResponse) {
                        if (typeof item === 'string') {
                            try {
                                processedArray.push(JSON.parse(item));
                            } catch (e) {
                                processedArray.push({ value: item });
                            }
                        } else {
                            processedArray.push(item as IDataObject);
                        }
                    }
                    processedResponse = { items: processedArray };
                }
                
                returnData.push(processedResponse);
            } catch (error) {
                if (this.continueOnFail()) {
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    returnData.push({ error: errorMessage });
                    continue;
                }
                throw error;
            }
        }

        return [this.helpers.returnJsonArray(returnData)];
    }
} 