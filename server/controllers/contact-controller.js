const Contact = require("../models/contact-model");

const ContactForm = async (req, res) => {
    try{
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({
            success: true,
            message: "message sent successfully"
        });
    } catch (error){
        next(error);
        const customError = {
            status: 500,
            message: "message not delivered",
            extraDetails: error.message,
        };
        next(customError);
    }
};

module.exports = {ContactForm};