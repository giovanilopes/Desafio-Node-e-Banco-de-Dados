const mysql = require('mysql')
const pool = require('../db/connect')

exports.home = (req, res) => {
  res.render('home')
}

exports.register = (req, res) => {
  const nome = req.body.nome
  const email = req.body.email
  const idade = req.body.idade
  const cpf = req.body.cpf

  const insert = `INSERT INTO registro (nome, email, idade, cpf) VALUES ('${nome}', '${email}', ${idade}, '${cpf}')`

  pool.query(insert, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('/')
  })
}

exports.users = (req, res) => {
  const queryusuarios = 'SELECT * FROM registro'

  pool.query(queryusuarios, function (err, data) {
    if (err) {
      console.log(err)
      return
    }

    const usuarios = data
    console.log(usuarios)

    res.render('usuarios', { usuarios })
  })
}
