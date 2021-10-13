'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
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
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: DataTypes.NOW,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Add reverting commands here.
    await queryInterface.dropTable('categories');
  }
};
