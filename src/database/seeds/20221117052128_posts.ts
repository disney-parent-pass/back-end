import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("posts").del();

  // Inserts seed entries
  await knex("posts").insert([
    {
      id: 1,
      is_open: true,
      time: new Date(2022, 3, 1, 13, 0),
      number_of_kids: 3,
      zapped: false,
      user_id: 1,
      care_taker_id: null,
      park_area_id: 1,
      area_ride_id: 1,
    },
  ]);
}
