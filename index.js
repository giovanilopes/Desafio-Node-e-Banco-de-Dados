const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mysql = require('mysql')

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

//rota inicial
app.get('/', function (req, res) {
  res.render('home')
})

//puxando os dados do navegador para o mysql
app.post('/info/insertinfo', (req, res) => {
  const nome = req.body.nome
  const email = req.body.email
  const idade = req.body.idade
  const cpf = req.body.cpf

  const insert = `INSERT INTO registro (nome, email, idade, cpf) VALUES ('${nome}', '${email}', ${idade}, '${cpf}')`

  con.query(insert, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('/')
  })
})

//criando uma rota que mostre os usuarios registrados
app.get('/usuarios', (req, res) => {
  const queryusuarios = 'SELECT * FROM registro'

  con.query(queryusuarios, function (err, data) {
    if (err) {
      console.log(err)
      return
    }

    const usuarios = data
    console.log(usuarios)

    //handlebars
    res.render('usuarios', { usuarios })
  })
})

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'desafio'
})

con.connect(function (err) {
  if (err) {
    console.log(err)
  }
  console.log('Conectado!')

  app.listen(3000)
})
