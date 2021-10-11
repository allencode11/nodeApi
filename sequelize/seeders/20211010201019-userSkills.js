'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userSkills', [
      {
        userId: 3,
        skillId: 0,
      },
      {
        userId: 4,
        skillId: 1,
      },
      {
        userId: 4,
        skillId: 2,
      },
      {
        userId: 5,
        skillId: 3,
      },
      {
        userId: 6,
        skillId: 4,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userSkills', null, {});
  }
};
