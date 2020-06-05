# ecoleta-nlw
 Projeto desenvolvido durante a Next-Level-Week da Rocketseat, entre os dias 01 e 05/06/2020

COMANDOS BÁSICOS POWERSHELL:

ACESSAR UMA PASTA:
    * 'cd c:/users/afonson1/documents/projetos/'
    * 'cd ..'

PESQUISAR CONTEÚDO DA PASTA: 'ls'

LIMPAR O PROMPT: 'cls'

RODAR A APLICAÇÃO: 'npm run dev'
    obs.: Lembrando que devemos estar na pasta server.
    obs2.: O comando 'dev' está descrito no arquivo "package.json"

RODAS AS MIGRATIONS: 'npm  run knex:migrate'
    obs.: O comando 'dev' está descrito no arquivo "package.json"
    Em caso de erro executar: 'npx knex migrate:latest --knexfile knexfile.ts migrate:latest'