const Personaje = require('../models/personaje_models.js');

//------------------------- POST-----------------------------------------------------------------------
//enviamos los datos por body y hacemos el esquema de personaje ya tomado, con sus atributos correspondientes
exports.crearPersonaje = async (req, res)=>{
    try{
        const crearPj = new Personaje(req.body);
        //guardadmos la carta en bases de datos
        await crearPj.save();
        res.status(200).json(crearPj);
    }catch(err) {
        res.status(500).json({error : err.message});
    }

};
//------------------------GET------------------------------------------------------------------------
//obtener carta GET:codigo

exports.obtenerPersonajeCodigo = async (req, res)=>{
    try{
        //tomamos los datos de la peticion en codigo para buscar la carta que se necesita 
        //req.paramas para tomad el valor del cuerpo de la url 
        const {codigo} = req.params;
        const obtenerPj  = await Personaje.find({codigo});
        if( obtenerPj){
            res.status(200).json(obtenerPj);
        }else{
            res.status(404).json({message : " Carta no encontrada"});
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}
// GET:Id    se tiene que ser por nombre y id por el indexe
/*
exports.obtenerPersonajeId = async (req, res)=>{
    try{
        //tomamos los datos de la peticion en codigo para buscar la carta que se necesita 
        //req.paramas para tomad el valor del cuerpo de la url 
        const id = req.params.id;
        const ObtenerPjId  = await Personaje.find({'_id':id});
        if( ObtenerPjId){
            res.status(200).json(ObtenerPjId);
        }else{
            res.status(404).json({message : " Carta no encontrada"});
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}
    */
//obtenemos todo los personajes creado GET 
exports.obtenerTodoPersonajes = async ( req, res) =>{ 
    try{
        const numeropage = 1;
        const sizepage = 5;
        const obtenerTodosPj  = await Personaje.find({'estado': true}).skip((numeropage-1)*sizepage).limit(sizepage);
        if( obtenerTodosPj){
            res.status(200).json(obtenerTodosPj);
        }else{
            res.status(404).json({ message: 'Cartas no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }

}

//---------------------------- PUT------------------------------------------------------------------------
//put codigo
exports.actualizarPersonaje  = async(req, res)=>{
    try{
        const {codigo} = req.params
        /*actualizamos el personaje por medio de findOneAndUpdate ,enviamos el parametro de busque que sea igual, el parametro
          de cuerpo del navegador donde ira la infomacion actualizar, y luego damos la opcionde new true para la acctulizacion y mostrar 
          la actualizacion
        */
        const actualizarPj = await Personaje.findOneAndUpdate({codigo},req.body,{new: true});
        if(actualizarPj){
            res.status(200).json(actualizarPj);
        }else{
            res.status(404).json({ message: 'Carta no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}


//------------------------DELETE------------------------------------------------------------------------
exports.eliminarPersonaje = async(req, res)=>{
    try{
        const {codigo} = req.params;
        const eliminarPj = await Personaje.findOneAndUpdate({codigo},{estado: false},{new: true});
        if(eliminarPj){
            res.status(200).json({message : 'Carta desactivadad'});
        }else{
            res.status(404).json({ message: 'Carta no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}