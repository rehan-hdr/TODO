const express = require('express');
const dotenv = require("dotenv").config();
const connectDb = require('./config/dbConnection')

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use('/api/tasks', require('./routes/taskRoutes'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});