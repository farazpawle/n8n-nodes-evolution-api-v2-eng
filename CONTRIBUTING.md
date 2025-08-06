# Guia de Contribuição

## Como Contribuir

### 1. Fork e Clone
1. Faça um fork do repositório
2. Clone o seu fork localmente
3. Crie uma branch para sua feature: `git checkout -b feature/nova-funcionalidade`

### 2. Desenvolvimento
1. Instale as dependências: `npm install`
2. Execute o modo de desenvolvimento: `npm run dev`
3. Faça suas alterações seguindo os padrões do projeto

### 3. Testes
1. Execute os testes: `npm test`
2. Verifique o linting: `npm run lint`
3. Formate o código: `npm run format`

### 4. Commit e Push
1. Adicione suas alterações: `git add .`
2. Faça o commit: `git commit -m "feat: adiciona nova funcionalidade"`
3. Faça o push: `git push origin feature/nova-funcionalidade`

### 5. Pull Request
1. Crie um Pull Request no GitHub
2. Descreva suas alterações
3. Aguarde a revisão

## Padrões de Código

### TypeScript
- Use TypeScript strict mode
- Defina tipos para todas as funções
- Use interfaces para estruturas de dados
- Evite `any` quando possível

### Estrutura de Arquivos
```
nodes/
├── EvolutionApi/
│   ├── EvolutionApi.node.ts
│   └── evolutionApi.svg
credentials/
└── EvolutionApiApi.credentials.ts
```

### Nomenclatura
- **Arquivos**: PascalCase para classes, camelCase para funções
- **Variáveis**: camelCase
- **Constantes**: UPPER_SNAKE_CASE
- **Interfaces**: PascalCase com prefixo I

### Documentação
- Comente funções complexas
- Use JSDoc para APIs públicas
- Mantenha o README atualizado
- Documente mudanças breaking

## Testes

### Testes Unitários
```typescript
describe('EvolutionApi Node', () => {
  it('should create instance successfully', async () => {
    // Test implementation
  });
});
```

### Testes de Integração
- Teste com servidor Evolution API real
- Verifique todos os endpoints
- Teste cenários de erro

## Checklist de Pull Request

- [ ] Código segue os padrões do projeto
- [ ] Testes passam
- [ ] Linting não mostra erros
- [ ] Documentação atualizada
- [ ] Não quebra funcionalidades existentes
- [ ] Adiciona testes para novas funcionalidades

## Reportando Bugs

### Template de Bug Report
```markdown
**Descrição do Bug**
Descrição clara e concisa do bug.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Comportamento Atual**
O que está acontecendo.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente**
- OS: [ex: Ubuntu 20.04]
- Node.js: [ex: 16.0.0]
- N8N: [ex: 0.125.0]
- Evolution API: [ex: 2.0.0]

**Informações Adicionais**
Qualquer contexto adicional sobre o problema.
```

## Sugerindo Features

### Template de Feature Request
```markdown
**Problema que a feature resolve**
Descrição clara do problema.

**Solução proposta**
Descrição da solução.

**Alternativas consideradas**
Outras soluções que você considerou.

**Contexto adicional**
Qualquer contexto adicional.
```

## Comunidade

### Canais de Comunicação
- **Issues**: Para bugs e feature requests
- **Discussions**: Para discussões gerais
- **Pull Requests**: Para contribuições

### Código de Conduta
- Seja respeitoso e inclusivo
- Ajude outros desenvolvedores
- Mantenha discussões construtivas
- Reporte comportamentos inadequados

## Agradecimentos

Obrigado por contribuir para este projeto! Sua ajuda é muito importante para a comunidade. 