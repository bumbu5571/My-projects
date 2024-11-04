"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Races",
      [
        {
          name: "one",
          location: "Лес",
          date: new Date(2024,10,3,12),
          createdAt: new Date()
        },
        {
          name: "two",
          location: "Пустыня",
          date: new Date(2024,10,4,12),
          createdAt: new Date()
        },
        {
          name: "three",
          location: "Поле",
          date: new Date(2024,10,5,12),
          createdAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("People", null, {});
  },
};
