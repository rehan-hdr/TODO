const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Add a title']
    },
    description:{
        type:String,
        required:[true, 'Add a description']
    },
    completed:{
        type:Boolean,
        required:[true, 'Mark the task completed or otherwise']

    } },
    {
        timestamps:true
    });

    module.exports = mongoose.model('Task', taskSchema);