# arquivos-de-config-para-projeto-node
Arquivos de configuração para projeto node.


# Alterar o arquivo settings.json do vscode

```
{
    "workbench.iconTheme": "material-icon-theme",
    "window.zoomLevel": -1,
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "workbench.colorTheme": "Dracula",
    "editor.formatOnSave": false,
    "editor.rulers": [80,120],
    "editor.tabSize": 2,
    "editor.renderLineHighlight": "gutter",
    "emmet.syntaxProfiles": {
        "javascript": "jsx",
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "javascript.updateImportsOnFileMove.enabled": "never",
    "breadcrumbs.enabled": true,
    "editor.parameterHints.enabled": false,
    
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        {
            "language": "javascript",
            "autoFix": true,
        },
        {
            "language": "javascriptreact",
            "autoFix": true,
        },
        {
            "language": "typescript",
            "autoFix": true,
        },
        {
            "language": "typescriptreact",
            "autoFix": true,
        },        
    ]
}
```

# Instalar eslint
```
yarn add eslint -D
yarn eslint --init
```

# Instalar prettier
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

# Instalar nodemon e sucrase

```
yarn add sucrase nodemon -D
```

# Instalar eslint 
```
yarn add eslint
yarn eslin --init
```

# Instalar sequelize
```
yarn add sequelize
yarn add sequelize-cli -D
```

# Criar uma migration
```
yarn sequelize migration:create --name=<nome-da-migration>
```

# Dependência para criptografia de hash
```
yarn add bcryptjs
```

# Dependência para JWT
```
yarn add jsonwebtoken
```
# criar database no docker
```
docker run --name <nome-do-container> -e POSTGRES_PASSWORD=<mysecretpassword> -d -p <porta>:5432 postgres
```
