'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userSkills', [
      {
        userId: 1,
        skillId: 1,
      },
      {
        userId: 1,
        skillId: 1,
      },
      {
        userId: 1,
        skillId: 0,
      },
      {
        userId: 1,
        skillId: 2,
      },
      {
        userId: 1,
        skillId: 2,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userSkills', null, {});
  }
};
