const express = require('express');
const routerAPI = express.Router();
const {
    getUsersAPI,
    postUsersAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadMultipleFilesAPI,
} = require('../controllers/apiController');

const { postCreateCustomerAPI } = require('../controllers/customerController');

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postUsersAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/files', postUploadMultipleFilesAPI);

routerAPI.post('/customers', postCreateCustomerAPI);

module.exports = routerAPI;
