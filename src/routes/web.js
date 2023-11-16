const express = require('express');
const router = express.Router();
const {
    getHomePage,
    getABC,
    getTed,
    getCreateUser,
    postCreateUser,
} = require('../controllers/homeController');

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/tedvkieu', getTed);

router.get('/create', getCreateUser);

router.post('/create_User', postCreateUser);

module.exports = router;
