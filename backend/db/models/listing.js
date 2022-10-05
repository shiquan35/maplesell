"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { as: "buyer", foreignKey: "buyerId" });
      this.belongsTo(models.user, { as: "seller", foreignKey: "sellerId" });
      this.belongsTo(models.shop, { as: "shop", foreignKey: "shopId" });
      this.belongsTo(models.item, { as: "item", foreignKey: "itemId" });
      this.hasOne(models.photo, { as: "photo", foreignKey: "photo" });
    }
  }
  listing.init(
    {
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      buyerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      sellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
        references: {
          model: "items",
          key: "id",
        },
      },
      shopId: {
        type: DataTypes.INTEGER,
        references: {
          model: "shops",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "listing",
      underscored: true,
    }
  );
  return listing;
};
