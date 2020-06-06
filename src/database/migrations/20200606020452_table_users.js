const {
  createTable,
  deleteIfExistsTable,
} = require('../helpers/schema-helpers');
exports.up = function (knex) {
  const fields = knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('email').unique();
    table.string('login');
    table.string('auth_driver');
    table.string('access_token');
  });

  return createTable({ knex, tableName: 'users', fields });
};

exports.down = function (knex) {
  return deleteIfExistsTable({ knex, tableName: 'users' });
};
