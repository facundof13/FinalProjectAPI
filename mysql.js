const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root@localhost',
    password: process.env.MYSQL_PASSWORD,
    database: 'final_project',
})

module.exports = pool;