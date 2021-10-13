import { Model } from 'sequelize';
import { IUserSkillsData } from '../types';


export class UserSkills extends Model {
  public userId!: number;
  
  public skillId!: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
  
  public static async getAll(): Promise<IUserSkillsData[]> {
    return this.findAll({
      raw: true,
      attributes: ['id', 'name'],
    });
  }

  public static async getSkillsByUserId(id: number): Promise<number[]> {
    const skillConection = await this.findAll({where: {userId: id}});
    
    const res: number[] = [];
    skillConection.forEach(element => {
      res.push(element.skillId);
    })
    return res;
  }
}
