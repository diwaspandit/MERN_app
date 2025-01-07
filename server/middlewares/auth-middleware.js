const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        
        if (!token) {
            return res.status(401).json({ 
                message: "Unauthorized. No token provided." 
            });
        }

        // Remove "Bearer " and trim whitespace
        const jwtToken = token.replace("Bearer", "").trim();
        
        if (!jwtToken) {
            return res.status(401).json({ 
                message: "Token not found in Authorization header" 
            });
        }

        try {
            // Verify token
            const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
            
            // Get user data
            const userData = await User.findOne({ email: isVerified.email })
                .select("-password"); // Exclude password

            if (!userData) {
                return res.status(401).json({ 
                    message: "User not found or token invalid" 
                });
            }

            // Set user data in request
            req.user = userData;
            req.token = jwtToken;  // Store cleaned token
            req.userID = userData._id;

            next();

        } catch (jwtError) {
            return res.status(401).json({ 
                message: "Invalid or expired token" 
            });
        }

    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(500).json({ 
            message: "Internal server error in authentication" 
        });
    }
};

module.exports = authMiddleware;