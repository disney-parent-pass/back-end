# back-end

## Motivation

Gain _more_ experience building out an API server with _user authentication_ using TypeScript and the KnexJS query builder.

## Project tooling:

- [KnexJS](https://knexjs.org/)
- [Bash Build System](https://github.com/labaneilers/bs)
- Docker / Docker compose
- NPM scripts

## Data Flow Diagram

<img src="./artifacts/backend_dataflow_v2.png" alt="Backend dataflow diagram" width=650 height=550 />

## Local Development ( w/ server containerized)

Note: You could add a volume mounted at the project directory and see changes real time.

1. Start the deployment: `docker compose up --build`

## Local Development (w/ out server containerized)

### Running the API

1. Setup the DB: `docker compose -f compose.dev.yml up --build`
2. Export:

- `export DB_ENV=localdev`
- `export NODE_ENV=localdev`
- `export DB_URI=postgresql://postgres:postgres@localhost:5432/disney_parent_dev`

3. Run migrations: `npm run migrate`
4. Seed the database: `npm run seed`

### Running Unit Tests

1. Setup the DB: `docker compose -f compose.dev.yml up --build`
2. Export:

- `export DB_ENV=testing`
- `export NODE_ENV=testing`
- `export DB_URI_TESTING=postgresql://postgres:postgres@localhost:5432/disney_parent_test`

3. Run migrations: `npm run migratetest`
4. Seed the database: `npm run seed`

## Acknowledgements and Resources

- [KnexJS Docs](https://knexjs.org/)
- [RFC 7231 | HTTP Response for a user already existing](https://www.rfc-editor.org/rfc/rfc7231#page-58)
- [HTTP Status Code Guide](https://www.websiterating.com/resources/http-status-codes-cheat-sheet/)
