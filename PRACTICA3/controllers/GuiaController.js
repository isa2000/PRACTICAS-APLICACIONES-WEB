const Guia = require('../models/guia');

function registrar(req, res){

    const data = req.body;

    const guia = new Guia();

    guia.fecha = data.fecha;
    guia.hora = data.hora;
    guia.idcanal = data.idcanal;
    guia.idprograma = data.idprograma;

    guia.save((err, guia_save) => {

        if(guia_save) {

            res.status(200).send({guia: guia_save, message: 'la guia es correcta'})

        } else {

            res.status(500).send(err)

        }

    });

}

function listarporId(req, res) {

    const id = req.params['id'];

    Guia.findById(id).populate('idcanal').populate('idprograma').exec((err, guia_data) => {
        if(guia_data) {

            res.status(200).send({guia_data})

        }
    })
}

function editarGuia(req, res) {

    const id = req.params['id'];
    const data = req.body;

    Guia.findByIdAndUpdate(id, {

        fecha : data.fecha,
        hora : data.hora,
        idmesero : data.idcanal,
        idreceta : data.idprograma

    }, (err, guia_edit) => {

        if (guia_edit) {

            res.status(200).send({ guia: guia_edit });

        } else {

            res.status(500).send(err)

        }

    })

}

function eliminarGuia(req, res) {

    const id = req.params['id'];

    Guia.findByIdAndRemove(id, (err, guia_eliminada) => {

        if (guia_eliminada) {

            res.status(200).send({ guia: guia_eliminada });

        } else {

            res.status(500).send(err)

        }

    })

}

module.exports = {

    registrar,
    editarGuia,
    listarporId,
    eliminarGuia
    
}