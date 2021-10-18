import { UserSkills } from '../repositories';
import { DataTypes, Sequelize } from 'sequelize';

export function setupUserSkillModel(sequelize: Sequelize) : typeof UserSkills {
    UserSkills.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        skillId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'userSkills',
        tableName: 'userSkills',
    });
    
    return UserSkills;
}
