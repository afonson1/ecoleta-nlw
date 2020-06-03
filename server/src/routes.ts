import express from 'express'; // Biblioteca Express - microframework para lidar com rotas (url)

const routes = express.Router(); // Serve para desacoplar minhas rotas do arquivo principal (server.ts) do meu servidor para outro arquivo. 

// ROTA RAIZ da nossa aplicação
routes.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
});

export default routes; // exportando as nossas rotas para que elas possam ser importados no nosso server