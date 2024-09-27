const mongoose =  require("mongoose");
const familiarjeSchema = new mongoose.Schema({

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
        required : false
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
        type : [String],
        required : true 
    },
    habilidadArcana: {
        type : [String],
        required : true 
    },
    piedraNecesarias: {
        type : [String],
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

module.exports  = mongoose.model('Familiar',familiarjeSchema)