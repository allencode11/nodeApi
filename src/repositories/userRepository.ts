import { Model } from 'sequelize';
import { IUserData, Params } from '../types';

export class User extends Model {
  public id!: number;
  
  public firstName!: string;
  
  public lastName!: string;
  
  public description: string;
  
  public email: string;
  
  public avatar: string;
  
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
  
  public static async getAllPaginated(params: Params): Promise<{ rows: User[], count: number }> {
    const { limit, offset } = params;

    return this.findAndCountAll({
      raw: true,
      offset,
      limit,
      order: ['id', 'asc'],
    });
  }

  public static async addUser(obj: IUserData): Promise<User> {
    return this.create(obj);
  };
  

  public static async deleteUser(id: number): Promise<number> {
    return this.destroy({ where: {id} });
  };

  public static async editUser(obj: IUserData, id: number): Promise<[number, User[]]> {
    return this.update({ obj }, { where: {id} });
  }

  public static async getUser(id: number): Promise<User> {
    return this.findByPk(id);
  }
}
