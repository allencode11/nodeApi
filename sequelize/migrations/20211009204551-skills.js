'use strict';
const { DataTypes } = require ('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('skills', {
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
          field: 'name',
          type: DataTypes.STRING,
          allowNull: false,
      },
      categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Add reverting commands here.
    await queryInterface.dropTable('skills');
  }
};

