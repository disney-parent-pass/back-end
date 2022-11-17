import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("area_rides").del();

  // Inserts seed entries
  await knex("area_rides").insert([
    { id: 1, area_id: 1, name: "Prince Charming Redal Carrousel" },
    { id: 2, area_id: 1, name: "Mad Tea Party" },
    { id: 3, area_id: 2, name: "Tomorrowland Speedway" },
    { id: 4, area_id: 2, name: "Space Mountain" },
  ]);
}
