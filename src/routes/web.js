const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
router.get('/abc', (req, res) => {
    res.send('Check ABC')
})
  
router.get('/tedvkieu', (req, res) => {
    //res.send('<h1>TEDVKIEU</h1>')
    res.render('sample.ejs')
})

module.exports = router;