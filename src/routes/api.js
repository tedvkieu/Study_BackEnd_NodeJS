const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI } = require('../controllers/apiController');

routerAPI.get('/', (req, res) => {
    res.send('hello world with API');
});

routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: 'hello world first api',
    });
});

routerAPI.get('/users', getUsersAPI);

module.exports = routerAPI;
