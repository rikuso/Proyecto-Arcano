const Arma = require('../models/arma_models');

//creamos el metodo post 
exports.crearArma = async(req, res)=>{
    try{
        const crearArma = new Arma(req.body);
        await crearArma.save();
        res.json(crearArma);
    }catch{
        res.status(500).json({error : err.message});
    }
}

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
    }catch{
        res.status(500).json({error : err.message});
    }
}