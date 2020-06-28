import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
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
                image_url: `http://192.168.0.7:3333/uploads/${item.image}` // Variável "${}"
            }
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;