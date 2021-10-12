'use strict';
const { DataTypes } = require ('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userSkills', {
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
    await queryInterface.dropTable('userSkills');
  }
};

