const express  = require('express');
const router = express.Router();
//treamos el control de las cartas
const personaje  = require('../controllers/personajeControllers');
const familiar = require('../controllers/familiarControllers');
const arma = require('../controllers/armaControllers');
const habilidad = require('../controllers/habilidadControllers');
//traemos los joi de la cartas
const { validacionSchemaPersonaje, validacionSchemaFamiliar ,validacionSchemaArma,validacionSchemaHabiliadad } =require('../middlewares/validacionMiddlewars');

//creacion del personaje se repite para las otra cartas
//                  RUTAS PERSONAJE
//rutas ira el joi como primer parametro y luego controllador 
router.post('/carta/personaje', validacionSchemaPersonaje , personaje.crearPersonaje);
//get traer toda las carta
router.get('/carta/personaje',personaje.obtenerTodoPersonajes);
//get:codigo
router.get('/carta/personaje/:codigo', personaje.obtenerPersonajeCodigo);
//put :codigo
router.put('/carta/personaje/:codigo', validacionSchemaPersonaje ,personaje.actualizarPersonaje);
//delete :codigo estado:false
router.delete('/carta/personaje/:codigo',personaje.eliminarPersonaje);


//                  RUTAS FAMILIAR
router.post('/carta/familiar', validacionSchemaFamiliar , familiar.crearFamiliar);
//get traer toda las carta
router.get('/carta/familiar',familiar.obtenerTodoFamiliares);
//get:codigo
router.get('/carta/familiar/:codigo', familiar.obtenerFamiliarCodigo);
//put :codigo
router.put('/carta/familiar/:codigo', validacionSchemaFamiliar ,familiar.actualizarFamiliar);
//delete :codigo estado:false
router.delete('/carta/familiar/:codigo',familiar.eliminarFamiliar);

//                  RUTAS ARMA
router.post('/carta/arma',validacionSchemaArma, arma.crearArma);
//get traer toda las carta armas
router.get('/carta/arma',arma.obtenerTodaArmas);
//get :codigo
router.get('/carta/arma/:codigo',arma.obtenerArmaCodigo);
//put:codigo 
router.put('/carta/arma/:codigo', validacionSchemaArma ,arma.actualizarArma);
//delete :codigo estado:false
router.delete('/carta/arma/:codigo',arma.eliminarArma);

//                  RUTAS HABILIDAD
router.post('/carta/habilidad',validacionSchemaHabiliadad, habilidad.crearCartaHabilidad);
//get traer toda las carta habilidades
router.get('/carta/habilidad',habilidad.obtenerTodoHabilidades);
//get :codigo
router.get('/carta/habilidad/:codigo',habilidad.obtenerHabilidadCodigo);
//put:codigo 
router.put('/carta/habilidad/:codigo', validacionSchemaHabiliadad ,habilidad.actualizarHabilidad);
//delete :codigo estado:false
router.delete('/carta/habilidad/:codigo',habilidad.eliminarHabilidad);

module.exports = router;