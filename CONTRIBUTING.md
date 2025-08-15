# Contributing Guide

## How to Contribute

### 1. Fork and Clone
1. Fork the repository
2. Clone your fork locally
3. Create a branch for your feature: `git checkout -b feature/new-functionality`

### 2. Development
1. Install dependencies: `npm install`
2. Run development mode: `npm run dev`
3. Make your changes following project standards

### 3. Testing
1. Run tests: `npm test`
2. Check linting: `npm run lint`
3. Format code: `npm run format`

### 4. Commit and Push
1. Add your changes: `git add .`
2. Make commit: `git commit -m "feat: add new functionality"`
3. Push: `git push origin feature/new-functionality`

### 5. Pull Request
1. Create a Pull Request on GitHub
2. Describe your changes
3. Wait for review

## Code Standards

### TypeScript
- Use TypeScript strict mode
- Define types for all functions
- Use interfaces for data structures
- Avoid `any` when possible

### File Structure
```
nodes/
├── EvolutionApi/
│   ├── EvolutionApi.node.ts
│   └── evolutionApi.svg
credentials/
└── EvolutionApiApi.credentials.ts
```

### Naming
- **Files**: PascalCase for classes, camelCase for functions
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces**: PascalCase with I prefix

### Documentation
- Comment complex functions
- Use JSDoc for public APIs
- Keep README updated
- Document breaking changes

## Testing

### Unit Tests
```typescript
describe('EvolutionApi Node', () => {
  it('should create instance successfully', async () => {
    // Test implementation
  });
});
```

### Integration Tests
- Test with real Evolution API server
- Verify all endpoints
- Test error scenarios

## Pull Request Checklist

- [ ] Code follows project standards
- [ ] Tests pass
- [ ] Linting shows no errors
- [ ] Documentation updated
- [ ] Doesn't break existing functionality
- [ ] Adds tests for new features

## Reporting Bugs

### Bug Report Template
```markdown
**Bug Description**
Clear and concise description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll to '...'
4. See error

**Expected Behavior**
What should happen.

**Actual Behavior**
What is happening.

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [eg: Ubuntu 20.04]
- Node.js: [eg: 16.0.0]
- N8N: [eg: 0.125.0]
- Evolution API: [eg: 2.0.0]

**Additional Information**
Any additional context about the problem.
```

## Suggesting Features

### Feature Request Template
```markdown
**Problem the feature solves**
Clear description of the problem.

**Proposed solution**
Description of the solution.

**Alternatives considered**
Other solutions you considered.

**Additional context**
Any additional context.
```

## Community

### Communication Channels
- **Issues**: For bugs and feature requests
- **Discussions**: For general discussions
- **Pull Requests**: For contributions

### Code of Conduct
- Be respectful and inclusive
- Help other developers
- Keep discussions constructive
- Report inappropriate behavior

## Acknowledgments

Thank you for contributing to this project! Your help is very important to the community. 