import { Model } from 'sequelize';
import { ICategoryData, ICategory } from '../types';


export class Category extends Model {
  public id!: number;
  
  public name!: string;
  
  public createdAt: Date

  public static async getAll(): Promise<ICategoryData[]> {
    return this.findAll({
      raw: true,
      attributes: ['id', 'name'],
    });
  };

  public static async get(name: string): Promise<ICategory> {
  return this.findByPk(name);
  };

  public static async delete(name: string): Promise<number> {

    return this.destroy({ where: { name } });
  };

  public static async put(nameObj: string, id: number): Promise<any> {
    
    return this.update({ name: nameObj }, { where: { id } });
  };

  public static async post(nameObj: string): Promise<ICategory> {
    
    return this.create({ name: nameObj });
  };
}
