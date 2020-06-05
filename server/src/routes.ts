// ARQUIVO COM TODAS AS NOSSAS ROTAS

// Biblioteca Express - microframework para lidar com rotas (url)
import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// Serve para desacoplar minhas rotas do arquivo principal (server.ts) do meu servidor para outro arquivo.
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Rota para listar todos os ITEMS cadastrados
routes.get('/items', itemsController.index);
// Rota para criar um POINT
routes.post('/points', pointsController.create);
// Rota para listar um ponto de coleta específico
routes.get('/points/:id', pointsController.show);

export default routes; // exportando as nossas rotas para que elas possam ser importados no nosso server