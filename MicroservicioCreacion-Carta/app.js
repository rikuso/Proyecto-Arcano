const express = require('express');
const conectarDB = require('./config/db');
//personaje ruta
const cartasjeRouter = require('./route/cartaRoute');

//require('dotenv').config();


const app = express();

//conexion a mongodb
conectarDB();//mongodb://localhost:27017/api/carta/personaje

//middlewar 
app.use(express.json());

//rutas se llama ya la ruta de la carta con ruta 
app.use('/api',cartasjeRouter);


// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
