require('dotenv-flow').config({
  silent: true,
});
const path = require('path');
module.exports = {
  test: {
    client: 'postgresql',
    connection: process.env.DB_DSN || {
      port: process.env.PORT || '5432',
      host: process.env.DB_HOST || '127.0.0.1',
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
  },

  development: {
    client: 'postgresql',
    connection: process.env.DB_DSN || {
      port: process.env.PORT || '5432',
      host: process.env.DB_HOST || '127.0.0.1',
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve('src', 'database', 'migrations'),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: path.resolve('src', 'database', 'seeds'),
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DB_DSN || {
      port: process.env.PORT || '5432',
      host: process.env.DB_HOST || '127.0.0.1',
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve('src', 'database', 'migrations'),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: path.resolve('src', 'database', 'seeds'),
    },
  },
};
