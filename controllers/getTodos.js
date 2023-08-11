const mongoose = require('mongoose');
const Todo = require('../models/Todo');

exports.getTodos = async(req, res) => {
    try {
        const allTodos = await Todo.find();
        res.json({
            todos: allTodos
        })
    } catch (error) {
        console.log(error);
    }
}