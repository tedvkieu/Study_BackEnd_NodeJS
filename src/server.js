const express = require('express');
const path = require('path');
const app = express();
const port = 8081

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Check ABC')
})

app.get('/tedvkieu', (req, res) => {
  //res.send('<h1>TEDVKIEU</h1>')
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})