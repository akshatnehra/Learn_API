// Nodemon -> Automatic restract server on chanegs
// Express -> Framework for Node.js
// dotenv -> Environment variables
// morgan -> Logger
// body-parser -> Parse body of requests
// mongoose -> MongoDB


// Importing modules
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Read the .env file and assign it to process.env
dotenv.config();
// Assign the environment variables to a constant   
const ENV = process.env;

// Below line creates an Express application.
const app = express();

// type of requests -> GET, POST, PUT, DELETE
// GET -> Get data from server
// POST -> Send data to server
// PUT -> Update data on server
// DELETE -> Delete data from server

// Connect to MongoDB
mongoose.connect(ENV.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
    
}).catch((err) => {
    console.log(err);   
});

// When route is visited -> callback function is executed
// Below line is used to make a get request to the root of the server.
app.get('/', (req, res) => {
    // Send the response to the client.
    res.send('Hello World');    
});

// See url: http://localhost:3000/home in browser to see the response. 
app.get('/home', (req, res) => {
    // Send the response to the client.
    res.send('Hello from Home');    
});

// Set the port number to 3000 if the port number is not set in the environment variables.
const port = ENV.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})