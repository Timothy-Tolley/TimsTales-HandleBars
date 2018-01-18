const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const routes = require('./routes')

module.exports = server 

server.engine('hbs', hbs ({
  extname: 'hbs',
  defaultLayout : "main"
}))

server.set('view engine', hbs)

server.use('/', routes)
