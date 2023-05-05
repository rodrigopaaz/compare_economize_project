import { Sequelize } from 'sequelize';
import config from '../config/database';

const sequelize = new Sequelize(config.development)

export default sequelize;
