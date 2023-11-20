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
    postDeleteUser,
    postHandleRemoveUser,
} = require('../controllers/homeController');

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/tedvkieu', getTed);

router.get('/create', getCreateUser);

router.get('/update/:id', getUpdateUser);

router.post('/create_User', postCreateUser);

router.post('/update_User', postUpdateUser);

router.post('/delete_User/:id', postDeleteUser);
router.post('/delete_User/', postHandleRemoveUser);

module.exports = router;
