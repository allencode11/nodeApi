'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userSkills', [
      {
        userId: 1,
        skillId: 0,
      },
      {
        userId: 0,
        skillId: 1,
      },
      {
        userId: 0,
        skillId: 2,
      },
      {
        userId: 1,
        skillId: 3,
      },
      {
        userId: 1,
        skillId: 4,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userSkills', null, {});
  }
};
