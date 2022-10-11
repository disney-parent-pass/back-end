import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {username: "tester-oliver", password: "$2a$10$d72bTqzsg7Cv4LQPmTJ4M.fCyrqTALlr8AXDjjkZnRB74UyvbqBgi", role_id: 1}
  ]);
}