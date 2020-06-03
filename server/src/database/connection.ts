/* Conexão com nosso Banco de Dados, neste exemplo o banco escolhido foi o SQLite.
* Usaremos o Query Builder "Knex" pois poderemos usar uma pesquisa única e ela rodará
* na maioria dos bancos SQL, como SQLite, MySQL, PostgreeSQL, etc.
*/

import knex from 'knex'; //npm install knex
import path from 'path'; //importar quando vamos lidar com caminhos

const connection = knex({
    client: "sqlite3",      // npm install sqlite3 .. de acordo com a documentação do knex
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') /* padroniza o caminho, pois dependendo do sistema operacional, podemos ter \ ou /, i.e.. 
        O "__dirname" retorna o caminho para o diretório do arquivo que está executando ele.
        */
    }
});

export default connection;