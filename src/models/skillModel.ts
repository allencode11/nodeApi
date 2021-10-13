import { Skill } from '../repositories';
import { DataTypes, Sequelize } from 'sequelize';

export function setupSkillModel(sequelize: Sequelize) : typeof Skill {
    Skill.init({
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
        modelName: 'skills',
        tableName: 'skills',
    });
    
    return Skill;
}
