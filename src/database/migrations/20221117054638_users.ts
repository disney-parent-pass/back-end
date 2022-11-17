import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (Users) => {
    Users.increments().primary();
    Users.string("username", 255).notNullable().unique();
    Users.string("password", 255).notNullable();
    Users.integer("role_id").notNullable();
    Users.foreign("role_id").references("id").inTable("roles");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users");
}
