const Personaje = require('../models/personaje_models.js');

//crear un personaje POST
//enviamos los datos por body y hacemos el esquema de personaje ya tomado, con sus atributos correspondientes
exports.crearPersonaje = async (req, res)=>{
    try{
        const crearPj = new Personaje(req.body);
        //guardadmos la carta en bases de datos
        await crearPj.save();
        res.json(crearPj);
    }catch{
        res.status(500).json({error : err.message});
    }

};

//obtener carta GET:codigo

exports.obtenerPersonaje = async (req, res)=>{
    try{
        //tomamos los datos de la peticion en codigo para buscar la carta que se necesita 
        //req.paramas para tomad el valor del cuerpo de la url 
        const {codigo} = req.params;
        const carta  = await Personaje.findOne({codigo});
        if( carta){
            res.status(200).json(carta);
        }else{
            res.status(404).json({message : " Carta no encontrada"});
        }
    }catch{
        res.status(500).json({ error: err.message });
    }
}
//obtenemos todo los personajes creado GET 
exports.obtenerTodoPersonajes = async ( req, res) =>{ 
    try{
        const numeropage = 1;
        const sizepage = 5;
        const personajes  = await Personaje.find({'estado': true}).skip((numeropage-1)*sizepage).limit(sizepage);
        if( personajes){
            res.status(200).json(personajes);
        }else{
            res.status(404).json({message : err.message});
        }
    }catch{
        res.status(500).json({ error: err.message });
    }

}

