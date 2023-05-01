const express = require('express');
const GuiaController = require('../controllers/GuiaController');

const api = express.Router();

api.post('/registrar', GuiaController.registrar);
api.get('/ver/:id', GuiaController.listarporId);
api.put('/editar/:id', GuiaController.editarGuia);
api.delete('/eliminar/:id', GuiaController.eliminarGuia);

module.exports = api