require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require('./config/database.js');
const webRoute = require('./routes/web.js');
const configViewEngine = require('./config/viewEngine.js');

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
app.use('/', webRoute);

connection();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
