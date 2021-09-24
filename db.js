const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://fgudek:uom2Eiri@cluster.zpi9e.mongodb.net/fran'

mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB connection succesful')
})

module.exports = mongoose

