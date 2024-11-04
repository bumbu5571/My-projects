"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "box",
          width: 100,
          height: 100,
          expirationDate: 1,
          barcode: "a-s-d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "plastic bag",
          width: 10,
          height: 10,
          expirationDate: 50,
          barcode: "s-s-s",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "basket",
          width: 50,
          height: 100,
          expirationDate: 5,
          barcode: "f-s-d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sheet of cardboard",
          width: 1000,
          height: 5000,
          expirationDate: 5,
          barcode: "f-f-f",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("Products", null, {});
  },
};
