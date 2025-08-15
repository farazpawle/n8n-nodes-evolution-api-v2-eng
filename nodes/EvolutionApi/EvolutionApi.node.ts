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
        icon: 'evolutionApi',
        group: ['transform'],
        version: 2,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with Evolution API v2',
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
                        name: 'Instance',
                        value: 'instance',
                    },
                    {
                        name: 'Message',
                        value: 'message',
                    },
                    {
                        name: 'Group',
                        value: 'group',
                    },
                    {
                        name: 'Chat',
                        value: 'chat',
                    },
                    {
                        name: 'Event',
                        value: 'event',
                    },
                    {
                        name: 'Integration',
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
                        name: 'Create Instance',
                        value: 'createInstance',
                        description: 'Create a new instance',
                        action: 'Create a new instance',
                    },
                    {
                        name: 'Fetch Instances',
                        value: 'fetchInstances',
                        description: 'Fetch all instances',
                        action: 'Fetch all instances',
                    },
                    {
                        name: 'Connect Instance',
                        value: 'connectInstance',
                        description: 'Connect to an instance',
                        action: 'Connect to an instance',
                    },
                    {
                        name: 'Restart Instance',
                        value: 'restartInstance',
                        description: 'Restart an instance',
                        action: 'Restart an instance',
                    },
                    {
                        name: 'Connection State',
                        value: 'connectionState',
                        description: 'Check connection state',
                        action: 'Check connection state',
                    },
                    {
                        name: 'Disconnect Instance',
                        value: 'logoutInstance',
                        description: 'Disconnect an instance',
                        action: 'Disconnect an instance',
                    },
                    {
                        name: 'Delete Instance',
                        value: 'deleteInstance',
                        description: 'Delete an instance',
                        action: 'Delete an instance',
                    },
                    {
                        name: 'Set Presence',
                        value: 'setPresence',
                        description: 'Set instance presence',
                        action: 'Set instance presence',
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
                        name: 'Send Text',
                        value: 'sendText',
                        description: 'Send text message',
                        action: 'Send text message',
                    },
                    {
                        name: 'Send Image',
                        value: 'sendImage',
                        description: 'Send image',
                        action: 'Send image',
                    },
                    {
                        name: 'Send Video',
                        value: 'sendVideo',
                        description: 'Send video',
                        action: 'Send video',
                    },
                    {
                        name: 'Send Audio',
                        value: 'sendAudio',
                        description: 'Send audio',
                        action: 'Send audio',
                    },
                    {
                        name: 'Send Document',
                        value: 'sendDocument',
                        description: 'Send document',
                        action: 'Send document',
                    },
                    {
                        name: 'Send Poll',
                        value: 'sendPoll',
                        description: 'Send poll',
                        action: 'Send poll',
                    },
                    {
                        name: 'Send Contact',
                        value: 'sendContact',
                        description: 'Send contact',
                        action: 'Send contact',
                    },
                    {
                        name: 'Send List',
                        value: 'sendList',
                        description: 'Send list',
                        action: 'Send list',
                    },
                    {
                        name: 'Send Button',
                        value: 'sendButton',
                        description: 'Send button',
                        action: 'Send button',
                    },
                    {
                        name: 'Send PIX',
                        value: 'sendPix',
                        description: 'Send PIX',
                        action: 'Send PIX',
                    },
                    {
                        name: 'Send Status',
                        value: 'sendStatus',
                        description: 'Send status',
                        action: 'Send status',
                    },
                    {
                        name: 'React to Message',
                        value: 'sendReaction',
                        description: 'React to a message',
                        action: 'React to a message',
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
                        name: 'Create Group',
                        value: 'createGroup',
                        description: 'Create a new group',
                        action: 'Create a new group',
                    },
                    {
                        name: 'Update Group Picture',
                        value: 'updateGroupPicture',
                        description: 'Update group picture',
                        action: 'Update group picture',
                    },
                    {
                        name: 'Update Group Name',
                        value: 'updateGroupSubject',
                        description: 'Update group name',
                        action: 'Update group name',
                    },
                    {
                        name: 'Update Group Description',
                        value: 'updateGroupDescription',
                        description: 'Update group description',
                        action: 'Update group description',
                    },
                    {
                        name: 'Update Group Settings',
                        value: 'updateGroupSetting',
                        description: 'Update group settings',
                        action: 'Update group settings',
                    },
                    {
                        name: 'Update Members',
                        value: 'updateGroupMembers',
                        description: 'Update group members',
                        action: 'Update group members',
                    },
                    {
                        name: 'Fetch Group Invite Link',
                        value: 'fetchInviteCode',
                        description: 'Fetch group invite link',
                        action: 'Fetch group invite link',
                    },
                    {
                        name: 'Revoke Group Invite Link',
                        value: 'revokeInviteCode',
                        description: 'Revoke group invite link',
                        action: 'Revoke group invite link',
                    },
                    {
                        name: 'Send Group Invite Link',
                        value: 'sendGroupInvite',
                        description: 'Send group invite link',
                        action: 'Send group invite link',
                    },
                    {
                        name: 'Find Participants',
                        value: 'findGroupMembers',
                        description: 'Find group participants',
                        action: 'Find group participants',
                    },
                    {
                        name: 'Temporary Messages',
                        value: 'toggleEphemeral',
                        description: 'Toggle temporary messages',
                        action: 'Toggle temporary messages',
                    },
                    {
                        name: 'Leave Group',
                        value: 'leaveGroup',
                        description: 'Leave group',
                        action: 'Leave group',
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
                        name: 'Check Number',
                        value: 'checkIsWhatsApp',
                        description: 'Check if number is WhatsApp',
                        action: 'Check if number is WhatsApp',
                    },
                    {
                        name: 'Read Message',
                        value: 'markMessageAsRead',
                        description: 'Mark message as read',
                        action: 'Mark message as read',
                    },
                    {
                        name: 'Archive Chat',
                        value: 'archiveChat',
                        description: 'Archive chat',
                        action: 'Archive chat',
                    },
                    {
                        name: 'Mark as Unread',
                        value: 'markMessageAsUnread',
                        description: 'Mark message as unread',
                        action: 'Mark message as unread',
                    },
                    {
                        name: 'Delete Message',
                        value: 'deleteMessage',
                        description: 'Delete message for everyone',
                        action: 'Delete message for everyone',
                    },
                    {
                        name: 'Fetch Profile Picture',
                        value: 'fetchProfilePictureUrl',
                        description: 'Fetch profile picture',
                        action: 'Fetch profile picture',
                    },
                    {
                        name: 'Get Media in Base64',
                        value: 'getBase64',
                        description: 'Get media in base64',
                        action: 'Get media in base64',
                    },
                    {
                        name: 'Edit Message',
                        value: 'updateMessage',
                        description: 'Edit message',
                        action: 'Edit message',
                    },
                    {
                        name: 'Send Presence',
                        value: 'sendPresence',
                        description: 'Send presence',
                        action: 'Send presence',
                    },
                    {
                        name: 'Block Contact',
                        value: 'updateBlockStatus',
                        description: 'Update block status',
                        action: 'Update block status',
                    },
                    {
                        name: 'Find Contacts',
                        value: 'findContacts',
                        description: 'Find contacts',
                        action: 'Find contacts',
                    },
                    {
                        name: 'Search Messages',
                        value: 'findMessages',
                        description: 'Search messages',
                        action: 'Search messages',
                    },
                    {
                        name: 'Search Status',
                        value: 'findStatusMessage',
                        description: 'Search status messages',
                        action: 'Search status messages',
                    },
                    {
                        name: 'Search Chats',
                        value: 'findChats',
                        description: 'Search chats',
                        action: 'Search chats',
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
                        description: 'Configure webhook',
                        action: 'Configure webhook',
                    },
                    {
                        name: 'RabbitMQ',
                        value: 'rabbitmq',
                        description: 'Configure RabbitMQ',
                        action: 'Configure RabbitMQ',
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
                        description: 'Configure Chatwoot',
                        action: 'Configure Chatwoot',
                    },
                    {
                        name: 'Evolution Bot',
                        value: 'evolutionBot',
                        description: 'Configure Evolution Bot',
                        action: 'Configure Evolution Bot',
                    },
                    {
                        name: 'Typebot',
                        value: 'typebot',
                        description: 'Configure Typebot',
                        action: 'Configure Typebot',
                    },
                    {
                        name: 'Dify',
                        value: 'dify',
                        description: 'Configure Dify',
                        action: 'Configure Dify',
                    },
                    {
                        name: 'Flowise',
                        value: 'flowise',
                        description: 'Configure Flowise',
                        action: 'Configure Flowise',
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
                description: 'Instance name',
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
                description: 'Instance data (JSON)',
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
                description: 'Recipient number',
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
                description: 'Message text',
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
                description: 'Image URL',
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
                description: 'Image caption',
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
                description: 'Video URL',
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
                description: 'Audio URL',
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
                description: 'Document URL',
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
                description: 'Document name',
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
                description: 'List title',
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
                description: 'List description',
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
                default: 'View options',
                description: 'List button text',
                displayOptions: {
                    show: {
                        resource: ['message'],
                        operation: ['sendList'],
                    },
                },
            },
            {
                displayName: 'List Footer Text',
                name: 'listFooterText',
                type: 'string',
                default: '',
                description: 'List footer text',
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
                description: 'List sections',
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
                                description: 'Section title',
                            },
                            {
                                displayName: 'Rows',
                                name: 'rows',
                                type: 'fixedCollection',
                                typeOptions: {
                                    multipleValues: true,
                                },
                                default: {},
                                description: 'Section rows',
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
                                                description: 'Row title',
                                            },
                                            {
                                                displayName: 'Description',
                                                name: 'description',
                                                type: 'string',
                                                default: '',
                                                description: 'Row description',
                                            },
                                            {
                                                displayName: 'Row ID',
                                                name: 'rowId',
                                                type: 'string',
                                                default: '',
                                                description: 'Row ID',
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
                description: 'Button title',
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
                description: 'Button description',
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
                description: 'Buttons',
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
                                description: 'Button text',
                            },
                            {
                                displayName: 'Button ID',
                                name: 'buttonId',
                                type: 'string',
                                default: '',
                                description: 'Button ID',
                            },
                            {
                                displayName: 'Button Type',
                                name: 'buttonType',
                                type: 'options',
                                options: [
                                    {
                                        name: 'Reply',
                                        value: 'reply',
                                        description: 'Reply button',
                                    },
                                    {
                                        name: 'URL',
                                        value: 'url',
                                        description: 'URL button',
                                    },
                                ],
                                default: 'reply',
                                description: 'Button type',
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
                description: 'Group ID',
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
                        const listFooterText = this.getNodeParameter('listFooterText', i) as string;
                        const listSections = this.getNodeParameter('listSections', i) as any;

                        // Process list sections
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
                                title: listTitle,
                                description: listDescription,
                                buttonText: listButtonText,
                                footerText: listFooterText,
                                sections,
                                listMessage: {
                                    title: listTitle,
                                    description: listDescription,
                                    buttonText: listButtonText,
                                    footerText: listFooterText,
                                    sections,
                                },
                            },
                        });
                    } else if (operation === 'sendButton') {
                        const buttonTitle = this.getNodeParameter('buttonTitle', i) as string;
                        const buttonDescription = this.getNodeParameter('buttonDescription', i) as string;
                        const buttons = this.getNodeParameter('buttons', i) as any;

                        // Process buttons
                        const processedButtons = [];
                        if (buttons.button) {
                            for (const button of buttons.button) {
                                processedButtons.push({
                                    buttonText: button.buttonText,
                                    buttonId: button.buttonId,
                                    type: button.buttonType || 'reply',
                                });
                            }
                        }

                        responseData = await this.helpers.requestWithAuthentication.call(this, 'evolutionApiApi', {
                            method: 'POST',
                            uri: `/message/sendButtons/${instanceName}`,
                            body: {
                                number,
                                title: buttonTitle,
                                description: buttonDescription,
                                buttons: processedButtons,
                            },
                        });
                    }
                    // Add more message operations as needed
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
                    // Add more group operations as needed
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
                    // Add more chat operations as needed
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
                    // Add more event operations as needed
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
                    // Add more integration operations as needed
                }

                // Process the response to ensure valid data
                let processedResponse: IDataObject;
                
                // If the response is undefined or null, create empty object
                if (responseData === undefined || responseData === null) {
                    processedResponse = { 
                        success: true, 
                        message: 'Operation completed successfully',
                        timestamp: new Date().toISOString()
                    };
                }
                // If the response is a string, try to parse it
                else if (typeof responseData === 'string') {
                    try {
                        processedResponse = JSON.parse(responseData);
                    } catch (e) {
                        processedResponse = { 
                            value: responseData,
                            success: true,
                            timestamp: new Date().toISOString()
                        };
                    }
                }
                // If the response is an array, process each item
                else if (Array.isArray(responseData)) {
                    const processedArray: IDataObject[] = [];
                    for (const item of responseData) {
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
                    processedResponse = { 
                        items: processedArray,
                        success: true,
                        count: processedArray.length,
                        timestamp: new Date().toISOString()
                    };
                }
                // If it's an object, use directly
                else {
                    processedResponse = {
                        ...responseData,
                        success: true,
                        timestamp: new Date().toISOString()
                    };
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