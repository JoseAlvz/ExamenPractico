//Se creara un schema (Nuestra base de datos)
const mongoose = require('mongoose');

let schema = mongoose.Schema;

let PintoresSchema = new schema({

    nombre:{
        type:String,  
    },
    escuela:{
        type:String,  
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);



