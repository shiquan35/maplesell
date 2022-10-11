"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "photos",
      [
        {
          // amethyst earring
          listing_id: 1,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/0/0a/MS_Amethyst_earring.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // aqua snowboard
          listing_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/3/3b/MS_Item_Aqua_Snowboard.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // astaroth bow
          listing_id: 3,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/e/ed/MS_Item_Astaroth_Bow.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // bain long bow
          listing_id: 4,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/e/e5/MS_Item_Bain_Long_Bow.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("photos", null, {});
  },
};