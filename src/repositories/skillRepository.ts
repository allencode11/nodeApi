import { Category, User, UserSkills } from '../repositories';
import { HasMany, Model } from 'sequelize';
import { ISkillsData, IUserData, Params, SequelizeModels} from '../types';
import { Users } from 'controllers';

export class Skill extends Model {
  public static associations: {
    category: HasMany<Skill>,
    users: HasMany<Skill>,
  };
  
  public id: number;

  public name: string;
  
  public categoryId: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
  
  public static associate(models: SequelizeModels): void {
    Skill.belongsTo(models.User, { foreignKey: 'id', as: 'users'});
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
          attributes: ['id', 'name'],
        },
        {
          association: this.associations.users,
        },
      ],
      order: [['id', 'asc']],
    });
  };

  public static async getIdByName(name: string): Promise<string> {
    const skill = await this.findOne( { where: { name } });

    return skill.name;
  }

  public static async get(id: number): Promise< { rows: Category[], count: number }> {

    return this.findAndCountAll({
      raw: true,
      include: [
        {
          association: this.associations.users,
        },
        {
          association: this.associations.category,
        },
      ],
      where: { id },
      order: [['id', 'asc']],
    });
  }
  
  public static async addSkill(skill: ISkillsData[]): Promise<number> {  
    try {
      skill.forEach( async (element) => {
        const { name, categoryId } = element;

        if (await this.findByPk(name)) {
          throw new Error('Item already exists');
        } else {
          await this.create({name, categoryId});
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
      const tmp = await this.findOne({where: {id}});
      await UserSkills.destroy( { where: { skillId: id , userId } } );
    }
    catch (e) {
      throw new Error('Item was not deleted');
    }
    return 0
  };

  public static async deleteSkillFromDb(id: number): Promise<number> {
    try {
      const tmp = await this.findByPk(id);
      await this.destroy( { where: { id }});
    }
    catch (e) {
      console.log(e);
      throw new Error('Item was not deleted');
    }
    return 0
  };
}
