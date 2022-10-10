"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "listings",
      [
        {
          name: "Amethyst Earring",
          price: 1000,
          description: "lalala",
          buyer_id: 1,
          seller_id: 99,
          item_id: 1,
          shop_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("listings", null, {});
  },
};