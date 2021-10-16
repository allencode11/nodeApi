import { Model, HasMany } from 'sequelize';
import { IUserData, Params, SequelizeModels } from '../types';

export class User extends Model {
  public static associations: {
    skill: HasMany<User>,
  };

  public id!: number;
  
  public firstName!: string;
  
  public lastName!: string;
  
  public description: string;
  
  public email: string;
  
  public avatar: string;
  
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  // through: 'writer_of_project'
  // foreign-key: 'user'
  // as: 'projects'
  
  public static associate(models: SequelizeModels): void {
    User.belongsToMany(models.Skill, { through: 'id', as: 'skill'});
  }
  
  public static async getAllPaginated(params: Params): Promise<{ rows: User[], count: number }> {
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

  public static async addUser(obj: IUserData): Promise<User> {
    return this.create(obj);
  };
  

  public static async deleteUser(id: number): Promise<number> {
    return this.destroy({ where: {id} });
  };

  public static async editUser(obj: IUserData, id: number): Promise<[number, User[]]> {
    return this.update({
      firstName: obj.firstName,
      lastName: obj.lastName,
      avatar: obj.avatar,
      description: obj.description,
      email: obj.email }, { where: {id} });
  }

  public static async getUser(id: number): Promise<User> {
    return this.findOne({
      raw: true,
      include: [
        {
          association: this.associations.skill,
          attributes: ['id', 'name'],
        },
      ],
      where: { 
        id,
      },    
    });
  }
}
