"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "items",
      [
        {
          name: "Amethyst Earring",
          category_id: 1,
          job_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Aqua Snowboard",
          category_id: 2,
          job_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Astaroth Bow",
          category_id: 2,
          job_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bain Long Bow",
          category_id: 2,
          job_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 1,
          job_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 1,
          job_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Abyss Shooter",
          category_id: 2,
          job_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 1,
          job_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Admantium Avarice",
          category_id: 2,
          job_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 1,
          job_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 1,
          job_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 1,
          job_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 3,
          job_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 3,
          job_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Emerald Ore",
          category_id: 4,
          job_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 4,
          job_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 5,
          job_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          category_id: 5,
          job_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("items", null, {});
  },
};