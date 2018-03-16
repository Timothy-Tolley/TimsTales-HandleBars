const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const routes = require('./routes')


module.exports = server 

server.use(express.static('public'))

server.engine('hbs', hbs ({
  extname: 'hbs',
}))

server.set('view engine', 'hbs')

server.use('/', routes)
server.use('./home', routes)
