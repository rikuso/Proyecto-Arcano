const express  = require('express');
const router = express.Router();
//treamos el control de las cartas
const personaje  = require('../controllers/personajeControllers');
const arma = require('../controllers/armaControllers');
//traemos los joi de la cartas
const { validacionSchemaPersonaje,validacionSchemaArma } =require('../middlewares/validacionMiddlewars');

//creacion del personaje se repite para las otra cartas
//                  RUTAS PERSONAJE
//rutas ira el joi como primer parametro y luego controllador 
router.post('/carta/personaje', validacionSchemaPersonaje , personaje.crearPersonaje);
//get traer toda las carta
router.get('/carta/personaje',personaje.obtenerTodoPersonajes);
//get:codigo
router.get('/carta/personaje/:codigo', personaje.obtenerPersonaje);



//                  RUTAS ARMA
router.post('/carta/arma',validacionSchemaArma, arma.crearArma);
//get traer toda las carta armas
router.get('/carta/arma',arma.obtenerTodaArmas);

module.exports = router;