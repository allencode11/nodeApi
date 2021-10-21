'use strict';
const { DataTypes } = require ('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userSkills', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: { 
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      skillId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        default: DataTypes.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        default: DataTypes.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Add reverting commands here.
    await queryInterface.dropTable('userSkills');
  }
};

