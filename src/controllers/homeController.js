const connection = require('../config/database.js');
const {
    getAllUsers,
    getUserById,
    updateUserByID,
    deleteUserByID,
} = require('../services/CRUDservice.js');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
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
    //console.log('>>> req.params: ', req.params, userId);
    let user = await getUserById(userId);

    res.render('update.ejs', { userEdit: user });
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log('>>> email = : ', email, 'name= ', name, 'city = ', city);

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES(?,?,?)`,
        [email, name, city]
    );
    console.log('>>>check results = ', results);
    res.send('create User success!!');
};

const postUpdateUser = async (req, res) => {
    let id = req.body.userId;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(
        '>>> email = : ',
        email,
        'name= ',
        name,
        'city = ',
        city,
        'userId = ',
        id
    );
    await updateUserByID(id, email, name, city);

    //console.log('>>>check results = ', results);
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
