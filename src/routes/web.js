const express = require('express');
const router = express.Router();
const {
    getHomePage,
    getABC,
    getTed,
    getCreateUser,
    getUpdateUser,
    postCreateUser,
    postUpdateUser,
} = require('../controllers/homeController');

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/tedvkieu', getTed);

router.get('/create', getCreateUser);

router.get('/update/:id', getUpdateUser);

router.post('/create_User', postCreateUser);

router.post('/update_User', postUpdateUser);

module.exports = router;
