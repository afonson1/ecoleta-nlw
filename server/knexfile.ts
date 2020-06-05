// Vai ter algumas configurações que a nossa conexão com o banco não tem

// Para poder utilizar os caminhos dos diretórios
import path from 'path';

// O knex ainda não suporta a sintaxe 'export default', mesmo sendo um arquivo typescript
module.exports = {
    // De acordo com a documentação do knex precisamos instalar o SQLite, para isso 'npm install sqlite3'.
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'), /*
        - 'resolve' padroniza o caminho, pois dependendo do sistema operacional, podemos ter \ ou /, i.e.. 
        - O "__dirname" retorna o caminho para o diretório do arquivo que está executando ele.
        - 'database.sqlite' é o nome do nosso banco gerado.*/
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
};