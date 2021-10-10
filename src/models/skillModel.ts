import { User } from '../repositories';
import { DataTypes, Sequelize } from 'sequelize';

export function setupSkillModel(sequelize: Sequelize) : typeof User {
    User.init({
        id: { 
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            field: 'name',
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Skill',
        tableName: 'skills',
    });
    
    return User;
}