import { HasOne, Model, HasMany, Op } from 'sequelize';
import { ICategory, Params, SequelizeModels } from '../types';

export class Category extends Model {
  public static associations: {
    skill: HasOne<Category>,
    };
  

  public id!: number;
  
  public name!: string;
  
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  // Category.hasMany(models.Skill, {foreignKey: 'categoryId', sourceKey: 'id'});
  // Skill.belongsTo(Category, {foreignKey: 'categoryId', targetKey: 'id'});

  // Skill.belongsToMany(User, {through: 'userId'});
  // User.belongsToMany(Skill, {through: 'userID'});
  
  public static associate(models: SequelizeModels): void {
    Category.hasMany(models.Skill, {foreignKey: 'categoryId', sourceKey: 'id', as: 'skill'});
  };

  public static async getAllPaginated(params: Params): Promise<{ rows: Category[], count: number }> {
    const { limit, offset } = params;

    return this.findAndCountAll({
      raw: true,
      offset,
      limit,
      include: [
        {
          association: this.associations.skill,
          attributes: ['id', 'name'],
        },
      ],
      order: [['id', 'asc']],
    });
  }

  public static async get(name: string): Promise<Category> {
    return this.findOne({
      raw: true,
      include: [
        {
          association: this.associations.skill,
          attributes: ['id', 'name'],
        },
      ],
      where: { 
        name,
      },    
    });
  };

  public static async delete(name: string): Promise<number> {

    return this.destroy({ where: { name } });
  };

  public static async put(nameObj: string, id: number): Promise<[number, Category[]]> {
    
    const temp = this.update({ name: nameObj }, { where: { id } });
    return temp;
  };

  public static async post(nameObj: string): Promise<ICategory> {
    
    return this.create({ name: nameObj });
  };
}
