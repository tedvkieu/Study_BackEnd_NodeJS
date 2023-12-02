const express = require('express');
const routerAPI = express.Router();
const {
    getUsersAPI,
    postUsersAPI,
    putUpdateUserAPI,
} = require('../controllers/apiController');

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postUsersAPI);

routerAPI.put('/users', putUpdateUserAPI);

module.exports = routerAPI;
