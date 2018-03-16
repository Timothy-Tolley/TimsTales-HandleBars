const express = require('express')
const hbs = require('express-handlebars')
const db = require('./db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.render('hero')
})

router.get('/home', (req, res) => {
  db.displayBlogs()
  .then(data => {
    res.render('home', {data: data})
  })
})

