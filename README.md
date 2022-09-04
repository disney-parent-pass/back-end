# back-end

## Env vars

In order to have knex migrate and manage the DB correctly locally the following environment variables need to be loaded into the current shell session

```
DB_URI=postgresql://postgres:postgres@localhost:5432/disney_parent_dev
DB_URI_TESTING=postgresql://postgres:postgres@localhost:5432/disney_parent_testing
```
