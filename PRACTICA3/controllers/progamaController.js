const Programa = require('../models/programa');

function registrar(req, res){

    const data = req.body;

    const program = new Receta();

    program.programatv = data.programatv;
    program.categoria = data.categoria;
    program.tipo = data.tipo;


    program.save((err, program_save) => {

        if(program_save) {

            res.status(200).send({program: program_save, message: 'se registro un programa'})

        } else {

            res.status(500).send(err)

        }

    });

}

function listar(req, res) {
    Programa.find((err, program_data) => {
        if (program_data) {
            res.status(200).send({ program: program_data })
        } else {
            res.status(403).send({ message: 'No existe el programa' })
        }
    })
}

function editarPrograma(req, res) {

    const id = req.params['id'];
    const data = req.body;

    Programa.findByIdAndUpdate(id, {

        programatv : data.programatv,
        categoria : data.categoria,
        tipo : data.tipo,

    }, (err, program_edit) => {

        if (program_edit) {

            res.status(200).send({ program: program_edit });

        } else {

            res.status(500).send(err)

        }

    })

}

function eliminarPrograma(req, res) {

    const id = req.params['id'];

    Program.findByIdAndRemove(id, (err, program_eliminada) => {

        if (program_eliminada) {

            res.status(200).send({ prgram: program_eliminada, message: 'programa eliminado' });

        } else {

            res.status(500).send(err)

        }

    })

}

module.exports = {

    registrar,
    editarPrograma,
    listar,
    eliminarPrograma
    
}