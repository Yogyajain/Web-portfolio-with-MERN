const express= require("express");
const router = express.Router();
const {registerUser,loginUser,currentUser}=require("../controller/userController");
const validateToken=require("../middleware/accessTokenHandler");

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",validateToken,currentUser);

module.exports=router;