// Server da nossa aplicação
// Arquivo principal

import express from 'express'; // Biblioteca Express - microframework para lidar com rotas (url)
import routes from './routes' // Importando o arquivo criado para manter todas as nossas rotas organizadas
// o "./" é usado pois estamos acessando um arquivo da nossa aplicação, neste caso na mesma pasta.

const app = express(); //Criando minha aplicação


app.use(express.json()); // O express só entende o inglês normal, para que entenda Arquivos Json é necessário esse comando.

app.use(routes); //

app.listen(3333); //Porta que queremos executar a aplicação, pode escolher a porta que preferir