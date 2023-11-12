const getHomePage = (req, res)=>{
    res.send('Hello World with Kieu')
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