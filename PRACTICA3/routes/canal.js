const express = require('express');
const CanalController = require('../controllers/CanalController');

const api = express.Router();

api.post('/registrar', CanalController.registrar);
api.get('/ver', CanalController.listar);
api.put('/editar/:id', CanalController.editarCanal);
api.delete('/eliminar/:id', CanalController.eliminarCanal);

module.exports = api