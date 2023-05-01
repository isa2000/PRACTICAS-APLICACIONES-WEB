const { Schema, model } = require('mongoose');

const RecetaSchema = Schema({
	nombreplato: {
		type: String,
		required: [true, 'El nombre del plato es obligatorio'],
		unique: true,
	},
	ingredientes: {
		type: String,
		required: [true, 'Los ingredientes de la receta es obligatorio'],
		unique: true,
	},
	cantidad: {
		type: Number,
		required: [true, 'La cantidad de la receta es obligatorio'],
		unique: true,
	}
});

module.exports = model('Receta', RecetaSchema);