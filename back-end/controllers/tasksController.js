const asyncHandler = require("express-async-handler");


// @desc get all tasks
// @route GET /api/tasks/
// @access public

const getTasks = asyncHandler (async (req, res) => {
    res.status(200).json('yea bro');
});

// @desc add a task
// @route POST /api/tasks/
// @access public

const addTask = asyncHandler (async (req, res) => {
    res.status(200).json('ADDING BRUh bro');
});

// @desc edit a task
// @route PUT /api/tasks/:id
// @access public

const editTask = asyncHandler (async (req, res) => {
    res.status(200).json('EDITING bro');
});

// @desc delete a task
// @route DELETE /api/tasks/:id
// @access public

const deleteTask = asyncHandler (async (req, res) => {
    res.status(200).json('DELETING VRYGro');
});

module.exports = {getTasks, editTask, deleteTask, addTask};