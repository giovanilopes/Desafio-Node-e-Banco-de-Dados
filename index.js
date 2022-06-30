const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const routes = require('./routes/routes')

//dotenv
require('dotenv').config()

//requisito para o post
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

//handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//css
app.use(express.static('public'))

//routes
app.use(routes)

app.listen(process.env.SERVER_PORT)
