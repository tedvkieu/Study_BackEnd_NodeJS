const User = require('../models/user');
const { uploadSingleFile } = require('../services/fileService');
const getUsersAPI = async (req, res) => {
    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

const postUsersAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await User.create({
        email: email,
        name: name,
        city: city,
    });

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};
const putUpdateUserAPI = async (req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await User.updateOne(
        { _id: userId },
        { email: email, name: name, city: city }
    );

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};
const deleteUserAPI = async (req, res) => {
    let id = req.body.userId;
    let user = await User.deleteOne({ _id: id });

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const postUploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let result = await uploadSingleFile(req.files.image);
    console.log('check result = ', result);
    return res.send('ok single');
};
module.exports = {
    getUsersAPI,
    postUsersAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
};
