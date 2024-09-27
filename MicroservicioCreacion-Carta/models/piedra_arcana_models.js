const mongoose =  require("mongoose");
const piedraArcanaSchema = new mongoose.Schema({

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
    codigo: {
        type : String,
        requiere : true,
    },
    fechaCreacion: {
        type : Date,
        default : Date.now
    }
    
})

module.exports  = mongoose.model('Piedra',piedraArcanaSchema)