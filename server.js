const express = require("express");

const app = express();

const dbConfig = require('./db')
const tereniRoute = require('./routes/tereniRoute')
const bookingsRoute=require('./routes/bookingsRoute')


app.use(express.json())
const usersRoute =require ('./routes/usersRoute')

app.use('/api/tereni', tereniRoute)
app.use('/api/users', usersRoute)
app.use('./api/booking', bookingsRoute)



const port = process.env.port || 5000;

app.listen(port, () => console.log('Node server started using nodemon'));