import knex from "knex";
import knexConfig from "../database/knexfile";

const env = process.env.DB_ENV || "development";

export const db = knex(knexConfig[env]);
