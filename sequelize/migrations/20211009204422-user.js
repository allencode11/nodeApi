'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 'client',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Add reverting commands here.
    await queryInterface.dropTable('users');
  }
};

