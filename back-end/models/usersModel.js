const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, 'Please enter a username'],
        unique:[true, 'username already taken']
    },
    password:{
        type:String,
        required:[true, 'Enter a password']
    }},
    {
        timestamps:true,
    }

);

module.exports = mongoose.model('User', userSchema)