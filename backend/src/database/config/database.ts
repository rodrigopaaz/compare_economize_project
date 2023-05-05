import { config as loadEnv } from 'dotenv';
import { Dialect } from 'sequelize';

loadEnv();

interface SequelizeConfig {
  username: string;
  password: string;
  host: string;
  port: number;
  dialect: Dialect;
  dialectModule: any;
}

const config: SequelizeConfig = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
};
console.log(config)
export default {
  development: {
    ...config,
    database: process.env.MYSQL_DATABASE || 'lexart_database',
  },
};
