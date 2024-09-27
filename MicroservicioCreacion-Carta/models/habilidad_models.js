const mongoose =  require("mongoose");
const habilidadSchema = new mongoose.Schema({

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
    piedraNecesarias: {
        type : [String],
        requiere : true
    },
    habilidadArcana: {
        type : [String],
        required : true 
    },
    tiempoCasteo: {
        type : [String],
        requiered : true,
        default : ["0"]
    },
    efecto: {
        type : [String], //el efecto es donde se pondra rayo, tiempo, fuego, destruccion el efecto del arma
        requiered : true
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

module.exports  = mongoose.model('Habilidad',habilidadSchema)