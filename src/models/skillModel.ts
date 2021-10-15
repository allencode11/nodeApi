import { Skill , Category, User} from '../repositories';
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
        categoryId: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'skill',
        tableName: 'skills',
    });
    
    return Skill;
};
