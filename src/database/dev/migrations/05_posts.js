/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('posts', (posts) => {
    posts.increments().primary()
    posts.binary('is_open')
    posts.timestamp(true, true)
    posts.integer('number_of_kids').notNullable()
    posts.binary('zapped')
    posts.integer('user_id')
    posts.integer('care_taker_id')
    posts.integer('park_area_id')
    posts.integer('area_ride_id')

    posts.foreign('user_id').references('users.id')
    posts.foreign('care_taker_id').references('users.id')
    posts.foreign('park_area_id').references('park_area.id')
    posts.foreign('area_ride_id').references('area_rides.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts')
}
