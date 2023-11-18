const connection = require('../config/database.js');
const { getAllUsers } = require('../services/CRUDservice.js');

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

const getUpdateUser = (req, res) => {
    res.render('update.ejs');
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

module.exports = {
    getHomePage,
    getABC,
    getTed,
    getCreateUser,
    getUpdateUser,
    postCreateUser,
};
