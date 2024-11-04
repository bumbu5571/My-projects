"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: 'banana',
          product_type: 'fruit',
          date_manufacture: new Date(2024,9,28,14),
          expiration_date: 5,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          name: 'potato',
          product_type: 'vegetable',
          date_manufacture: new Date(2024,7,22,10),
          expiration_date: 240,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          name: 'apple',
          product_type: 'fruit',
          date_manufacture: new Date(2024,9,25,11),
          expiration_date: 60,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          name: 'milk',
          product_type: 'baked milk',
          date_manufacture: new Date(2024,9,27,15),
          expiration_date: 5,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          name: 'pork',
          product_type: 'meat',
          date_manufacture: new Date(2024,9,26,18),
          expiration_date: 5,
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
