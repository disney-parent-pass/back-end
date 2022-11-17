import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("area_rides", (AR) => {
    AR.increments().primary();
    AR.integer("area_id");
    AR.foreign("area_id").references("park_area.id");
    AR.string("name", 255).notNullable().unique();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("area_rides");
}
