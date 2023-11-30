const connection = require('../config/database.js');
const {
    getAllUsers,
    getUserById,
    updateUserByID,
    deleteUserByID,
} = require('../services/CRUDservice.js');
const User = require('../models/user');
const getHomePage = async (req, res) => {
    let results = await User.find({});
    return res.render('homePage.ejs', { listUsers: results });
};

const getABC = (req, res) => {
    res.send('Hello ABC');
};
const getTed = (req, res) => {
    res.render('sample.ejs');
};

const getCreateUser = (req, res) => {
    res.render('create.ejs');
};

const getUpdateUser = async (req, res) => {
    const userId = req.params.id;

    let user = await User.findById(userId).exec();

    res.render('update.ejs', { userEdit: user });
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    await User.create({
        email: email,
        name: name,
        city: city,
    });

    res.send('create User success!!');
};

const postUpdateUser = async (req, res) => {
    let id = req.body.userId;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    /*console.log(
        '>>> email = : ',
        email,
        'name= ',
        name,
        'city = ',
        city,
        'userId = ',
        id
    );
    await updateUserByID(id, email, name, city);*/
    await User.updateOne({ _id: id }, { email: email, name: name, city: city });
    res.redirect('/');
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render('delete.ejs', { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
    let id = req.body.userId;
    await deleteUserByID(id);

    res.redirect('/');
};

module.exports = {
    getHomePage,
    getABC,
    getTed,
    getCreateUser,
    getUpdateUser,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
};
