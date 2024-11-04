"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Horses",
      [
        {
          name: "Буран",
          breed: "Абиссинская",
          createdAt: new Date()
        },
        {
          name: "Егерь",
          breed: "Морган",
          createdAt: new Date()
        },
        {
          name: "Закат",
          breed: "Пейнтхорс",
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
