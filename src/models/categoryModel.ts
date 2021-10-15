import { Category } from '../repositories';
import { DataTypes, Sequelize } from 'sequelize';

export function setupCategoryModel(sequelize: Sequelize) : typeof Category {
    Category.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: 'category',
        tableName: 'categories',
    });
    
    return Category;
};
