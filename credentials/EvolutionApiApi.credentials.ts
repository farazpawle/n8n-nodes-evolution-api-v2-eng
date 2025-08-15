import {
    ICredentialType,
    INodeProperties,
    ICredentialDataDecryptedObject,
    IHttpRequestOptions,
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
            description: 'Evolution API server URL (e.g., http://localhost:8080 or https://your-server.com)',
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
            description: 'API Key (if required)',
            required: false,
        },
        {
            displayName: 'Timeout',
            name: 'timeout',
            type: 'number',
            default: 30000,
            description: 'Timeout in milliseconds for requests',
            required: false,
        },
    ];

    async authenticate(
        credentials: ICredentialDataDecryptedObject,
        requestOptions: IHttpRequestOptions,
    ): Promise<IHttpRequestOptions> {
        const serverUrl = credentials['serverUrl'] as string;
        const apiKey = credentials['apiKey'] as string;

        // Remove trailing slash if present
        const baseUrl = serverUrl.endsWith('/') ? serverUrl.slice(0, -1) : serverUrl;

        requestOptions.baseURL = baseUrl;

        // Add API key to headers if provided
        if (apiKey) {
            requestOptions.headers = {
                ...requestOptions.headers,
                'apikey': apiKey,
            };
        }

        return requestOptions;
    }
} 