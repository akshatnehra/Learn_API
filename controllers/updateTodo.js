const mongoose = require('mongoose');
const Todo = require('../models/Todo');

exports.updateTodo = async(req, res) => {
    try {
        const { id, title, description } = req.body;

        // Search Todo and Update
        const updatedTodo = await Todo.findOneAndUpdate({_id: id}, {title: title, description: description, updatedOn: Date.now()}, {new: true});

        res.json({
            updatedTodo: updatedTodo
        })
    } catch (error) {
        console.log(error);
    }
}