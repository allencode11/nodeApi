import { Model } from 'sequelize';
import { ICategoryData } from '../types';


export class Category extends Model {
  public id!: number;
  
  public name!: string;

  public static async getAll(): Promise<ICategoryData[]> {
    return this.findAll({
      raw: true,
      attributes: ['id', 'name'],
    });
  };
}
