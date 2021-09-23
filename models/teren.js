const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const internal = require("stream");
const { float, Float32Array } = require("webidl-conversions");

const terenSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imageurls:[],
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    phonenumber: {
        type: Number, 
        required: true
    },    
    currentbookings: [],
    information: {
        type: String,
        required: true
    }
}, { collection : 'tereni' });

const terenModel = mongoose.model('teren', terenSchema)

module.exports =  terenModel