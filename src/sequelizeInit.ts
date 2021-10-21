// tslint:disable-next-line: no-var-requires
const Config = require('../config/default');
import { Sequelize, Dialect } from 'sequelize';
import { setupCategoryModel, setupSkillModel, setupUserModel, setupUserSkillModel } from './models';
import { SequelizeModels } from './types';

const env = process.env.NODE_ENV === 'production' ? 'production': 'development';

const { username, password, database, host, dialect } = Config.development;

export const sequelizeClient = new Sequelize(database, username, password, { host, dialect: dialect as Dialect, logging: console.log });

const categoryModel = setupCategoryModel(sequelizeClient);
const userModel = setupUserModel(sequelizeClient);
const skillModel = setupSkillModel(sequelizeClient);
const userSkills = setupUserSkillModel(sequelizeClient);

const models: SequelizeModels = {
    Category: categoryModel,
    User: userModel,
    Skill: skillModel,
    UserSkills: userSkills,
};

Object.keys(models).forEach((name: string) => {
    const modelName = name as keyof SequelizeModels;
      if ('associate' in models[modelName]) {
        (models[modelName]).associate(models);
      }
  });