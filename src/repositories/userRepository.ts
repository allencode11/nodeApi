import { UserSkills } from '../repositories';
import { Model, HasMany} from 'sequelize';
import { IUserData, Params, SequelizeModels } from '../types';

export class User extends Model {
  public static associations: {
    userSkills: HasMany<User>,
  };

  public id!: number;
  
  public firstName!: string;
  
  public lastName!: string;
  
  public description: string;
  
  public email: string;
  
  public avatar: string;
  
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
  
  public static associate(models: SequelizeModels): void {
    User.hasMany(models.UserSkills, { foreignKey: 'userId', sourceKey: 'id', as: 'userSkills' });  
  };


  public static async getAllPaginated(params: Params): Promise<{ rows: User[], count: number }> {
    const { limit, offset } = params;

    return this.findAndCountAll({
      raw: true,
      offset,
      limit,
      include: [
        {
          association: this.associations.userSkills,
          attributes: [['id', 'name']],
        },
      ],
      order: [['id', 'asc']],
    });
  };

  public static async addUser(obj: IUserData): Promise<[User, boolean ]> {
    const temp = this.findOrCreate({where: {email: obj.email}, defaults: obj});

    return temp;
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
  };

  public static async getUser(id: number): Promise<User> {
    return this.findByPk(id);
  };

  public static async getUserSkills(id: number): Promise<UserSkills[]> {
    return UserSkills.findAll({ where: { userId: id }, attributes: ['skillId']});
  };

  public static async getUserByEmail(email: string): Promise<User> {
    return this.findOne({
      raw: true,
      nest: true,
      include: {
        association: this.associations.userSkills,
        attributes: ['id', 'name', 'categoryId'],
        },
      where: { 
        email,
      },    
    });
  }
}
