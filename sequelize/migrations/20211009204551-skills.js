'use strict';
const { DataTypes } = require ('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('skills', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
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
    await queryInterface.dropTable('skills');
  }
};

