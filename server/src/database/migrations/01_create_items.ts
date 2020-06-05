// Importar o tipo knex para poder usar o typescript 
import knex from 'knex';

// CRIAR A TABELA (Adicionar)
export async function up(knex: knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

// VOLTAR ATRÁS (Deletar)
export async function down(knex: knex) {
    return knex.schema.dropTable('items');
}