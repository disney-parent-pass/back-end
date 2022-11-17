import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("post_comments", (pc) => {
    pc.increments().primary();
    pc.string("message");
    pc.integer("commenter");
    pc.integer("post_id");
    pc.integer("next_comment");
    pc.foreign("commenter").references("users.id");
    pc.foreign("post_id").references("posts.id");
    pc.foreign("next_comment").references("post_comments.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("post_comments");
}
