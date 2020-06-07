const {
  createTable,
  deleteIfExistsTable,
} = require('../helpers/schema-helpers');

exports.up = function (knex) {
  const fields = knex.schema.createTable('user_kudos', (table) => {
    table.string('kudo_id').notNullable();
    table.string('user_id').notNullable();
    table.integer('quantity').default(2);
    table.primary(['user_id', 'kudo_id']);
  });

  return createTable({ knex, tableName: 'user_kudos', fields });
};

exports.down = function (knex) {
  return deleteIfExistsTable({ knex, tableName: 'user_kudos' });
};
