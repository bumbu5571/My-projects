"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tanya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ivan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("Users", null, {});
  },
};
