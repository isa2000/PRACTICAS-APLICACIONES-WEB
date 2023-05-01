const axios = require('axios');

console.clear();

// LISTAR CANALES

axios.get('http://localhost:3000/api/Canal/canal/ver')
.then(function (listarCanal) {
  
  const result = listarCanal.data.canal; 
  let n=0

  for (let index = 0; index < result.length; index++) {
    const element = result[index];

    n++

    console.log('');
    console.log(`--------------------- CANAL N° ${n} ---------------------`);
    console.log('Nombre del canal: ' + element.nombre);    
    
  }

  
})

// LISTAR PROGRAMA

axios.get('http://localhost:3000/api/Canal/programa/ver')
.then(function (listarPrograma) {
  
  const result = listarPrograma.data.program; 

  n=0

  result.forEach(element => {

    n++

    console.log('');
    console.log(`--------------------- PROGRAMA N° ${n} ---------------------`);
    console.log('Programa de TV : ' + element.programatv);
    console.log('Categoria : ' + element.categoria);
    console.log('Tipo : ' + element.tipo);
  });

  
})

// LISTAR GUIA

const id = '6349f71555ce0733bf86ddb6'; 

axios.get(`http://localhost:3000/api/Canal/guia/ver/${id}`)
.then(function (listarGuia) {
  
  const result = listarGuia.data.guia_data; 

  console.log('');
  console.log('--------------------- GUIA ---------------------');
  console.log('Canal: ' + result.idcanal.nombre);
  console.log('Programa: ' + result.idprograma.programatv.categoria.tipo);
  console.log('Fecha: ' + result.fecha);
  console.log('Hora: ' + result.hora);
 
})



