/* Conexão com nosso Banco de Dados, neste exemplo o banco escolhido foi o SQLite.
Usaremos o Query Builder "Knex" para podermos escrever nossas queries pro BD usando javascript e conseguir utilizar quantos bd a gente quiser.
O código gerado no Knex poderá ser utilizado na maioria dos bancos SQL, como SQLite, MySQL, PostgreeSQL, etc.
*/

import knex from 'knex'; //npm install knex 
import path from 'path'; //importar quando vamos lidar com caminhos

const connection = knex({
    client: "sqlite3",      //Qual o client que vamos usar?
    // Precisamos instalar também o SQLite, para isso 'npm install sqlite3' .. de acordo com a documentação do knex.
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') /* 'resolve' padroniza o caminho, pois dependendo do sistema operacional, podemos ter \ ou /, i.e.. 
        O "__dirname" retorna o caminho para o diretório do arquivo que está executando ele.
        'database.sqlite' é o nome do nosso banco gerado.
        */
    }
});

export default connection;