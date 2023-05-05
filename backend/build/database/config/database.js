"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const config = {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
};
console.log(config);
exports.default = {
    development: {
        ...config,
        database: process.env.MYSQL_DATABASE || 'lexart_database',
    },
};
//# sourceMappingURL=database.js.map