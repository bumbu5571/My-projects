"use strict";
const {createBooks} = require("../../postgres")

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Books",
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("Books", null, {});
  },
};
