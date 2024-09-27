const mongoose =  require("mongoose");

const armaSchema = new mongoose.Schema({

    nombre : {
        type : String,
        required : true,
        unique : true,
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
    ataque:{
        type : Number,
        required : true
    },
    durabilidad: {
        type: Number,
        requiered : true,
        default : 5
    },
    habilidadPasiva:{
        type : Map,
        required : true 
    },
    habilidadArcana: {
        type : Map,
        required : true 
    },
    efecto: {
        type : Array, //el efecto es donde se pondra rayo, tiempo, fuego, destruccion el efecto del arma
        requiered : true
    },
    tipoArma: {
        type : [String], 
        requiered : true
    },
    piedraNecesarias: {
        type : Map,
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

module.exports  = mongoose.model('Arma',armaSchema)