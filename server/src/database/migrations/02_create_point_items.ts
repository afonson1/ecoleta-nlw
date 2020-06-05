// Importar o tipo knex para poder usar o typescript 
import knex from 'knex';

// CRIAR A TABELA (Adicionar)
export async function up(knex: knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');
        
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

// VOLTAR ATRÁS (Deletar)
export async function down(knex: knex) {
    return knex.schema.dropTable('point_items');
}