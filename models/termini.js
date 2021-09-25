const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const internal = require("stream");
const { float, Float32Array } = require("webidl-conversions");

const terminiSchema = mongoose.Schema({


    name:{
      
}, { collection : 'tereni' });

const terenModel = mongoose.model('teren', terenSchema)

module.exports =  terenModel