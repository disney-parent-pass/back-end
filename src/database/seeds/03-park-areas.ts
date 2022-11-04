import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("park_area").del();

  // Inserts seed entries
  await knex("park_area").insert([
    { id: 1, name: "Fantasy Land" },
    { id: 2, name: "Tomorrow Land" },
  ]);
}
