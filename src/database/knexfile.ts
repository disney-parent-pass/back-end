interface IKnexConfig {
  [key: string]: object
}

const knexConfig: IKnexConfig = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/database/dev/dev.db3',
    },
    migrations: {
      directory: 'dev/migrations/',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: 'src/database/dev/seeds',
    },
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done)
      },
    },
  },
}

export default knexConfig
