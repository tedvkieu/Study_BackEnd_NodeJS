require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME
const mysql = require('mysql2')
const webRoute = require('./routes/web.js')
const configViewEngine = require('./config/viewEngine.js');

configViewEngine(app);
app.use('/', webRoute)

//test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'tedvkieu'
});
// simple query
connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log(">>> result: ", results); // results contains rows returned by server
    console.log(">>> fields: ", fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})