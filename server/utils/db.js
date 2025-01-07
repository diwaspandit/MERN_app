const mongoose = require("mongoose");


const url = process.env.MONGODB_URI;
// mongoose.connect(url);

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;





