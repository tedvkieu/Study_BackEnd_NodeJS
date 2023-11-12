const connection = require('../config/database.js');

const getHomePage = (req, res) => {
    let users = [];
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>> result: ", results); // results contains rows returned by server
            //res.send(JSON.stringify(users));
            console.log("check user: ", users);
            //res.send('Hello World with Kieu')
            res.send(JSON.stringify(users));
        }
    );
    
}

const getABC = (req, res)=>{
    res.send('Hello ABC')
}
const getTed = (req, res)=>{
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC,
    getTed
}