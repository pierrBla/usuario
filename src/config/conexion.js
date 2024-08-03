const mysql = require('mysql2');

/**
 * @description PROD
 */
 const config = {
  host: "localhost",
  user: "piyklcom_sleep01",
  password: "Di8{q3vz3myy",
  database: "piyklcom_sleep"
};

/**
 * @description LOCAL
 */
/*
const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "books_db"
};
*/

const pool = mysql.createPool(config);

module.exports = pool;