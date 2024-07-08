const asyncHandler = require("express-async-handler");
const Task = require('../models/tasksModel');


// @desc get all tasks
// @route GET /api/tasks/
// @access private

const getTasks = asyncHandler (async (req, res) => {
    const tasks = await Task.find({userId:req.user.id});
    res.status(200).json(tasks)
});

//@desc GET this one task
//@route GET /api/tasks:id
//@access private

const getTask = asyncHandler(async (req,res) => {
    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(404);
        throw new Error("TASK NOT FOUND");
    }
    res.status(200).json(contact);
});

// @desc add a task
// @route POST /api/tasks/
// @access private

const addTask = asyncHandler (async (req, res) => {
    const {title, description} = req.body;

    if (!title || !description){
        res.status(400);
        throw new Error("Both fields are mandatory")
    }
    const task = await Task.create({
        title,
        description,
        completed:false,
        userId:req.user.id
    });
    res.status(201).json("Task Created Successfully");
});

// @desc edit a task
// @route PUT /api/tasks/:id
// @access private

const editTask = asyncHandler (async (req, res) => {

    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(404);
        throw new Error("Task not found");
    }


    if(task.userId.toString() !== req.user.id){
        res.status(403);
        throw new Error("UNAUTHORIZED")
    }

    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body
    )


    res.status(200).json('Edited Successfully');
});

// @desc delete a task
// @route DELETE /api/tasks/:id
// @access private

const deleteTask = asyncHandler (async (req, res) => {

    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(404);
        throw new Error("Task not found");
    }

    if(task.userId.toString() !== req.user.id){
        res.status(403);
        throw new Error("UNAUTHORIZED DELETION")
    }



    await Task.deleteOne({_id:req.params.id});

    res.status(200).json('Deleted Successfully');
});

module.exports = {getTasks, getTask, editTask, deleteTask, addTask};