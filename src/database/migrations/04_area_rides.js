/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('area_rides', (AR) => {
    AR.increments().primary()
    AR.integer('area_id')
    AR.foreign('area_id').references('park_area.id')
    AR.string('name', 255).notNullable().unique()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('area_rides')
}
