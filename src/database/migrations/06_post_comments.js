/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('post_comments', (pc) => {
    pc.increments().primary()
    pc.string('message')
    pc.integer('commenter')
    pc.integer('post_id')
    pc.integer('next_comment')
    pc.foreign('commenter').references('users.id')
    pc.foreign('post_id').references('posts.id')
    pc.foreign('next_comment').references('post_comments.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('post_comments')
}
