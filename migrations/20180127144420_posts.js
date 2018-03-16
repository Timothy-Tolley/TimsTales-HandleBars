
exports.up = (knex, Promise) => {
  return knex.schema.createTable('posts', table =>{
    table.increments('id')
    table.string('title')
    table.string('blurb')
    table.string('img_prim')
    table.string('img_sec')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('posts')
}
