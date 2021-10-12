'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Languages',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      },
      {
        name: 'Technologies',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      },
      {
        name: 'Frameworks',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      },
      {
        name: 'Others',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
