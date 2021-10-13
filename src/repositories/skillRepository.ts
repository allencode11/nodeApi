import { Category, User, UserSkills } from '../repositories';
import { Model } from 'sequelize';
import { ISearchData, ISkillsData, IUserData, Params } from '../types';

export class Skill extends Model {
  public id: number;

  public name: string;
  
  public categoryId: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
  
  public static async getAllPaginated(params: Params): Promise<{ rows: Skill[], count: number }> {
    const { limit, offset } = params;

    return this.findAndCountAll({
      raw: true,
      offset,
      limit,
      order: ['id', 'asc'],
    });
  }

  public static async getIdByName(skills: string[]): Promise<number[]> {
    
    const response: number[] = [];

    skills.forEach(async (element) => {
      const skillItem = await this.findByPk(element);
      response.push(skillItem.id);
    });
    
    return response;
  }

  public static async getUserNameBySkill(id: number): Promise<string> {
    const skill =  await this.findByPk(id);

    return skill.name;
  };
  
  public static async addSkill(skill: ISkillsData[]): Promise<number> {  
    try {
      skill.forEach( async (element) => {
        if (await this.findByPk(element.name)) {
          throw new Error('Item already exists');
        } else {
          await this.create(element);
        }
      });
    }
    catch {
      throw new Error('Item was not added');
    }
    return 0
  };

  public static async deleteSkill(userId: number, id: number): Promise<number> {
    try {
      const tmp = await this.findByPk(id);
      await UserSkills.destroy( { where: { skillId: id , userId } } );
    }
    catch {
      throw new Error('Item was not deleted');
    }
    return 0
  };

  public static async searchUsersBySkills(obj: string[]): Promise<IUserData[]> {
    const skillsId: number[] = [];
    obj.forEach(async element => {
      const temp = await this.findByPk(element);
      skillsId.push(temp.id);
    });

    const userIDs: number[] =[];

    skillsId.forEach(async element => {
      const temp = await UserSkills.findAll({ where: { skillId: element } });
      userIDs.push(...temp.map((item) => item.userId));
    });

    const users: IUserData[] = [];
    userIDs.forEach(async element => {
      users.push(await User.findByPk(element));
    });

    return users;
  };
}
