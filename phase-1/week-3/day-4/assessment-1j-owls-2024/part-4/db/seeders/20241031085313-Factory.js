"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Factories",
      [
        {
          address: "ул.Советская. дом 112",
          contactDetails: "+7-952-452-15-24",
          typeActivity: "Производство картона",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          address: "ул.Октября. дом 242",
          contactDetails: "+7-912-424-14-53",
          typeActivity: "Производство пакетов",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          address: "ул.Победы. дом 102",
          contactDetails: "+7-942-53-86-24",
          typeActivity: "Производство карзинок",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete("Factories", null, {});
  },
};
