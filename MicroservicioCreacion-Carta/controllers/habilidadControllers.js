const Habilidad = require('../models/habilidad_models');

//------------------------- POST-----------------------------------------------------------------------
//enviamos los datos por body y hacemos el esquema de Familiar ya tomado, con sus atributos correspondientes
exports.crearCartaHabilidad = async (req, res)=>{
    try{
        const crearHabilidad = new Habilidad(req.body);
        await crearHabilidad.save();
        res.status(200).json(crearHabilidad);
    }catch(err) {
        res.status(500).json({error : err.message});
    }

};
//------------------------GET------------------------------------------------------------------------
//obtener carta GET:codigo

exports.obtenerHabilidadCodigo = async (req, res)=>{
    try{
        //tomamos los datos de la peticion en codigo para buscar la carta que se necesita 
        //req.paramas para tomad el valor del cuerpo de la url 
        const {codigo} = req.params;
        const obtenerHabilidad  = await Habilidad.find({codigo});
        if( obtenerHabilidad){
            res.status(200).json(obtenerHabilidad);
        }else{
            res.status(404).json({message : " Carta no encontrada"});
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}

//obtenemos todo los Habilidads creado GET 
exports.obtenerTodoHabilidades = async ( req, res) =>{ 
    try{
        const numeropage = 1;
        const sizepage = 5;
        const obtenerTodosHabilidades  = await Habilidad.find({'estado': true}).skip((numeropage-1)*sizepage).limit(sizepage);
        if( obtenerTodosHabilidades){
            res.status(200).json(obtenerTodosHabilidades);
        }else{
            res.status(404).json({ message: 'Cartas no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }

}

//---------------------------- PUT------------------------------------------------------------------------
//put codigo
exports.actualizarHabilidad  = async(req, res)=>{
    try{
        const {codigo} = req.params
        /*actualizamos el Habilidad por medio de findOneAndUpdate ,enviamos el parametro de busque que sea igual, el parametro
          de cuerpo del navegador donde ira la infomacion actualizar, y luego damos la opcionde new true para la acctulizacion y mostrar 
          la actualizacion
        */
        const actualizarHabilidad = await Habilidad.findOneAndUpdate({codigo},req.body,{new: true});
        if(actualizarHabilidad){
            res.status(200).json(actualizarHabilidad);
        }else{
            res.status(404).json({ message: 'Carta no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}


//------------------------DELETE------------------------------------------------------------------------
exports.eliminarHabilidad = async(req, res)=>{
    try{
        const {codigo} = req.params;
        const eliminarHabilidad = await Habilidad.findOneAndUpdate({codigo},{estado: false},{new: true});
        if(eliminarHabilidad){
            res.status(200).json({message : 'Carta desactivadad'});
        }else{
            res.status(404).json({ message: 'Carta no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}