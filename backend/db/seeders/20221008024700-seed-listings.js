"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "listings",
      [
        {
          // 1
          name: "Amethyst Earring",
          price: 1000,
          bought: false,
          description: "Weapon Defense: 0",
          // buyer_id: 1,
          seller_id: 1,
          shop_id: 1,
          category_id: 1,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/0/0a/MS_Amethyst_earring.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 2
          name: "Aqua Snowboard",
          price: 2000,
          bought: false,
          description: "Weapon Attack: 30",
          // buyer_id: 1,
          seller_id: 1,
          shop_id: 1,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/3/3b/MS_Item_Aqua_Snowboard.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 3
          name: "Astaroth Bow",
          price: 3000,
          bought: false,
          description: "Weapon Attack: 50",
          // buyer_id: 1,
          seller_id: 1,
          shop_id: 2,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/e/ed/MS_Item_Astaroth_Bow.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 4
          name: "Bain Long Bow",
          price: 4000,
          bought: false,
          description:  "Weapon Attack: 77",
          // buyer_id: 1,
          seller_id: 1,
          shop_id: 2,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/e/e5/MS_Item_Bain_Long_Bow.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 5
          name: "Maple Lama Staff",
          price: 5000,
          bought: false,
          description: "Weapon Attack: 39, Magic Attack: 58",
          // buyer_id: 1,
          seller_id: 1,
          shop_id: 3,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/9/99/MS_Item_Maple_Lama_Staff.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 6
          name: "Maple Magician Shield",
          price: 5000,
          bought: false,
          description: "Weapon Defense: 31",
          // buyer_id: 1,
          seller_id: 1,
          shop_id: 3,
          category_id: 1,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/c/c5/MS_Item_Maple_Magician_Shield.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 7
          name: "Maple Knuckle",
          price: 5000,
          bought: false,
          description: "Weapon Attack: 38",
          // buyer_id: 1,
          seller_id: 2,
          shop_id: 4,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/a/a2/MS_Item_Maple_Knuckle.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 8
          name: "Astaroth Gun",
          price: 5000,
          bought: false,
          description: "Weapon Attack: 35",
          // buyer_id: 1,
          seller_id: 2,
          shop_id: 4,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/9/9b/MS_Item_Astaroth_Gun.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 9
          name: "Blood Avarice",
          price: 5000,
          bought: false,
          description: "Weapon Attack: 22",
          // buyer_id: 1,
          seller_id: 2,
          shop_id: 5,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/e/e7/MS_Item_Blood_Avarice.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 10
          name: "Blue Scarab",
          price: 5000,
          bought: false,
          description: "Weapon Attack: 34",
          // buyer_id: 1,
          seller_id: 2,
          shop_id: 5,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/a/a4/MS_Item_Blue_Scarab.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 11
          name: "Demon Bane",
          price: 5000,
          bought: false,
          description: "Weapon Attack: 83",
          // buyer_id: 1,
          seller_id: 2,
          shop_id: 6,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/b/b4/MS_Item_Demon_Bane.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 12
          name: "Dragon Chelbird",
          price: 5000,
          bought: false,
          description: "Weapon Attack: 107",
          // buyer_id: 1,
          seller_id: 2,
          shop_id: 6,
          category_id: 2,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/7/7e/MS_Item_Dragon_Chelbird.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 13
          name: "Return Scroll - Nearest Town",
          price: 250,
          bought: false,
          description:"Returns you to the closest town from where you are.",
          // buyer_id: 1,
          seller_id: 3,
          shop_id: 7,
          category_id: 3,
          photo: "https://global.hidden-street.net/sites/global.hidden-street.net/files/items/scroll001.gif?1243750904",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 14
          name: "Dark Scroll for Accessory for DEX 70%",
          price: 120000,
          bought: false,
          description:"Success rate: 70%, DEX+2. If failed, the item will be destroyed at a 50% rate.",
          // buyer_id: 1,
          seller_id: 3,
          shop_id: 7,
          category_id: 3,
          photo: "https://global.hidden-street.net/sites/global.hidden-street.net/files/items/Scroll70.png?1266778928",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 15
          name: "Emerald Ore",
          price: 200,
          bought: false,
          description:"The ore of a green jewel.",
          // buyer_id: 1,
          seller_id: 3,
          shop_id: 8,
          category_id: 4,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/6/66/MS_Item_Emerald_Ore.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 16
          name: "Garnet Ore",
          price: 200,
          bought: false,
          description:"The ore of a red jewel.",
          // buyer_id: 1,
          seller_id: 3,
          shop_id: 8,
          category_id: 4,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/4/42/MS_Item_Garnet_Ore.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 17
          name: "Noblesse Chair",
          price: 999999,
          bought: false,
          description: "A chair makes you feel like you're sitting in the lap of luxury. Also recovers 50 HP every 10 seconds.",
          // buyer_id: 1,
          seller_id: 3,
          shop_id: 9,
          category_id: 5,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/2/23/MS_Item_Noblesse_Chair.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 18
          name: "Pink Beach Parasol",
          price: 999999,
          bought: false,
          description: "A pink beach chair that makes you want to go to the beach. Restores 60 HP every 10 seconds.",
          // buyer_id: 1,
          seller_id: 3,
          shop_id: 9,
          category_id: 5,
          photo: "https://cdn.wikimg.net/en/strategywiki/images/6/6d/MS_Item_Pink_Beach_Parasol.png",
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