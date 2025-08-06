import {
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class EvolutionApiApi implements ICredentialType {
    name = 'evolutionApiApi';
    displayName = 'Evolution API';
    documentationUrl = 'https://doc.evolution-api.com/v2/api-reference/get-information';
    properties: INodeProperties[] = [
        {
            displayName: 'Server URL',
            name: 'serverUrl',
            type: 'string',
            default: 'http://localhost:8080',
            placeholder: 'http://localhost:8080',
            description: 'URL do servidor Evolution API',
            required: true,
        },
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
            description: 'Chave da API (se necessário)',
            required: false,
        },
        {
            displayName: 'Instance Name',
            name: 'instanceName',
            type: 'string',
            default: '',
            description: 'Nome da instância (opcional)',
            required: false,
        },
        {
            displayName: 'Timeout',
            name: 'timeout',
            type: 'number',
            default: 30000,
            description: 'Timeout em milissegundos para as requisições',
            required: false,
        },
    ];
} 