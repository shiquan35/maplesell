"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category, {
        as: "category",
        foreignKey: "category_id",
      });
      this.belongsTo(models.job, { as: "job", foreignKey: "job_id" });
      this.belongsToMany(models.user, { through: "inventories" });
    }
  }
  item.init(
    {
      name: DataTypes.STRING,
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
      },
      job_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "jobs",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "item",
      underscored: true,
    }
  );
  return item;
};
