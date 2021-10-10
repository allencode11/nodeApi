'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('skills', [
      {
        id: 0,
        name: 'Java',
        categoryId: '0',
      },
      {
        id: 1,
        name: 'NodeJs',
        categoryId: '1',
      },
      {
        id: 2,
        name: 'EntityFramework',
        categoryId: '2',
      },
      {
        id: 3,
        name: 'English',
        categoryId: '3',
      },
      {
        id: 4,
        name: 'JavaScript',
        categoryId: '0',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('skills', null, {});
  }
};
