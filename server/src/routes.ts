// ARQUIVO COM TODAS AS NOSSAS ROTAS

// Biblioteca Express - microframework para lidar com rotas (url)
import express from 'express';
// Importando nossa conexão com o banco de dados
import knex from './database/connection';

// Serve para desacoplar minhas rotas do arquivo principal (server.ts) do meu servidor para outro arquivo.
const routes = express.Router(); 

// Rota para listar todos os ITEMS cadastrados
routes.get('/items', async (request, response) => {
    // Selecionar todos os items. SELECT * FROM items;
    // Sempre que formos executar uma query precisamos digitar o 'await' para que espere a execução.
    // Sempre que utilizamos o 'await' devemos sinalizar como 'async'.
    const items = await knex('items').select('*');

    /* serializar é um processo de transformação de informações para um outro formato mais acessível
    'items.map' percorre todos os itens que retornamos do nosso bd para possamos modificá-los */
   const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}` // Variável "${}"
        }
    });

    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {
    // Recurso de desestruturação do javascript
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    // Criando uma transação, desta maneira só conseguiremos inserir dados na tabela points caso consigamos também inserir na tabela point_items
    const trx = await knex.transaction();
    
    // Recurso de short-sintax
    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    });

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id,
        }
    });

    await trx('point_items').insert(pointItems);

    return response.json ({ success: true});
});


export default routes; // exportando as nossas rotas para que elas possam ser importados no nosso server