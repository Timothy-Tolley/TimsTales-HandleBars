const express = require('express')
const hbs = require('express-handlebars')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.render('home', null)
})