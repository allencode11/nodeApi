'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        id: 0,
        name: 'Languages',
      },
      {
        id: 1,
        name: 'Technologies',
      },
      {
        id: 2,
        name: 'Frameworks',
      },
      {
        id: 3,
        name: 'Others',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
