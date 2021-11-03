import { Category, User, UserSkills } from '../repositories';
import { BelongsToMany, HasMany, Model } from 'sequelize';
import { ISkillsData, IUserData, Params, SequelizeModels} from '../types';
import { json } from 'sequelize';
import { Users } from 'controllers';

export class Skill extends Model {
  public static associations: {
    category: HasMany<Skill>,
    userSkills: HasMany<Skill>,
  };
  
  public id: number;

  public name: string;
  
  public categoryId: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
  
  public static associate(models: SequelizeModels): void {
    Skill.hasMany(models.UserSkills, { foreignKey: 'skillId', sourceKey: 'id', as: 'userSkills' });
    Skill.belongsTo(models.Category, { foreignKey: 'categoryId', targetKey: 'id', as: 'category' });
  };

  public static async getAllPaginated(params: Params): Promise<{ rows: Skill[], count: number }> {
    const { limit, offset } = params;

    return this.findAndCountAll({
      raw: true,
      offset,
      limit,
      include: [
        {
          association: this.associations.category,
          attributes: ['name'],
        },
        {
          association: this.associations.userSkills,
          attributes: ['userId'],
        },
      ],
      order: [['id', 'asc']],
    });
  };

  public static async getIdByName(name: string): Promise<string> {
    const skill = await this.findOne( { where: { name } });

    return skill.name;
  }

  public static async get(id: number): Promise<Skill> {

    const skill = this.findOne({
      raw: true,
      where: { id },
    });

    return skill;
  }
  
  public static async getUsers(id: number): Promise<Users> {

  const users = UserSkills.findAll({
    raw: true,
    where: { skillId: id },
    attributes: ['userId'],
  });
  return users;

  };

  public static async addSkill(skill: ISkillsData[]): Promise<[Skill, boolean]> {  
    let tempSkill;
    
    try {
      skill.forEach( async (element) => {
        const { name } = element;
        tempSkill = await this.findOrCreate({where: {name}, defaults: element});
        });
    } catch (e) {
      tempSkill = null;
      throw new Error('Item was not added');
    }

    return tempSkill;
  };

  public static async addSkillToUser(skillId: number, id: number): Promise<void> {  
    await UserSkills.findOrCreate({where: {skillId , userId: id}, defaults: {skillId, userId: id}});
  };

  public static async deleteSkill(userId: number, id: number): Promise<number> {
    try {
      const tmp = await this.findOne({where: {id}});
      await UserSkills.destroy( { where: { skillId: id , userId } } );
    }
    catch (e) {
      throw new Error('Item was not deleted');
    }
    return 0
  };

  public static async deleteSkillFromDb(id: number): Promise<number> {
      return await this.destroy( { where: { id }});
  };
}
