// tslint:disable-next-line: no-var-requires
import config from './config/default';
import { Category, Skill, User } from 'repositories';
import { Sequelize, Dialect } from 'sequelize';
import { setupCategoryModel, setupSkillModel, setupUserModel } from './models';

const env = process.env.NODE_ENV === 'production' ? 'production': 'development';

const { username, password, database, host, dialect } = config[env];

export const sequelizeClient = new Sequelize(database, username, password, { host, dialect: dialect as Dialect, logging: console.log });

setupCategoryModel(sequelizeClient);
setupUserModel(sequelizeClient);
setupSkillModel(sequelizeClient);
