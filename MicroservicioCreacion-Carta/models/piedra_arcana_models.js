const mongoose =  require("mongoose");
const piedraArcanaSchema = new mongoose.Schema({

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

module.exports  = mongoose.model('Piedra',piedraArcanaSchema)