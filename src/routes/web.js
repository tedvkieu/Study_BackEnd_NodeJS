const express = require('express');
const router = express.Router();
const {
    getHomePage,
    getABC,
    getTed,
    postCreateUser,
} = require('../controllers/homeController');

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/tedvkieu', getTed);

router.post('/create_User', postCreateUser);

module.exports = router;
