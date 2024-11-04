"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Comments",
      [
        {
          postId: 2,
          userId: 1,
          text: " NO NO NO NO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          userId: 3,
          text: " Not problem users",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("Comments", null, {});
  },
};
