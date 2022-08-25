import knex from 'knex'
import knexConfig from '../knexfile'

const env = process.env.DB_ENV || 'development'

export const db = knex(knexConfig[env])
