const {
  createTable,
  deleteIfExistsTable,
} = require('../helpers/schema-helpers');

exports.up = function (knex) {
  const fields = knex.schema.createTable('kudo_actions', (table) => {
    table.uuid('id').primary();
    table.uuid('kudo_id').notNullable();
    table.bigInteger('from_user_id').notNullable();
    table.bigInteger('to_user_id').notNullable();
    table.text('comment');
    table.timestamps();

    table.unique(['from_user_id', 'to_user_id', 'kudo_id']);
  });

  return createTable({ knex, tableName: 'kudo_actions', fields });
};

exports.down = function (knex) {
  return deleteIfExistsTable({ knex, tableName: 'kudo_actions' });
};
