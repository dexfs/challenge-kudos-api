const {
  createTable,
  deleteIfExistsTable,
} = require('../helpers/schema-helpers');

exports.up = function (knex) {
  const fields = knex.schema.createTable('user_kudos', (table) => {
    table.uuid('id').primary();
    table.string('kudos_id').unique();
    table.string('user_id');
    table.integer('quantity').default(2);
  });

  return createTable({ knex, tableName: 'user_kudos', fields });
};

exports.down = function (knex) {
  return deleteIfExistsTable({ knex, tableName: 'user_kudos' });
};
