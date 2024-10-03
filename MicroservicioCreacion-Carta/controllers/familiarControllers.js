const Familiar = require('../models/familiar_models');

//------------------------- POST-----------------------------------------------------------------------
//enviamos los datos por body y hacemos el esquema de Familiar ya tomado, con sus atributos correspondientes
exports.crearFamiliar = async (req, res)=>{
    try{
        const crearFamiliar = new Familiar(req.body);
        //guardadmos la carta en bases de datos
        await crearFamiliar.save();
        res.status(200).json(crearFamiliar);
    }catch(err) {
        res.status(500).json({error : err.message});
    }

};
//------------------------GET------------------------------------------------------------------------
//obtener carta GET:codigo

exports.obtenerFamiliarCodigo = async (req, res)=>{
    try{
        //tomamos los datos de la peticion en codigo para buscar la carta que se necesita 
        //req.paramas para tomad el valor del cuerpo de la url 
        const {codigo} = req.params;
        const obtenerFamiliar  = await Familiar.find({codigo});
        if( obtenerFamiliar){
            res.status(200).json(obtenerFamiliar);
        }else{
            res.status(404).json({message : " Carta no encontrada"});
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}

//obtenemos todo los Familiars creado GET 
exports.obtenerTodoFamiliares = async ( req, res) =>{ 
    try{
        const numeropage = 1;
        const sizepage = 5;
        const obtenerTodosFamiliares  = await Familiar.find({'estado': true}).skip((numeropage-1)*sizepage).limit(sizepage);
        if( obtenerTodosFamiliares){
            res.status(200).json(obtenerTodosFamiliares);
        }else{
            res.status(404).json({ message: 'Cartas no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }

}

//---------------------------- PUT------------------------------------------------------------------------
//put codigo
exports.actualizarFamiliar  = async(req, res)=>{
    try{
        const {codigo} = req.params
        /*actualizamos el Familiar por medio de findOneAndUpdate ,enviamos el parametro de busque que sea igual, el parametro
          de cuerpo del navegador donde ira la infomacion actualizar, y luego damos la opcionde new true para la acctulizacion y mostrar 
          la actualizacion
        */
        const actualizarFamiliar = await Familiar.findOneAndUpdate({codigo},req.body,{new: true});
        if(actualizarFamiliar){
            res.status(200).json(actualizarFamiliar);
        }else{
            res.status(404).json({ message: 'Carta no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}


//------------------------DELETE------------------------------------------------------------------------
exports.eliminarFamiliar = async(req, res)=>{
    try{
        const {codigo} = req.params;
        const eliminarFamiliar = await Familiar.findOneAndUpdate({codigo},{estado: false},{new: true});
        if(eliminarFamiliar){
            res.status(200).json({message : 'Carta desactivadad'});
        }else{
            res.status(404).json({ message: 'Carta no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}