const mongoose = require('mongoose');
//require('dotenv').config();


const conexionDB = async()=>{
    
    //await mongoose.connect(process.env.MONGO_URI)
    try{

        await mongoose.connect('mongodb://localhost:27017/creacionPj');
        console.log('conectado a mongodb....');
    }catch{
        err  => console.error('Error conectando a MongoDB:', err.message);
        process.exit(1)
    }
    /*
    await mongoose.connect('mongodb://localhost:27017/creacionPj')
    .then(()=>console.log('conectado a mongodb....'))
    .catch(err  => console.error('Error conectando a MongoDB:', err.message))
    .catch(process.exit(1));
    */
 
};

module.exports = conexionDB;
