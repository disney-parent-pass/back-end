# back-end

## Motivation

Gain _more_ experience building out an API server with _user authentication_ using TypeScript and the KnexJS query builder.

## Local Development ( w/ server containerized)

1. Start the deployment: `docker compose up --build`

## Local Development (w/ out server containerized)

### Running the API

1. Setup the DB: `docker compose -f compose.dev.yml up --build`
2. Export:

- `export NODE_ENV=development`
- `export DB_URI=postgresql://postgres:postgres@localhost:5432/disney_parent_dev`

### Running Unit Tests

1. Setup the DB: `docker compose up --build`
2. Export:

- `export NODE_ENV=testing`
- `export DB_URI_TESTING=postgresql://postgres:postgres@localhost:5432/disney_parent_test`

3. Run migrations: `npm run migratetest`
4. Seed the database: `npx knex seed:run --knexfile ./src/database/knexfile.ts`

### Note about Setting Env Vars

In order to have Knex migrate and manage the DB correctly locally the following environment variables need to be loaded into the current shell session.

- `DB_URI=postgresql://postgres:postgres@localhost:5432/disney_parent_dev`
- `DB_URI_TESTING=postgresql://postgres:postgres@localhost:5432/disney_parent_test`



## Acknowledgements and Resources

- [KnexJS Docs](https://knexjs.org/)
- [RFC 7231 | HTTP Response for a user already existing](https://www.rfc-editor.org/rfc/rfc7231#page-58)
- [HTTP Status Code Guide](https://www.websiterating.com/resources/http-status-codes-cheat-sheet/)
