const mysql = require("mysql2");

const conConfig = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "akwa-his",
  multipleStatements: true,
};

const db = mysql.createConnection(conConfig);

module.exports = { db, conConfig };
