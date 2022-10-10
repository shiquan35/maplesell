"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "shops",
      [
        {
          name: "all",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bowman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "magician",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pirate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "thief",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "warrior",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "use",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "etc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "set-up",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("shops", null, {});
  },
};