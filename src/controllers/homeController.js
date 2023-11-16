const connection = require('../config/database.js');

const getHomePage = (req, res) => {
    
    return res.render('homePage.ejs');
    
}

const getABC = (req, res)=>{
    res.send('Hello ABC')
}
const getTed = (req, res)=>{
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log(">>> res.body: ", req.body)
    res.send("create new user");
}

module.exports = {
    getHomePage,
    getABC,
    getTed, postCreateUser
}