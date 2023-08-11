const mongoose = require('mongoose');   
require('dotenv').config();

function connectDB() {
    mongoose.connect(process.env.DB_URL)
    .then(() => {  
        console.log("MongoDB connected");
     })
    .catch((err) => {
        console.log(err);
        process.exxit(1);
    });
}

module.exports = connectDB;