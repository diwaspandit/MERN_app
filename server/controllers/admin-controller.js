
const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const { get } = require('mongoose');

//get all users function
const getAllUsers = async(req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//delete user function
const deleteUserById = async(req, res) =>{
    try{
        const id = req.params.id;
        await User.deleteOne({_id: id});
        res.status(200).json({message: "User deleted successfully"});
    } catch (error){
        next(error);
    }
};

//single user by id
const getUserById = async(req, res) =>{
    try{
        const id = req.params.id;
        const data = await User.findOne({_id: id}, {password: 0});
        res.status(200).json(data);
    } catch (error){
        next(error);
    }
};

//update user by id
const updateUserById = async (req, res) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const updatedData = await User.updateOne({_id: id}, {
            $set: data
        });
        return res.status(200).json(updatedData);

    } catch (error){
        next(error);
    }
};

//get all contacts
const getAllContacts = async(req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: 'No contacts found' });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

//delete contact function
const deleteContactById = async(req, res) =>{
    try{
        const id = req.params.id;
        await Contact.deleteOne({_id: id});
        res.status(200).json({message: "Contact deleted successfully"});
    } catch (error){
        next(error);
    }
};

module.exports = {getAllUsers, deleteUserById, getUserById, updateUserById, getAllContacts, deleteContactById};