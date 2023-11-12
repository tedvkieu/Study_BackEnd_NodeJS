const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getTed} = require('../controllers/homeController');


router.get('/', getHomePage);
  
router.get('/abc', getABC);
  
router.get('/tedvkieu', getTed);

module.exports = router;