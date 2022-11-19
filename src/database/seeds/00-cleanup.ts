import { Knex } from "knex";
import { clean } from "knex-cleaner";

export async function seed(knex: Knex): Promise<void> {
  // Reset the DB
  return clean(knex, {
    mode: "truncate",
    ignoreTables: ["knex_migrations", "knex_migrations_lock"],
  });
}
