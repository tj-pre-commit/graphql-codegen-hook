![Node.js CI](https://github.com/tj-pre-commit/graphql-codegen-hook/workflows/Node.js%20CI/badge.svg?event=push)

# graphql-codegen-hook
[pre-commit](https://pre-commit.com) hook for [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) 


## As a pre-commit hook

See [pre-commit](https://github.com/pre-commit/pre-commit) for instructions

Sample `.pre-commit-config.yaml`

```yaml
-   repo: https://github.com/tj-pre-commit/graphql-codegen-hook
    rev: v1.0.0
    hooks:
      - id: graphql-codegen-hook
        stages: [commit]
        args: ['--config', 'codegen.yml']
```
