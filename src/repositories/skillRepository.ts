import { Model } from 'sequelize';
import { ISkillsData } from 'types';

export class Skill extends Model {
  public id!: number;
  
  public name!: string;
  
  public categoryId!: number;

  public static async getAll(): Promise<ISkillsData[]> {
    return this.findAll({
      raw: true,
      attributes: ['id', 'name'],
    });
  }
}
