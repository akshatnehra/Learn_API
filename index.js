const express = require('express');
const app = express();
const connectDB = require('./config/database');

require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT || 4000;

// import routes
const todoRoutes = require('./routes/todos');
app.use('/api/v1', todoRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

connectDB();