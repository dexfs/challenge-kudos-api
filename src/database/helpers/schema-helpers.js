const createTable = ({ knex, tableName, fields }) => {
  return knex.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      return fields;
    }
  });
};

const deleteIfExistsTable = function ({ knex, tableName }) {
  return knex.schema.dropTableIfExists(tableName);
};

module.exports = { createTable, deleteIfExistsTable };
