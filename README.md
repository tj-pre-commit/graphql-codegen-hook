# graphql-codegen-hook
Precommit hook for [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) 


![Node.js CI](https://github.com/jackton1/graphql-codegen-hook/workflows/Node.js%20CI/badge.svg?event=push)

## As a pre-commit hook

See [pre-commit](https://github.com/pre-commit/pre-commit) for instructions

Sample `.pre-commit-config.yaml`

```yaml
-   repo: https://github.com/jackton1/graphql-codegen-hook
    rev: v0.0.11
    hooks:
      - id: graphql-codegen-hook
        stages: [commit]
        args: ['--config', 'codegen.yml']
```
