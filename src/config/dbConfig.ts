import knex from "knex";
import knexConfig from "../database/knexfile";

console.log(`${process.env.DB_ENV}`)

const env = process.env.DB_ENV || "localdev";

export const db = knex(knexConfig[env]);
