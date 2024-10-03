const mongoose =  require("mongoose");
const habilidadSchema = new mongoose.Schema({

    nombre : {
        type : String,
        required : true,
        unique : true,
    },
    rareza:{
        type : String,
        required : true,
        default : "1"
    },
    imagen:{
        type : String,
        required : false
    },
    color : {
        type : Array,
        required : true,
    },
    estado : {
        type : Boolean,
        default : true
    },
    piedraNecesarias: {
        type : Array,
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
    tiempoCasteo: {
        type : Array,
        required : true,
        default : ["0"]
    },
    codigo: {
        type : String,
        required : true,
        unique : true,
    },
    fechaCreacion: {
        type : Date,
        default : Date.now
    }
    
})

module.exports  = mongoose.model('Habilidad',habilidadSchema)