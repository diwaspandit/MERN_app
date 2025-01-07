const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//Home Page

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to the home page with router');
    } catch (error){
        console.log(error);
    }
}

//Register Page
const register = async (req, res) => {
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body;
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(400).json({message: "Email already exists"});
        }

        const userCreated = await User.create({username, email, phone, password});

        return res.status(201).json({msg: "Registration successful", token: await userCreated.generateToken(), userID: userCreated._id.toString()});
    } catch (error){
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
}


//Login Page
const login = async (req, res) =>{
    try{
        const {email, password} = req.body;

        const userExist = await User.findOne({email: email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        const isPasswordValid = await userExist.comparePassword(password);

        if(isPasswordValid){
            return res.status(200).json({msg: "Login successful", token: await userExist.generateToken(), userID: userExist._id.toString()});
        } else{
            return res.status(401).json({message: "Invalid Credentials"});
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
}

//User Logic to send user data
const user = async (req, res) =>{
    try{
        const userData = req.user;
        if (!userData) {
            return res.status(404).json({ 
                message: "User not found" 
            });
        }
        return res.status(200).json({userData});
    } catch (error){
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
};


module.exports = {home, register, login, user};