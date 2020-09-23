import Knex from 'knex';
//Lista
export async function up(knex: Knex) {
  return knex.schema.createTable('task', table => {
    table.increments('id').primary();
    table.string('plan').notNullable();
  })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('task');
  }
