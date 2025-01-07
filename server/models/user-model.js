const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

//secure the password with bcryptjs
userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')){
        next();
    }
    try{
        const saltRounds = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRounds);
        user.password = hash_password;
    } catch(error){
        next(error);
    }
});

//compare the password
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
};



//json web token
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userID: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,

        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '3d',
        }
    );
    } catch (error){
        console.error(error);
    }

}


//define the collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;