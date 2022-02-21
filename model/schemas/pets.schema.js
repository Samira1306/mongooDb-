/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const petsSchema = new mongoose.Schema({ 
    contact:{
        type: {"name":"String",
        "phone": "String",
        "adress": "String"
    },
        required: true,
    },
    petname:{
        type: "String",
        required: true
    },
    service:{
        type: "String",
        required: true
    },
    diseases:{
        type: "String",
        required: true
    },
    petAge:{
        type: "Number",
        required: true
    },
    petBreed:{
        type: "String",
        required: true    
    }
});

/** schema exportation */
petsSchema.plugin(validator);
module.exports = petsSchema;