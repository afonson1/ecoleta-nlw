
// Importar o tipo knex para poder usar o typescript 
import knex from 'knex';

// CRIAR A TABELA (Adicionar)
export async function up(knex: knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // o 2 diz ue aceitaremos apenas 2 caracteres
    });
}

// VOLTAR ATRÁS (Deletar)
export async function down(knex: knex) {
    return knex.schema.dropTable('points');
}