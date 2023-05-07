"use strict";
const config = {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'senhaDoDB',
    host: process.env.MYSQL_HOST || 'localhost',
    database: process.env.MYSQL_DATABASE || 'lexart_database',
    port: Number(process.env.MYSQL_PORT) || 3306,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
};
module.exports = config;
//# sourceMappingURL=database.js.map