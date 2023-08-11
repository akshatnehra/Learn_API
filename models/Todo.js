const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 200,
    }, 
    description: {
        type: String,
        required: false,
        maxLength: 500,
    }, 
    createdOn: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    updatedOn: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});

module.exports = mongoose.model("todo", todoSchema);