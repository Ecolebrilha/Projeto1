const express = require('express')
const route = express.Router()
const usuarioController = require("../controllers/usuarioController")

route.post('/users', usuarioController.insertUsers)
route.get('/users', usuarioController.listarUsuarios)
route.get('/users_id', usuarioController.selectUsersId)
route.put('/users_update', usuarioController.updateUser)
route.delete('/users_delete', usuarioController.deleteUser)

module.exports = route;