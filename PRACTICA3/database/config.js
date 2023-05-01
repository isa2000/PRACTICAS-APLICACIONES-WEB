const mongoose = require("mongoose");
require("dotenv").config({ path: '.env' });

//CONFIGURAMOS LA CONEXION A LA BASE DE DATOS
const conexionDB = async() => {

    try {

       
        await mongoose.connect(process.env.DB_MONGO)
        console.log("\nBase de datos conectada correctamente!");
        console.log("*******************************************");

    } catch (error) {
        console.log(error);
        process.exit(1); 
    }

}

module.exports = conexionDB;