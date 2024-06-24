const asyncHandler=require("express-async-handler");

//describe register users
//route GET api/contacts
//access public

const registerUser=asyncHandler(async (req,res) => {
    res.json({message:"register user"})
});

//describe login the users
//route GET api/contacts
//access public

const loginUser=asyncHandler(async (req,res) => {
    res.json({message:"login user"})
});

//describe current user information
//route GET api/contacts
//access public

const currentUser=asyncHandler(async(req,res) => {
    res.json({message:"current user information"})
});

module.exports={registerUser,loginUser,currentUser};