const mongoose =  require("mongoose");
const personajeSchema = new mongoose.Schema({

    nombre : {
        type : String,
        required : true,
        unique : true,
    },
    vida : {
        type : Number,
        default : 600,
    },
    imagen:{
        type : String,
        required : false,
        default : "imagen"
    },
    color : {
        type : [String],
        required : true,
    },
    estado : {
        type : Boolean,
        default : true
    },
    ser:{
        type : [String],
        required : true
    },
    habilidadPasiva:{
        type : Map,
        required : true 
    },
    habilidadArcana: {
        type : Map,
        required : true 
    },
    piedraNecesarias: {
        type : Map, //puede se un color o multiples color piedra= {rojo: 2,marillo:1}
        requiere : true
    },
    codigo: {
        type : String,
        requiere : true,
    },
    fechaCreacion: {
        type : Date,
        default : Date.now
    }
    
})

module.exports  = mongoose.model('Personaje',personajeSchema)