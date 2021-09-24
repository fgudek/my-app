const express = require("express");

const app = express();

const dbConfig = require('./db')
const tereniRoute = require('./routes/tereniRoute')

app.use(express.json())

app.use('/api/tereni', tereniRoute)

const port = process.env.port || 5000;

app.listen(port, () => console.log('Node server started using nodemon'));