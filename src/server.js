require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const mongoose = require('mongoose');
const connection = require('./config/database.js');
const webRoute = require('./routes/web.js');
const apiRoute = require('./routes/api.js');
const configViewEngine = require('./config/viewEngine.js');
const fileUpload = require('express-fileupload');

// default options
app.use(fileUpload());

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
app.use('/', webRoute);
app.use('/v1/api', apiRoute);
(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend Zero app listening on port ${port}`);
        });
    } catch (error) {
        console.log('error connect to db: ', error);
    }
})();
