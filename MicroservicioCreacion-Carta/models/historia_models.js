const { array } = require("@hapi/joi");
const mongoose =  require("mongoose");
const historiaSchema = new mongoose.Schema({

    nombre : {
        type : String,
        required : true,
        unique : true,
    },
    lore: {
        type : String,
        required : false
    },
    razas:{
        type : Array,
        required : true
    },
    imagen : {
        type : [String],//imagenes de la historia logos arte
        required : false,
    },
    estado : {
        type : Boolean,
        default : true
    },
    territorio : {
        type : String,
        required : false
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

module.exports  = mongoose.model('Historia',historiaSchema)