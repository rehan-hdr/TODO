const asyncHandler = require("express-async-handler");
const Task = require('../models/tasksModel');


// @desc get all tasks
// @route GET /api/tasks/
// @access public

const getTasks = asyncHandler (async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks)
});

// @desc add a task
// @route POST /api/tasks/
// @access public

const addTask = asyncHandler (async (req, res) => {
    const {title, description} = req.body;

    if (!title || !description){
        res.status(400);
        throw new Error("Both fields are mandatory")
    }
    const task = await Task.create({
        title,
        description,
        completed:false
    });
    res.status(201).json("Task Created Successfully");
});

// @desc edit a task
// @route PUT /api/tasks/:id
// @access public

const editTask = asyncHandler (async (req, res) => {

    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(404);
        throw new Error("Task not found");
    }

    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body
    )


    res.status(200).json('Edited Successfully');
});

// @desc delete a task
// @route DELETE /api/tasks/:id
// @access public

const deleteTask = asyncHandler (async (req, res) => {

    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(404);
        throw new Error("Task not found");
    }
    await Task.deleteOne({_id:req.params.id});

    res.status(200).json('Deleted Successfully');
});

module.exports = {getTasks, editTask, deleteTask, addTask};