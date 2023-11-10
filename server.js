const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Check ABC')
})

app.get('/tedvkieu', (req, res) => {
    res.send('<h1>TEDVKIEU</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})