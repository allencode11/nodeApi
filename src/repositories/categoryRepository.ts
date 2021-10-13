import { Model } from 'sequelize';
import { ICategory, Params } from '../types';

export class Category extends Model {
  public id!: number;
  
  public name!: string;
  
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public static async getAllPaginated(params: Params): Promise<{ rows: Category[], count: number }> {
    const { limit, offset } = params;

    return this.findAndCountAll({
      raw: true,
      offset,
      limit,
      order: [['id', 'asc']],
    });
  }

  public static async get(name: string): Promise<Category> {
    return this.findOne({
      raw: true,
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
