const knex = require('knex')
const config = require('./knexfile').development

const devDb = knex(config)

module.exports = {
  displayBlogs
}

function displayBlogs (testDb) {
  const db = testDb || devDb
  return db('posts')
    .select()
}