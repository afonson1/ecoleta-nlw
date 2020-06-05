// Server da nossa aplicação
// Arquivo principal

import express from 'express'; // Biblioteca Express - microframework para lidar com rotas (url)
import routes from './routes' /* Importando o arquivo criado para manter todas as nossas rotas organizadas. 
                                O "./" é usado pois estamos acessando um arquivo da nossa aplicação, neste caso na mesma pasta.*/
import cors from 'cors';
import path from 'path';

const app = express(); //Criando minha aplicação

app.use(cors());
app.use(express.json()); // O express só entende o inglês, para que entenda Json é necessário esse comando.
app.use(routes); // temos um arquivo 'routes.ts'

// Função para servir arquivos estáticos: imagens, pdf, arquivos que queremos deixar como download, etc.
// Podemos acessar pelo 'localhost:porta/uploads/nome_do_arquivo'. Ex:. localhost:3333/uploads/baterias.svg
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333); //Porta que queremos executar a aplicação, pode escolher a porta que preferir