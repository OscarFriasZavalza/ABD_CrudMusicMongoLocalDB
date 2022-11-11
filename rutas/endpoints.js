//Constantes
const express = require('express')
const Alumnos = require('../esquemas/alumnos')
const Aulas = require('../esquemas/aulas')
const Docentes = require('../esquemas/docentes')
const Instrumentos = require('../esquemas/instrumentos')
const Materias = require('../esquemas/materias')
const Salas = require('../esquemas/Salas')
const Salas_reservaciones=require('../esquemas/salas_reservaciones')


const router = express.Router();

//redis conexion
const redis = require('redis')
const client=redis.createClient({
  host: '127.0.0.1',
  port :6379
});
client.connect().then(() => console.log("Conectado a redis"))
.catch((error) => console.error(error));


//*TODO CRUD PARA ALUMNOS///////////////////////////////////////////

//*crear alumnos
router.post("/alumnos", (req, res) => {
  
    const alumnos = Alumnos(req.body);

    client.set('POST A ALUMNOS '+fecha_actual(),' SE HIZO POST A ALUMNOS');

    alumnos
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  //*mostrar todos los alumnos
  router.get("/alumnos", (req, res) => {
  

    client.set('GET A ALUMNOS'+fecha_actual(),'SE HIZO GET A ALUMNOS');
    
    Alumnos
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  });
  
//* mostrar alumnos por curp
router.get("/alumnos/:curp", (req, res) => {
    const  curp  = req.params;

    client.set('GET A ALUMNOS ESPECIFICO '+curp+' '+ fecha_actual(),'SE HIZO get A ALUMNOS');

    Alumnos
      .find(curp)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
 //* Actualizar a Alumno
router.put("/alumnos/:curp", (req, res) => {
    const { curp } = req.params;
    const { nombre, fecha_nac, telefonos,instrumento,materias_cursadas} = req.body;

    client.set('PUT a alumno'+fecha_actual(),'SE HIZO PUT A ALUMNOS');


    Alumnos
      .updateOne({ curp: curp }, { $set: { nombre, fecha_nac, telefonos,instrumento,materias_cursadas } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
 
 //TODO CRUD PARA AULAS/////////////////////////////////////////////////////////////////
 router.post("/aulas", (req, res) => {
  const aulas = Aulas(req.body);

  client.set('POST a AULAS'+fecha_actual(),'SE HIZO POST A AULAS');

  aulas
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//*mostrar todas las aulas
router.get("/aulas", (req, res) => {

  client.set('GET a AULAS'+fecha_actual(),'SE HIZO GET A AULAS');

  Aulas
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* mostrar aulas por codigo
router.get("/aulas/:codigo", (req, res) => {

  client.set('GET A UNA AULA'+fecha_actual(),'SE HIZO GET A AULA');

  const  codigo  = req.params;
  Aulas
    .find(codigo)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* Actualizar a aulas
router.put("/aulas/:codigo", (req, res) => {

  client.set('PUT a AULAS'+fecha_actual(),'SE HIZO PUT A AULAS');

  const { codigo } = req.params;
  const { nombre, num_max} = req.body;
  Aulas
    .updateOne({ codigo: codigo }, { $set: {codigo, nombre, num_max } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


 //TODO CRUD PARA DOCENTES/////////////////////////////////////////////////////////////////
 router.post("/docentes", (req, res) => {

  client.set('POST a DOCENTES'+fecha_actual(),'SE HIZO POST A DOCENTES');

  const docentes = Docentes(req.body);
  docentes
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//*mostrar todos los docentes
router.get("/docentes", (req, res) => {
    
  client.set('GET a DOCENTES'+fecha_actual(),'SE HIZO GET A DOCENTES');
    
  Docentes
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* mostrar todos los docentes por curp
router.get("/docentes/:curp", (req, res) => {

  client.set('GET a DOCENTE EN ESPECIFICO'+fecha_actual(),'SE HIZO GET A DOCENTE EN ESPECIFICO');

  const  curp  = req.params;
  Docentes
    .find(curp)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* Actualizar a Docente
router.put("/docentes/:curp", (req, res) => {

  client.set('PUT a DOCENTE'+fecha_actual(),'SE HIZO PUT A DOCENTE');


  const { curp } = req.params;
  const { nombre,instrumentos_domina,reservaciones} = req.body;
  Docentes
    .updateOne({ curp: curp }, { $set: {curp, nombre,instrumentos_domina,reservaciones} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


 //TODO CRUD PARA INSTRUMENTOS/////////////////////////////////////////////////////////////////
 router.post("/instrumentos", (req, res) => {

  client.set('POST a INSTRUMENTOS'+fecha_actual(),'SE HIZO POST A INSTRUMENTOS');

  const instrumento = Instrumentos(req.body);
  instrumento
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//*mostrar todos los instrumentos
router.get("/instrumentos", (req, res) => {

  client.set('GET a INSTRUMENTOS'+fecha_actual(),'SE HIZO GET A INSTRUMENTOS');

  Instrumentos
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* mostrar todos los instrumentos por id
router.get("/instrumentos/:id", (req, res) => {
    
  client.set('GET a INSTRUMENTO EN ESPECIFICO'+fecha_actual(),'SE HIZO GET A INSTRUMENTOS');

  const  id  = req.params;
  Instrumentos
    .find(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* Actualizar a Instrumentos
router.put("/instrumentos/:id", (req, res) => {

  client.set('PUT a INSTRUMENTO '+fecha_actual(),'SE HIZO PUT A INSTRUMENTOS');

  const  {id}  = req.params;
  const { nombre,tipo,edad_recomendada} = req.body;
  Instrumentos
    .updateOne({ id: id }, { $set: {id,nombre,tipo,edad_recomendada} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


 //TODO CRUD PARA Materias/////////////////////////////////////////////////////////////////
 router.post("/materias", (req, res) => {

  client.set('POST a MATERIAS '+fecha_actual(),'SE HIZO POST A MATERIASS');

  const materias = Materias(req.body);
  materias
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//*mostrar Todas las materias
router.get("/materias", (req, res) => {

  client.set('GET a MATERIAS '+fecha_actual(),'SE HIZO GET A MATERIASS');

  Materias
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* mostrar materias por codigo
router.get("/materias/:codigo", (req, res) => {

  client.set('GET a MATERIAS EN ESPECIFICO '+fecha_actual(),'SE HIZO GET A MATERIAS EN ESPECIFICOS');

  const  codigo  = req.params;
  Materias
    .find(codigo)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* Actualizar materias
router.put("/materias/:codigo", (req, res) => {
  
  client.set('PUT a MATERIAS '+fecha_actual(),'SE HIZO PUT A MATERIASS');


  const  {codigo}  = req.params;
  const { nombre,cantidad_horas,docente} = req.body;
  Materias
    .updateOne({ codigo: codigo }, { $set: {codigo,nombre,cantidad_horas,docente} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


 //TODO CRUD PARA Salas/////////////////////////////////////////////////////////////////
 router.post("/salas", (req, res) => {

  client.set('POST a SALAS '+fecha_actual(),'SE HIZO POST A SALASS');

  const salas = Salas(req.body);
  salas
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//*mostrar Todas las salas
router.get("/salas", (req, res) => {

  client.set('GET a SALAS '+fecha_actual(),'SE HIZO GET A SALASS');

  Salas
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* mostrar salas por id
router.get("/salas/:id", (req, res) => {

  client.set('GET a SALAS '+fecha_actual(),'SE HIZO GET A SALASS');

  const  id  = req.params;
  Salas
    .find(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//* Actualizar Salas
router.put("/salas/:id", (req, res) => {

  client.set('PUT a SALAS '+fecha_actual(),'SE HIZO PUT A SALASS');

  const  {id}  = req.params;
  const { nombre,ubicacion,aforo} = req.body;
  Salas
    .updateOne({ id: id }, { $set: {id ,nombre,ubicacion,aforo} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

function fecha_actual() {
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  return hoy.toUTCString();
}

  //crud para reservaciones
  
  router.post("/reservaciones", (req, res) => {
  
    const reservaciones = Salas_reservaciones(req.body);
    reservaciones
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  //*mostrar todas las reservaciones
  router.get("/reservaciones", (req, res) => {
    Salas_reservaciones
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  });
  
//* mostrar reservaciones por id
router.get("/reservaciones/:id", (req, res) => {
    const  id  = req.params;

    Salas_reservaciones
      .find(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
 //* Actualizar Reservacion
router.put("/reservaciones/:id", (req, res) => {
    const { id } = req.params;

Salas_reservaciones
      .updateOne({ id: id },req.body)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


  //?consultas de la clase-----------------------
  /*a.	Q1. Muestre a todos los alumnos y las materias en las que están inscritos. 
Incluya el código de la  consulta y la imagen del resultado.
*/


/*
	Q2. Muestre un docente en específico y las materias que imparte.
 Incluya el código de la  consulta y la imagen del resultado.
*/

//* mostrar materias por codigo
router.get("/materias_docente/:docente", (req, res) => {

  client.set('GET a MATERIAS EN ESPECIFICO '+fecha_actual(),'SE HIZO GET A MATERIAS EN ESPECIFICOS');

  const  docente  = req.params;
  Materias
    .find(docente)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


/* c.	Q3. Muestre a todos los docentes que han realizado reservaciones de salas de conciertos. 
 Incluya el código de la  consulta y la imagen del resultado.*/



//*TODO EXPORTACION DE RUTAS
  module.exports = router;