const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res,next) => {
    let token;
    let authHandler = req.headers.Authorization || req.headers.authorization;
    if(authHandler && authHandler.startsWith("Bearer")){
        token=authHandler.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded) =>{
            if(err){
                res.status(401);
                throw new Error("User not authorized");
            }
            req.user=decoded.user;
            next();
        });
        if(!token){
            res.status(401);
            throw new Error("User is not autherized or token is missing");
        }
    }
});

module.exports=validateToken;