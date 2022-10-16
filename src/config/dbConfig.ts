import knex from "knex";
import knexConfig from "../database/knexfile";

const env = process.env.DB_ENV || "localdev";

export const db = knex(knexConfig[env]);
