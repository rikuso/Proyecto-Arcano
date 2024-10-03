const Arma = require('../models/arma_models');

//------------------------- POST-----------------------------------------------------------------------
//creamos el metodo post 
exports.crearArma = async(req, res)=>{
    try{
        const crearArma = new Arma(req.body);
        await crearArma.save();
        res.status(200).json(crearArma);
    }catch(err) {
        res.status(500).json({error : err.message});
    }
}

//------------------------- GET-----------------------------------------------------------------------
exports.obtenerTodaArmas = async(req,res)=>{
   //EN LA PARTE DE PAGINACION DEBEMOS CAMABIR LOS PARAMETRO DE NUMEROPAGE POR LOQ UE ENVIE DESDE EL SERVIDOR
    try{
        const numeropage = 1;
        const sizepage = 5;
        const armas = await Arma.find({'estado':true}).skip((numeropage-1)*sizepage).limit(sizepage);
        if(armas){
            res.status(200).json(armas);
        }else{
            res.status(404).json({message : err.message});
        }
    }catch(err) {
        res.status(500).json({error : err.message});
    }
}

//get :codigo

exports.obtenerArmaCodigo = async (req , res)=>{
    try{
        const {codigo} = req.params;
        const obtenerArmaCodigo = await Arma.find({codigo});
        if(obtenerArmaCodigo){
            res.status(200).json(obtenerArmaCodigo);
        }else{
            res.status(404).json({message : err.message});
        }
    }catch(err) {
        res.status(500).json({error : err.message});
    }
} 

//------------------------- PUT-----------------------------------------------------------------------
//put codigo
exports.actualizarArma  = async(req, res)=>{
    try{
        const {codigo} = req.params
        /*actualizamos el personaje por medio de findOneAndUpdate ,enviamos el parametro de busque que sea igual, el parametro
          de cuerpo del navegador donde ira la infomacion actualizar, y luego damos la opcionde new true para la acctulizacion y mostrar 
          la actualizacion
        */
        const actualizarArma = await Arma.findOneAndUpdate({codigo},req.body,{new: true});
        if(actualizarArma){
            res.status(200).json(actualizarArma);
        }else{
            res.status(404).json({ message: 'Carta no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}


//------------------------- DELETE-----------------------------------------------------------------------
exports.eliminarArma = async(req, res)=>{
    try{
        const {codigo} = req.params;
        const eliminarArma = await Arma.findOneAndUpdate({codigo},{estado: false},{new: true});
        if(eliminarArma){
            res.status(200).json({message : 'Carta desactivadad'});
        }else{
            res.status(404).json({ message: 'Carta no encontrada' });
        }
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}