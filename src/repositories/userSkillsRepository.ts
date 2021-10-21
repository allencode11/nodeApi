import { HasMany, Model } from 'sequelize';
import { SequelizeModels } from '../types';

export class UserSkills extends Model {
  public static associations: {
    category: HasMany<UserSkills>,
    userSkills: HasMany<UserSkills>,
  };
  
  public static associate(models: SequelizeModels): void {
    UserSkills.belongsTo(models.User, { foreignKey: 'userId', as: 'userSkills' });
    UserSkills.belongsTo(models.Skill, { foreignKey: 'skillId', as: 'category' });
  };
}
