const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/', controller.home)
router.post('/info/insertinfo', controller.register)
router.get('/usuarios', controller.users)

module.exports = router
