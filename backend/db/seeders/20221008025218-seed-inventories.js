"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "inventories",
      [
        {
          buyer_id: "all",
          shop_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          buyer_id: "all",
          shop_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("inventories", null, {});
  },
};