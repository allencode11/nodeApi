import { Model } from 'sequelize';
import { ICategoryData } from '../types';


export class Category extends Model {
  public id!: number;
  
  public name!: string;

  public static async getAll(): Promise<ICategoryData[]> {
    return await this.findAll({
      raw: true,
      attributes: ['id', 'name'],
    });
  };

  public static async delete(name: string): Promise<ICategoryData[]> {
    await this.destroy({ where: { name } });

    return await this.findAll({
      raw: true,
      attributes: ['id', 'name'],
    });
  };

  public static async put(nameObj: ICategoryData, id: number): Promise<ICategoryData[]> {
    
    await this.update({ name: nameObj }, { where: { id } })
    
    return await this.findAll({
      raw: true,
      attributes: ['id', 'name'],
    });
  };

  public static async post(nameObj: ICategoryData): Promise<ICategoryData[]> {
    await this.create({ name: nameObj });

    return await this.findAll({
      raw: true,
      attributes: ['id', 'name'],
    });
  };
}
