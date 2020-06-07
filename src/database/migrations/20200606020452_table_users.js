const {
  createTable,
  deleteIfExistsTable,
} = require('../helpers/schema-helpers');
exports.up = function (knex) {
  const fields = knex.schema.createTable('users', (table) => {
    table.bigInteger('id').primary();
    table.string('login').unique();
    table.string('avatar_url');
    table.string('github_profile');
    table.string('name');
    table.string('access_token');
  });

  return createTable({ knex, tableName: 'users', fields });
};

exports.down = function (knex) {
  return deleteIfExistsTable({ knex, tableName: 'users' });
};
