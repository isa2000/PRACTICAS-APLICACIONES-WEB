const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');

// CONEXION A BD
const conexionDB = require('./database/config'); 


const app = express();

//ROUTES
const canal_routes = require('./routes/canal');
const programa_routes = require('./routes/programa');
const guia_routes = require('./routes/guia');


conexionDB(); 
app.use(cors());


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


//USO DE RUTAS DEFINIENDO LA RUTA PADRE
app.use('/api/Canal/canal', canal_routes);
app.use('/api/Canal/programa', programa_routes)
app.use('/api/Canal/guia', guia_routes)
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.clear();
    console.log("\nServidor corriendo en el puerto: " + port);
    console.log("\nCONEXION CORRECTA");
    console.log("*******************************************");
});