/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (Users) => {
    Users.increments().primary()
    Users.string('username', 255).notNullable().unique()
    Users.string('password', 255).notNullable()
    Users.string('role')
    Users.foreign('role').references('role').inTable('roles')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
}
