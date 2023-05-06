
const express =require ('express')
const cors = require('cors')
const path = require('path');

// INICIAR 
const servidor = express();

servidor.use(cors()).use(express.json())

servidor.get('/canal', (req,res)=>{
    res.status(200).sendFile(urlcanal);
})

servidor.get('/programa',(req,res)=>{
    res.status(200).sendFile(urlprograma);
})

servidor.get('/guia',(req,res)=>{
    res.status(200).sendFile(urlguia);
})

// RUTAS 

const urlcanal = path.join(__dirname, "./canal.html")
const urlprograma = path.join(__dirname, "./programa.html")
const urlguia = path.join(__dirname, "./guia.html")


servidor.use(cors()).use(express.json())

servidor.get('/canal', (req,res)=>{
    res.status(200).sendFile(urlcanal);
})

servidor.get('/programa',(req,res)=>{
    res.status(200).sendFile(urlprograma);
})

servidor.get('/guia',(req,res)=>{
    res.status(200).sendFile(urlguia);
})


//PUERTO DEL SERVIDOR

const PORT = 8080;

servidor.listen(PORT, ()=>{
    console.clear();
    console.log("******************************************************");
    console.log(`Servidor corriendo http://localhost:${PORT}`);
    console.log("******************************************************");
})