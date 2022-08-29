// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/database/dev.db3',
    },
    migrations: {
      directory: './src/database/dev/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './src/database/dev/seeds',
    },
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done)
      },
    },
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/database/test.db3',
    },
    migrations: {
      directory: './src/database/testing/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './src/database/testing/seeds',
    },
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done)
      },
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/database/dev/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './src/database/dev/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
}
