const asyncHandler = require('express-async-handler');
const User = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc register user
// @route POST /api/users/register
// @access public

const registerUser = asyncHandler (async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400);
        throw new Error("BOTH ARE MANDATORY");
    }
    const availableUser = await User.findOne({username});
    if (availableUser){
        res.status(400);
        throw new Error("Username taken already bro");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        password: hashedPassword
    });

    if (user){
        res.status(200).json({message:'Registered'});
    }
    else {
        res.status(400);
        throw new Error("SOMETHINGW ENT WRONG BRUHH")
    }

});

// @desc login user
// @route POST /api/users/login
// @access public

const loginUser = asyncHandler (async (req, res) => {

    const {username, password} = req.body;

    if(!username || !password){
        res.status(400);
        throw new Error("BOTH ARE MANDATORY");
    }

    const user = await User.findOne({username});

    if (user && (await bcrypt.compare(password, user.password))){

        const accessToken = await jwt.sign({
            user:{
                username:user.username,
                id:user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '15m'}
    );

    res.status(200).json({accessToken});
    }
    else {
        res.status(401);
        throw new Error("UNAUTHORIZED")
    }





});

//@desc Current User Info Delay
//@route GET /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});



module.exports = {registerUser, loginUser, currentUser}