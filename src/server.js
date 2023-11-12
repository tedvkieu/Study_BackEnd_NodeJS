const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8888;
const host = process.env.HOST_NAME
const webRoute = require('./routes/web.js')
const configViewEngine = require('./config/viewEngine.js');

configViewEngine(app);
app.use('/', webRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})