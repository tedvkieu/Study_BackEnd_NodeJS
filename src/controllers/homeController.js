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

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log('>>> email = : ', email, 'name= ', name, 'city = ', city);

    connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES(?,?,?)`,
        [email, name, city],

        function (err, results) {
            console.log(results);
            res.send('create User success!!');
        }
    );
};

module.exports = {
    getHomePage,
    getABC,
    getTed,
    postCreateUser,
};
