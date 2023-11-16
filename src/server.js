require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME
const connection = require('./config/database.js')
const webRoute = require('./routes/web.js')
const configViewEngine = require('./config/viewEngine.js');

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
app.use('/', webRoute)


/* simple query
connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log(">>> result: ", results); // results contains rows returned by server
    //console.log(">>> fields: ", fields); // fields contains extra meta data about results, if available
  }
);*/

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})