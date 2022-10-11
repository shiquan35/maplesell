"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "spacecat@mail.com",
          password: "nyancat",
          username: "SpaceCat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "billybuffalo@mail.com",
          password: "billythebuffalo",
          username: "BillyBuffalo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "shrek@mail.com",
          password: "ThisIsMySwamp",
          username: "Shrek",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};