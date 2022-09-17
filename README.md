# back-end

## Motivation

Gain *more* experience building out an API server with *user authentication* using TypeScript and the KnexJS query builder. 

## Setting Env vars

In order to have knex migrate and manage the DB correctly locally the following environment variables need to be loaded into the current shell session

```
DB_URI=postgresql://postgres:postgres@localhost:5432/disney_parent_dev
DB_URI_TESTING=postgresql://postgres:postgres@localhost:5432/disney_parent_testing
```

## Seeding Data

In order to seed the Roles in the database:

```
npx knex seed:run --knexfile ./src/database/knexfile.ts
```


## Acknowledgements and Resources

- [KnexJS Docs](https://knexjs.org/)
- [RFC 7231 | HTTP Response for a user already existing](https://www.rfc-editor.org/rfc/rfc7231#page-58)
- [HTTP Status Code Guide](https://www.websiterating.com/resources/http-status-codes-cheat-sheet/)