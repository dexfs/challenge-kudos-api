import dotenv from 'dotenv-flow';
dotenv.config({ silent: true });
import knexConfig from '../../knexfile';
const env = process.env.NODE_ENV || 'development';

export const knex = require('knex')(knexConfig[env]);
