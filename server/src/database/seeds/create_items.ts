// Para adicionar elementos pré-cadastrados

// Importando o tipo para podermos utilizar os poderes do typescript.
import Knex from 'knex';

export async function seed(knex: Knex){
    // Comando 'await' porque esse insert demora um pouquinho, e precisamos que espere ele finalizar
    await knex('items').insert([
        {title: 'Lâmpadas', image: 'lampadas.svg'},
        {title: 'Pilhas e Baterias', image: 'baterias.svg'},
        {title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
        {title: 'Resíduos Eletrônicos', image: 'eletronicos.svg'},
        {title: 'Resíduos', image: 'organicos.svg'},
        {title: 'Óleo de Cozinha', image: 'oleo.svg'},
    ]);
}