const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "akwa-his",
});

module.exports = db;
