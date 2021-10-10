import { Model } from 'sequelize';
import { IUserSkillsData } from '../types';


export class UserSkills extends Model {
  public userId!: number;
  
  public skillId!: number;

  public static async getAll(): Promise<IUserSkillsData[]> {
    return this.findAll({
      raw: true,
      attributes: ['id', 'name'],
    });
  }
}
