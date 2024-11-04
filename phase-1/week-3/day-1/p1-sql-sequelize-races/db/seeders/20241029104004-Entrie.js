"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Entries",
      [
        {
          race_id: 1,
          jockey_id: 1,
          horse_id: 1,
          createdAt: new Date(),
        },
        {
          race_id: 1,
          jockey_id: 2,
          horse_id: 2,
          createdAt: new Date(),
        },
        {
          race_id: 1,
          jockey_id: 3,
          horse_id: 3,
          createdAt: new Date(),
        },
        {
          race_id: 2,
          jockey_id: 1,
          horse_id: 2,
          createdAt: new Date(),
        },
        {
          race_id: 2,
          jockey_id: 2,
          horse_id: 3,
          createdAt: new Date(),
        },
        {
          race_id: 2,
          jockey_id: 3,
          horse_id: 1,
          createdAt: new Date(),
        },
        {
          race_id: 3,
          jockey_id: 1,
          horse_id: 3,
          createdAt: new Date(),
        },
        {
          race_id: 3,
          jockey_id: 2,
          horse_id: 3,
          createdAt: new Date(),
        },
        {
          race_id: 3,
          jockey_id: 3,
          horse_id: 2,
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("People", null, {});
  },
};
