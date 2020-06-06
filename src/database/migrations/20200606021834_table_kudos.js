const {
  createTable,
  deleteIfExistsTable,
} = require('../helpers/schema-helpers');

exports.up = function (knex) {
  const fields = knex.schema.createTable('kudos', (table) => {
    table.uuid('id').primary();
    table.string('name').unique();
    table.string('icon');
    table.integer('quantity_default').default(2);
  });

  return createTable({ knex, tableName: 'kudos', fields });
};

exports.down = function (knex) {
  return deleteIfExistsTable({ knex, tableName: 'kudos' });
};
