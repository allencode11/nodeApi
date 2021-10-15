'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('skills', [
      {
        name: 'Java',
        categoryId: 0,
      },
      {
        name: 'NodeJs',
        categoryId: 1,
      },
      {
        name: 'EntityFramework',
        categoryId: 2,
      },
      {
        name: 'English',
        categoryId: 3,
      },
      {
        name: 'JavaScript',
        categoryId: 0,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('skills', null, {});
  }
};
