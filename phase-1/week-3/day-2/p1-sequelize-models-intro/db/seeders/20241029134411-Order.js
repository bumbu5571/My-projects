"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Orders",
      [
        {
          user_id: 1,
          product_id: 4,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          user_id: 1,
          product_id: 1,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          user_id: 2,
          product_id: 5,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          user_id: 2,
          product_id: 3,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          user_id: 3,
          product_id: 5,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          user_id: 4,
          product_id: 2,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          user_id: 4,
          product_id: 4,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          user_id: 4,
          product_id: 3,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          user_id: 5,
          product_id: 5,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("People", null, {});
  },
};
