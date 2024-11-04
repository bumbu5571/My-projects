"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "ReplyComments",
      [
        {
          postId: 2,
          commentId: 1,
          userId: 3,
          text: "Ho hoh ho hoho",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          commentId: 1,
          userId: 2,
          text: "this bad comment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          commentId: 2,
          userId: 3,
          text: "Aza zaz aza za za",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("ReplyComments", null, {});
  },
};
