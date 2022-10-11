interface IKnexConfig {
  [key: string]: object;
}

const knexConfig: IKnexConfig = {
  // development: {
  //   client: "sqlite3",
  //   useNullAsDefault: true,
  //   connection: {
  //     filename: `${__dirname}/dev.sqlite`,
  //   },
  //   migrations: {
  //     directory: "./dev/migrations/",
  //     tableName: "dbmigrations",
  //   },
  //   seeds: {
  //     directory: "dev/seeds",
  //   },
  //   pool: {
  //     afterCreate: (connection, done) => {
  //       connection.run("PRAGMA foreign_keys = ON", done);
  //     },
  //   },
  // },
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DB_URI,
    migrations: {
      directory: `${__dirname}/migrations`,
      tableName: "knex_migrations",
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
  testing: {
    client: "pg",
    useNullAsDefault: true,
    connection: "postgresql://postgres:postgres@localhost:5432/disney_parent_test",
    migrations: {
      directory: `${__dirname}/migrations`,
      tableName: "knex_migrations",
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
  production: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DB_URI,
    migrations: {
      directory: `${__dirname}/migrations`,
      tableName: "knex_migrations",
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};

export default knexConfig;
