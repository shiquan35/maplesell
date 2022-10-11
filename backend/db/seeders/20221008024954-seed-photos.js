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
        {
          // maple lama staff
          listing_id: 5,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/9/99/MS_Item_Maple_Lama_Staff.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // maple magician shield
          listing_id: 6,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/c/c5/MS_Item_Maple_Magician_Shield.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // maple knuckle
          listing_id: 7,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/a/a2/MS_Item_Maple_Knuckle.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // astaroth gun
          listing_id: 8,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/9/9b/MS_Item_Astaroth_Gun.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // blood avarice
          listing_id: 9,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/e/e7/MS_Item_Blood_Avarice.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // blue scarab
          listing_id: 10,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/a/a4/MS_Item_Blue_Scarab.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // demon bane
          listing_id: 11,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/b/b4/MS_Item_Demon_Bane.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // dragon chelbird
          listing_id: 12,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/7/7e/MS_Item_Dragon_Chelbird.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Return Scroll - Nearest Town
          listing_id: 13,
          photo: "https://global.hidden-street.net/sites/global.hidden-street.net/files/items/scroll001.gif?1243750904",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Dark Scroll for Accessory for DEX 70%	
          listing_id: 14,
          photo: "https://global.hidden-street.net/sites/global.hidden-street.net/files/items/Scroll70.png?1266778928",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Emerald Ore
          listing_id: 15,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/6/66/MS_Item_Emerald_Ore.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Garnet Ore
          listing_id: 16,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/4/42/MS_Item_Garnet_Ore.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Noblesse Chair
          listing_id: 17,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/2/23/MS_Item_Noblesse_Chair.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Pink Beach Parasol
          listing_id: 18,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/6/6d/MS_Item_Pink_Beach_Parasol.png",
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