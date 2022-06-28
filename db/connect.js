const mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'desafio'
})

module.exports = pool
