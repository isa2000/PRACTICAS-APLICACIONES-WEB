const express = require('express');
const programaController = require('../controllers/programaController');

const api = express.Router();

api.post('/registrar',  programaController.registrar);
api.get('/ver', programaController.listar);
api.put('/editar/:id', programaController.editarPrograma);
api.delete('/eliminar/:id', programaController.eliminarPrograma);

module.exports = api