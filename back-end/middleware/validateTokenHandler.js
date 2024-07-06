const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(
    async (req, res, next) => {

        let token;
            let authHeader = req.headers.Authorization || req.headers.authorization
            if (authHeader && authHeader.startsWith("Bearer")){

                // index 1 refers to the bodies of text splitted by the space " "
                token = authHeader.split(" ")[1];   
                
                jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                    if(err){
                        res.status(401);
                        throw new Error("USER NOT AUTHORIZED");
                    }
                    req.user = decoded.user;
                    next();

                });

                if(!token){
                    res.status(401);
                    throw new Error("USER NOT AUTHORIZED OR TOKEN IS MISSING");
                }
            }
    }
);

module.exports = validateToken;