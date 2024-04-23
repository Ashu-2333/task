const User = require("../model/user");
const ErrorHandler = require("../utils/ApiError");

const signup = async(req,res) => {
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        throw new ErrorHandler(400, "Invalid user details");
    }

    const userExist = await User.findOne({email});
    if(userExist){
        throw new ErrorHandler(400, "User with this email already exist");
    }

    const newUser = await User.create(req.body);

    const userCreated = await User.findById(newUser._id).select("-password");

    if(!userCreated){
        throw new ErrorHandler(500, "Something went wrong while creating user");
    }

    res.status(200).json({
        success : true,
        newUser
    })
}

const login = async (req,res)=>{
    let {email,password} = req.body;

    if(!(email || password)){
        throw new ErrorHandler(400, "Invalid credentials");
    }
    const isUser = await User.findOne({email});

    if(!isUser){
        throw new ErrorHandler(400, "User with this email doesn't exist");
    }

    if(isUser.password !== password){
        throw new ErrorHandler(400, "Invalid email or password");
    }

    res.status(200).json({
        success : true,
        message : "User logged In successfully",
        isUser
    })
}

module.exports = {signup, login}