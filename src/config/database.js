const config = {
  client: 'pg',
  connection: process.env.DB_DNS || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};

export const knex = require('knex')(config);
