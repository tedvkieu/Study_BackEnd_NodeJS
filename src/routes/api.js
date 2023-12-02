const express = require('express');
const routerAPI = express.Router();
const {
    getUsersAPI,
    postUsersAPI,
    putUpdateUserAPI,
    deleteUserAPI,
} = require('../controllers/apiController');

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postUsersAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

module.exports = routerAPI;
