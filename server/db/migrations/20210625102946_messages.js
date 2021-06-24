exports.up = function (knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('date')
    table.string('message')
    table.string('photoUrl')
    table.string('quote')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('messages')
}
