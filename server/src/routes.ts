// ARQUIVO COM TODAS AS NOSSAS ROTAS

// Biblioteca Express - microframework para lidar com rotas (url)
import express from 'express';
// Importando nossa conexão com o banco de dados
import knex from './database/connection';

// Serve para desacoplar minhas rotas do arquivo principal (server.ts) do meu servidor para outro arquivo.
const routes = express.Router(); 

// Rota para listar (get) todos os itens cadastrados
routes.get('/items', async (request, response) => {
    // Selecionar todos os items. SELECT * FROM items;
    // Sempre que formos executar uma query precisamos digitar o 'await' para que espere a execução.
    // Sempre que utilizamos o 'await' devemos sinalizar como 'async'.
    const items = await knex('items').select('*');

    // serializar é um processo de transformação de informações para um outro formato mais acessível
    // 'items.map' percorre todos os itens que retornamos do nosso bd para possamos modificá-los 
    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}` // Variável "${}"
        }
    });

    return response.json(serializedItems);
});

// Rota para adicionar (post) pontos
routes.post('/points', async (request, response) => {
    // Parâmetros da requisição
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

    // Criação da transação, para que as ações seguintes sejam tratadas como uma só transação, ou tudo funciona ou nada.
    // O nome 'trx' é um padrão adotado pela comunidade, mas pode ser qualquer nome disponível
    const trx = await knex.transaction();

    // Inserindo os dados na tabela POINTS
    // 'insertedIds' = retorna o id dos registros que foram inseridos
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

    // point_id sempre recebe a primeira posição de "ids" pois só criamos um ponto por vez.
    const point_id = insertedIds[0];

    // Percorrendo a o vetor "items" da requisição
    const pointItems = items.map((item_id : number) => {
        return{
            item_id,            // ID do item
            point_id,           // ID do ponto
        };
    });
    // O retorno será uma lista formada por "item_id" e "point_id"

    // Inserindo o registro "pointItems" na lista POINTS_ITEMS
    await trx('point_items').insert(pointItems);

    return response.json({success: true})
});

export default routes; // exportando as nossas rotas para que elas possam ser importados no nosso server