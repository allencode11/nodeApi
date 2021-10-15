'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'Admin',
        lastName: 'Admin',
        email:'admin@gmail.com',
        description: 'null',
        role: 'admin',
        avatar: 'user/avatar',
      },
      {
        firstName: 'Alina',
        lastName: 'Enache',
        email:'al.el.en.lina@gmail.com',
        description: 'client',
        avatar: 'user/avatar1',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
