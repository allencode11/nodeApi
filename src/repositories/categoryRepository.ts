import e from 'express';
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

  public static associate(models: SequelizeModels): void {
    Category.hasMany(models.Skill, {foreignKey: 'categoryId', sourceKey: 'id', as: 'skill'});
  };

  public static async getAllPaginated(params: Params): Promise<{ rows: Category[], count: number }> {
    const { limit, offset } = params;

    return this.findAndCountAll({
      raw: true,
      offset,
      limit,
      // include: [
      //   {
      //     association: this.associations.skill,
      //     attributes: ['id', 'name'],
      //   },
      // ],
      order: [['id', 'asc']],
    });
  }

  public static async get(id: number): Promise<Category> {
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
  };

  public static async delete(id: number): Promise<number | string> {

    try {
      const temp = await this.findByPk(id);
      return await this.destroy({ where: { id } });
    } catch (e) {
      return 'error';
    }
    
  };

  public static async put(nameObj: string, id: number): Promise<[number, Category[]]> {
    
    const temp = this.update({ name: nameObj }, { where: { id } });
    return temp;
  };

public static async post(nameObj: string): Promise<ICategory | string > {
    const item = await this.findOne({ where: { name: nameObj } });
    let message;
    if (item) {
      message = 'Item already exists';
    } else {
      return this.create({ name: nameObj });
    }

    return message;
  };
}
