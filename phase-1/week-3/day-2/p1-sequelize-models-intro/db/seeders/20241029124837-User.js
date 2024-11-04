"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: 'Дима',
          last_name: 'Димов',
          age: 22,
          gender: 'M',
          worker:'Developer',
          favourite_products_id: 1,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          first_name: 'Петр',
          last_name: 'Петров',
          age: 28,
          gender: 'M',
          worker:'Fermer',
          favourite_products_id: 2,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          first_name: 'Ольга',
          last_name: 'Иванова',
          age: 19,
          gender: 'W',
          worker:'Tester',
          favourite_products_id: 3,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          first_name: 'Катя',
          last_name: 'Петрова',
          age: 30,
          gender: 'W',
          worker:'Milkmaid',
          favourite_products_id: 4,
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          first_name: 'Егор',
          last_name: 'Егоров',
          age: 34,
          gender: 'M',
          worker:'Welder',
          favourite_products_id: 5,
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
