import { Model } from 'sequelize';
import { ISkillsData } from 'types';

export class User extends Model {
  public id!: number;
  
  public firstName!: string;
  
  public lastName!: string;
  
  public description: string;
  
  public email: string;
  
  public avatar: string;
  
  public static async getAllUsers(): Promise<any[]> {
    return this.findAll({
      raw: true,
      attributes: ['id', 'firstName', 'lastName', 'description', 'email', 'avatar'],
    });
  };

  public static async addUser(): Promise<any[]> {
    return this.findAll({
      raw: true,
      attributes: ['name', 'categoryId'], // how to use category name
    });
  };

  public static async deleteUser(): Promise<any[]> {
    return this.findAll({
      raw: true,
      attributes: ['name', 'categoryId'], // how to use category name
    });
  };

  public static async editUser(): Promise<any[]> {
    return this.findAll({
      raw: true,
      attributes: ['name', 'categoryId'], // how to use category name
    });
  }

  public static async getUser(): Promise<any[]> {
    return this.findAll({
      raw: true,
      attributes: ['name', 'categoryId'], // how to use category name
    });
  }
}
