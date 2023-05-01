const { Schema, model } = require('mongoose');

const CocineroSchema = Schema({
	nombre: {
		type: String,
		required: [true, 'El nombre del cocinero es obligatorio']
	},
	sueldobasico: {
		type: Number,
		required: [true, 'El sueldo basico del cocinero debe ser ingresado']
	}
});


module.exports = model('Cocinero', CocineroSchema);