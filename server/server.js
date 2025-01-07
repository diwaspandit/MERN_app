require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDB = require("./utils/db");
const {errorMiddleware} = require("./middlewares/error-middleware");

// handling cors policy
const corsOptions = {
    origin: "https://mern-app-client-ralb.onrender.com",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

//mount the router
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//define the admin route
app.use("/api/admin",adminRoute);

app.use(errorMiddleware);

//start the server
const port = process.env.PORT || 3000;

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
    });
});



