"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "armor",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "weapon",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "use",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "etc",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "set-up",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};