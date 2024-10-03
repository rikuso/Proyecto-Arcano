const mongoose =  require("mongoose");

const armaSchema = new mongoose.Schema({

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
    ataque:{
        type : Number,
        required : true
    },
    durabilidad: {
        type: Number,
        required : true,
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
        required : true
    },
    tipoArma: {
        type : Array, 
        required : true
    },
    piedrasNecesarias: {
        type : Array, //se maneja un array para guarda un map con su orden [{"amarrilo":2,"verde":1},{"verde":1}] en el indice 0 es la primer consumo de habilidad
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

module.exports  = mongoose.model('Arma',armaSchema)