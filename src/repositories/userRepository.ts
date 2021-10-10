import { Model } from 'sequelize';

export class User extends Model {
  public id!: number;
  
  public firstName!: string;
  
  public lastName!: string;
  
  public description: string;
  
  public email: string;
  
  public avatar: string;
  
  public skillId!: number;
}
