const { array } = require("@hapi/joi");
const mongoose =  require("mongoose");
const familiarjeSchema = new mongoose.Schema({

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
    vida : {
        type : Number,
        default : 600,
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
    ser:{
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
    piedraNecesarias: {
        type : Array,
        required : true
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

module.exports  = mongoose.model('Familiar',familiarjeSchema)