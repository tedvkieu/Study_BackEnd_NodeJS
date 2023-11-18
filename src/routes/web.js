const express = require('express');
const router = express.Router();
const {
    getHomePage,
    getABC,
    getTed,
    getCreateUser,
    getUpdateUser,
    postCreateUser,
} = require('../controllers/homeController');

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/tedvkieu', getTed);

router.get('/create', getCreateUser);

router.get('/update', getUpdateUser);

router.post('/create_User', postCreateUser);

module.exports = router;
