const Canal = require('../models/canal');

function registrar(req, res){

    const data = req.body;

    const canal = new Canal();

    canal.nombre = data.nombre;
   

    canal.save((err, canal_save) => {

        if(canal_save) {

            res.status(200).send({canal: canal_save})

        } else {

            res.status(500).send(err)

        }

    });

}

function listar(req, res) {
    Canal.find((err, canal_data) => {
        if (canal_data) {
            res.status(200).send({ canal: canal_data })
        } else {
            res.status(403).send({ message: 'No existe el canal' })
        }
    })
}

function editarCanal(req, res) {

    const id = req.params['id'];
    const data = req.body;

    Canal.findByIdAndUpdate(id, {

        nombre : data.nombre

    }, (err, canal_edit) => {

        if (canal_edit) {

            res.status(200).send({ canal: canal_edit });

        } else {

            res.status(500).send(err)

        }

    })

}

function eliminarCanal(req, res) {

    const id = req.params['id'];

    Canal.findByIdAndRemove(id, (err, canal_eliminado) => {

        if (canal_eliminado) {

            res.status(200).send({ canal: canal_eliminado });

        } else {

            res.status(500).send(err)

        }

    })

}

module.exports = {

    registrar,
    editarCanal,
    listar,
    eliminarCanal
    
}