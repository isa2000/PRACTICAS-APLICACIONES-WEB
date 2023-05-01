const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PreparacionSchema = Schema({

    fecha: {
		type: Date,
		required: [true, 'La fecha de la preparacion es obligatoria'],
	},
	hora: {
		type: Number,
		required: [true, 'La hora de la preparacion es obligatoria'],
	},
    costo: {
		type: Number,
		required: [true, 'El costo de la preparacion es obligatorio'],
	},
    tiempoestimado: {
		type: Number,
		required: [true, 'El tiempo estimado de la preparacion es obligatorio'],
	},
    idmesero : { type: Schema.ObjectId, ref: 'Mesero' },
    idreceta : { type: Schema.ObjectId, ref: 'Receta' }

})

module.exports = mongoose.model('Preparacion', PreparacionSchema);