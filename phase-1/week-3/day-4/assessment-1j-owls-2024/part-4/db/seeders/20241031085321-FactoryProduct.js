"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "FactoryProducts",
      [
        {
          productId: 1,
          factoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 4,
          factoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          factoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          factoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("FactoryProducts", null, {});
  },
};
