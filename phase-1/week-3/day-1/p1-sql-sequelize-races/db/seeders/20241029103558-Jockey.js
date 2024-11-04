"use strict";

module.exports = {
  async up(queryInterface) {
    Example: await queryInterface.bulkInsert(
      "Jockeys",
      [
        {
          name: "John",
          createdAt: new Date()
        },
        {
          name: "Ivan",
          createdAt: new Date()
        },
        {
          name: "Leon",
          createdAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    Example: await queryInterface.bulkDelete("People", null, {});
  },
};
