
const {z} = require("zod");

//login schema
const loginSchema = z.object({
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be at least 3 characters long"})
    .max(255, {message: "Email must be at most 255 characters long"}),

    password: z
    .string({required_error: "Password is required"})
    .trim()
    .min(8, {message: "Password must be at least 8 characters long"})
    .max(255, {message: "Password must be at most 255 characters long"}),
});

//creating a object schema for signup
const signupSchema = loginSchema.extend({
    username: z
    .string({required_error: "Username is required"})
    .trim()
    .min(3, {message: "Username must be at least 3 characters long"})
    .max(255, {message: "Username must be at most 255 characters long"}),

    phone: z
    .string({required_error: "Phone number is required"})
    .trim()
    .min(10, {message: "Phone number must be at least 10 characters long"})
    .max(15, {message: "Phone number must be at most 15 characters long"}),

});



module.exports = {signupSchema, loginSchema};


