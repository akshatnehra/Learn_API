const express = require('express');
const router = express.Router();

// import controller
const { createTodo } = require('../controllers/createTodo');
const { getTodos } = require('../controllers/getTodos');
const { updateTodo } = require('../controllers/updateTodo');
const { deleteTodo } = require('../controllers/deleteTodo');

// API Routes
router.post('/createTodo', createTodo); // C
router.get('/getTodos', getTodos);      // R
router.post('/updateTodo', updateTodo); // U
router.post('/deleteTodo', deleteTodo); // D

module.exports = router;