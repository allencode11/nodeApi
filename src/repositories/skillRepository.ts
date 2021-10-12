import { where } from 'sequelize';
import { Model } from 'sequelize';
import { ISkillsData } from 'types';

export class Skill extends Model {
  public id: number;
  public name: string;
  
  public categoryId: number;

  public static async getAll(): Promise<ISkillsData[]> {
    return await this.findAll({
      raw: true,
      attributes: ['id', 'name', 'categoryId'],
    });
  };

  public static async getByName(skills: string[]): Promise<ISkillsData[]> {
    
    const response: ISkillsData[] = [];

    skills.forEach(async (element) => {
      response.push(await this.findByPk(element));
    });
    
    return response;
  }

  public static async addSkill(skill: ISkillsData): Promise<number> {  
    try {
      await this.create(skill);
    }
    catch {
      throw new Error('Item was not added');
    }
    return 0
  };

  public static async deleteSkill(obj: ISkillsData): Promise<number> {
    try {
      await this.destroy( { where: { name: obj.name } });
    }
    catch {
      throw new Error('Item was not deleted');
    }
    return 0
  };

  public static async editSkill(obj: ISkillsData, id: number): Promise<void> {
    // const response = this.update({ name: obj.name, categoryId: obj.categoryId}, { where: { id } } );
    
    // return response;
  }
}
