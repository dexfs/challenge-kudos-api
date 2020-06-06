const {
  createTable,
  deleteIfExistsTable,
} = require('../helpers/schema-helpers');

exports.up = function (knex) {
  const fields = knex.schema.createTable('kudo_actions', (table) => {
    table.uuid('id').primary();
    table.uuid('kudo_id').unique();
    table.uuid('from_user_id');
    table.uuid('to_user_id');
    table.text('comment');
    table.timestamps();
  });

  return createTable({ knex, tableName: 'kudo_actions', fields });
};

exports.down = function (knex) {
  return deleteIfExistsTable({ knex, tableName: 'kudo_actions' });
};
