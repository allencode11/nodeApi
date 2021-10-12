// tslint:disable-next-line: no-var-requires
const Config = require('../config/default');
import { Sequelize, Dialect } from 'sequelize';
import { setupCategoryModel, setupSkillModel, setupUserModel } from './models';

const env = process.env.NODE_ENV === 'production' ? 'production': 'development';

const { username, password, database, host, dialect } = Config.development;

export const sequelizeClient = new Sequelize(database, username, password, { host, dialect: dialect as Dialect, logging: console.log });

setupCategoryModel(sequelizeClient);
setupUserModel(sequelizeClient);
setupSkillModel(sequelizeClient);
