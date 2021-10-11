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
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Add reverting commands here.
    await queryInterface.dropTable('skills');
  }
};

