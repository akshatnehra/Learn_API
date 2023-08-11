const mongoose = require('mongoose');
const Todo = require('../models/Todo');

exports.deleteTodo = async(req, res) => {
    try {
        const { id } = req.body;

        const deletedTodo = await Todo.findByIdAndDelete(id);

        res.json({
            update: "Deleted Successfully!",
            deletedTodo: deletedTodo
        })
    } catch (error) {
        console.log(error);
    }
}