const Todo = require('../models/Todo');


exports.createTodo = async (req, res) => {
    try {
        // Extract data from request
        const { title, description } = req.body;

        console.log(title);
        console.log(description);
        // Create a todo object and insert in the database
        const response = await Todo.create({ title, description });

        // Send json reponse on success
        res.status(200).json({
            success: true,
            data: response,
            message: 'Todo added successfully!',
        })
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: 'Internal Server Error!',
            message: err.message,
        })
    }
}