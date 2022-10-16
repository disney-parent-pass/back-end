interface IKnexConfig {
  [key: string]: object;
}

const knexConfig: IKnexConfig = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: `postgresql://postgres:postgres@db:5432/disney_parent_dev`,
    migrations: {
      directory: `${__dirname}/migrations`,
      tableName: "knex_migrations",
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
  localdev: {
    client: "pg",
    useNullAsDefault: true,
    connection: `postgresql://postgres:postgres@localhost:5432/disney_parent_dev`,
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
    connection: `postgresql://postgres:postgres@localhost:5432/disney_parent_test`,
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
