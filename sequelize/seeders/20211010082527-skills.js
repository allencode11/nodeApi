'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('skills', [
      {
        name: 'Java',
        categoryId: 1,
      },
      {
        name: 'NodeJs',
        categoryId: 3,
      },
      {
        name: 'EntityFramework',
        categoryId: 3,
      },
      {
        name: 'English',
        categoryId: 1,
      },
      {
        name: 'JavaScript',
        categoryId: 1,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('skills', null, {});
  }
};
