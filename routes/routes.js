const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/', controller.home)
router.post('/info/insertinfo', controller.register)
router.get('/usuarios', controller.users)
router.get('/usersid/:id', controller.usersid)
router.get('/useredit/:id', controller.useredit)
router.post('/usuarios/updateduser', controller.updateduser)
router.post('/usuarios/remove/:id', controller.remove)

module.exports = router
