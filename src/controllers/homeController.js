const connection = require('../config/database.js');

const getHomePage = (req, res) => {
    return res.render('homePage.ejs');
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
    postCreateUser,
};
